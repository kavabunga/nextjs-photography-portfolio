import type { MotionProps } from 'framer-motion';

export const animationConfig: MotionProps['variants'] = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const itemAnimationConfig: MotionProps['variants'] = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    x: -30,
  },
};
