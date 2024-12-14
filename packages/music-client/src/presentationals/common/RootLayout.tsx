import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex justify-center w-full bg-gray-900 min-h-full'>
      <main className='w-[654px]'>{children}</main>
    </div>
  );
}
