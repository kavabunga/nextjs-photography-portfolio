import type { MotionProps } from 'framer-motion';

export const containerAnimationVariants: MotionProps['variants'] = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const imageAnimationVariants: MotionProps['variants'] = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.2,
      },
    },
  },
};
