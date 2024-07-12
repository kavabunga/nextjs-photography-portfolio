import type { MotionProps } from 'framer-motion';

export const containerAnimationConfig: MotionProps['variants'] = {
  visible: {
    transition: {
      staggerChildren: 0.9,
    },
  },
};

export const imageAnimationConfig: MotionProps['variants'] = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};
