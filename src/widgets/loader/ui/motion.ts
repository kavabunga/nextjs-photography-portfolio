import type { MotionProps } from 'framer-motion';

export const iconAnimationConfig: MotionProps['variants'] = {
  animate: {
    transition: {
      rotate: {
        type: 'spring',
        stiffness: 100,
        repeat: Infinity,
        repeatType: 'loop',
        duration: 1,
      },
    },
  },
};
