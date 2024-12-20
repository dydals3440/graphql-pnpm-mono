// 버튼에 대한 프레젠테이셔널 기능

import { ButtonHTMLAttributes } from 'react';
import PlayListIcon from '@/assets/icons/menu.svg?react';
import { tw } from '@/twMerge';

// 토글 기능은, 주입 받아 사용
export default function PlayListButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={tw(className)} {...props}>
      <PlayListIcon />
    </button>
  );
}
