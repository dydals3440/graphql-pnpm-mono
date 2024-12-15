import { useEffect, useRef } from 'react';

export default function useOutsideClick<RefType extends HTMLElement>(
  callback: () => void
) {
  const ref = useRef<RefType>(null);

  useEffect(() => {
    // mobile -> TouchEvent, desktop -> MouseEvent (기본 DOM에서 제공하는 type)
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        // 타겟에 포함하지 않을 떄 콜백 실행
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [callback]);

  return ref;
}
