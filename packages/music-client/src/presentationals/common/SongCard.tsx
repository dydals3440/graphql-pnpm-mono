import { createContext, PropsWithChildren, useContext } from 'react';
import { tw } from '@/twMerge';

type Variant = 'horizontal' | 'vertical';

//  Variant 를 다른 곳에서도 공유할 수 있게 Context 사용
const SongCardContext = createContext<{ variant: Variant }>({
  variant: 'vertical',
});

function SongCard({
  children,
  variant = 'vertical',
  className,
}: Cn<PropsWithChildren<{ variant?: Variant }>>) {
  const variantClass =
    variant === 'vertical'
      ? 'flex-col gap-y-16'
      : 'flex-row gap-x-14 items-center';
  return (
    <SongCardContext.Provider value={{ variant }}>
      <div className={tw('flex', variantClass, className)}>{children}</div>
    </SongCardContext.Provider>
  );
}

// rounded-8이 될 것이라 생각하지만, tailwind css는 rounded-6과 8 모두 명시도가 같아, 구분 X
// .rounded-8 { border-radius: 0.5rem; }
// .rounded-6 { border-radius: 0.375rem; } rounded-6 이 추후에 선언되었다면, cascading 됨.

{
  /* <img className='rounded-6 rounded-8'/>
<SongCardImage className='rounded-8'/> */
}

function SongCardImage({
  src,
  alt,
  className,
}: Cn<{ src: string; alt: string }>) {
  const { variant } = useContext(SongCardContext);
  const variantClass =
    variant === 'vertical' ? 'rounded-6 size-150' : 'rounded-4 size-56';

  return (
    <img
      className={tw(variantClass, 'object-cover', className)}
      src={src}
      alt={alt}
    />
  );
}

function SongCardTitle({ children, className }: Cn<PropsWithChildren>) {
  const { variant } = useContext(SongCardContext);
  const variantClass = variant === 'vertical' ? 'text-white' : 'text-gray200';

  return <h5 className={tw(variantClass, 'text-16', className)}>{children}</h5>;
}

function SongCardDescription({ children, className }: Cn<PropsWithChildren>) {
  const { variant } = useContext(SongCardContext);
  const variantClass =
    variant === 'vertical' ? 'text-gray300 font-light' : 'text-gray500';
  return <p className={tw(variantClass, 'text-14', className)}>{children}</p>;
}

function SongCardContent({ children, className }: Cn<PropsWithChildren>) {
  const { variant } = useContext(SongCardContext);
  const variantClass = variant === 'vertical' ? 'gap-y-11' : 'gap-y-7';
  return (
    <div className={tw('flex flex-col', variantClass, className)}>
      {children}
    </div>
  );
}

SongCard.Title = SongCardTitle;
SongCard.Image = SongCardImage;
SongCard.Description = SongCardDescription;
SongCard.Content = SongCardContent;

export default SongCard;
