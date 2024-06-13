import { useState, useLayoutEffect } from 'react';

export const useIsOverflowing = (ref: React.RefObject<HTMLElement>) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (ref.current) {
        const hasOverflow = ref.current.scrollHeight > ref.current.clientHeight;
        setIsOverflowing(hasOverflow);
      }
    };

    // INFO: Initial check
    checkOverflow();

    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [ref]);

  return isOverflowing;
};
