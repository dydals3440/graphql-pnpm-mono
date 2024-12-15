import useOutsideClick from '@/hooks/common/useOutsideClick';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface ISliderPanel {
  open: boolean;
  onClose: () => void;
}

export default function SliderPanel({
  open,
  onClose,
  children,
}: PropsWithChildren<ISliderPanel>) {
  const containerRef = useOutsideClick<HTMLDivElement>(onClose);
  if (!open) return null;

  // direction을 통해, 좌우 우좌 패널 구성 가능.
  return (
    <motion.div
      // HTMLElement기에 안됨, RefObject로 DivElement로 타입 변환
      ref={containerRef}
      initial={{ x: '100%' }}
      animate={open ? 'open' : 'closed'}
      variants={{
        open: { x: 0 },
        closed: { x: '100%' },
      }}
      className='absolute inset-y-0 h-full right-0 bg-gray-900 border-l-2 border-gray800'
    >
      {children}
    </motion.div>
  );
}
