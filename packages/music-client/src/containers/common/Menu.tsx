import { tw } from '@/twMerge';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import ArrowIcon from '@/assets/icons/arrow_right.svg?react';

const MenuContext = createContext<{
  openSubmenuKey: string | null;
  onChangeOpenSubmenuKey: (openSubmenuKey: string | null) => void;
  // 메뉴가 선택되었을 떄 닫히도록 함.
  onClose: () => void;
}>({
  openSubmenuKey: null,
  onChangeOpenSubmenuKey: () => {},
  onClose: () => {},
});

function Menu({
  children,
  className,
  onClose,
}: Cn<PropsWithChildren<{ onClose: () => void }>>) {
  const [openSubmenuKey, setOpenSubmenuKey] = useState<string | null>(null);

  const handleClose = () => {
    setOpenSubmenuKey(null);
    onClose();
  };

  return (
    <MenuContext.Provider
      value={{
        openSubmenuKey,
        onChangeOpenSubmenuKey: setOpenSubmenuKey,
        onClose: handleClose,
      }}
    >
      <div
        className={tw(
          'absolute left-0 right-0 bg-gray600 border-[#D9D9D9] border-2 z-20',
          className
        )}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function MenuItem({
  label,
  value,
  onSelect,
  children,
}: PropsWithChildren<{
  label: React.ReactNode;
  value: string;
  //   subMenu가 있을 경우, onSelect가 없어도됨
  onSelect?: (value: string) => void;
}>) {
  const { openSubmenuKey, onChangeOpenSubmenuKey, onClose } =
    useContext(MenuContext);
  // subMenu가 있을 떄는 onSelect뿐 아니라, subMenu가 오픈되는, 부분도 노출되어야 하기 떄문에 따로 함수를 뺌
  const handleClick = () => {
    onSelect?.(value);
    if (children) {
      onChangeOpenSubmenuKey(openSubmenuKey === value ? null : value);
    } else {
      onClose();
    }
  };

  return (
    <div className='w-[320px] relative'>
      <button className='p-8' onClick={handleClick}>
        {label}
        {!!children && <ArrowIcon className='absolute top-8 right-7' />}
      </button>
      {!!children && openSubmenuKey === value && children}
    </div>
  );
}

function SubMenu({ children }: PropsWithChildren) {
  return (
    <div className='relative h-0 w-full'>
      <div className='absolute right-full -top-13 bg-gray600 border-2 border-[#D9D9D9]'>
        {children}
      </div>
    </div>
  );
}

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu;
