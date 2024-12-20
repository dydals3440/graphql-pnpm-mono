import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface ISliderPanel {
  open: boolean;
}

export default function SliderPanel({
  open,
  children,
}: PropsWithChildren<ISliderPanel>) {
  // direction을 통해, 좌우 우좌 패널 구성 가능.
  return (
    <motion.div
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
