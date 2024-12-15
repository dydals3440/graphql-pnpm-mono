import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    // panel을 위한 relative 추가
    <div className='flex justify-center w-full bg-gray-900 min-h-full relative'>
      <main className='w-[654px]'>{children}</main>
    </div>
  );
}
