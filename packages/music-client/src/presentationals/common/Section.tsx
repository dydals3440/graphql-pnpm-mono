import { tw } from '@/twMerge';
import { PropsWithChildren } from 'react';

function Section({ children, className }: Cn<PropsWithChildren>) {
  return (
    <section className={tw('flex flex-col', className)}>{children}</section>
  );
}

function SectionTitle({ children, className }: Cn<PropsWithChildren>) {
  return (
    <h3 className={tw('text-gray-200 text-24 font-medium mb-24', className)}>
      {children}
    </h3>
  );
}

function SectionContent({ children, className }: Cn<PropsWithChildren>) {
  return (
    <div className={tw('w-full overflow-x-scroll', className)}>{children}</div>
  );
}

Section.Title = SectionTitle;
Section.Content = SectionContent;

export default Section;

// twMerge -> 뒤에 주입된, 클래스가 최신이 되기 떄문에, 기본적인 스타일링은, 주입된 클래스네임보다 앞에 기입을 해주어야 함.
