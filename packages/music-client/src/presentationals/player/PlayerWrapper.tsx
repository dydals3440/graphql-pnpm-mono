import { PropsWithChildren } from 'react';

export default function PlayerWrapper({ children }: PropsWithChildren) {
  // 좌우 정렬 0px w-full -> 화면 꽉차짐
  return (
    <div className='fixed inset-x-0 bottom-0 bg-black text-white'>
      {children}
    </div>
  );
}
