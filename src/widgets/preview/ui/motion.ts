import type { MotionProps } from 'framer-motion';

export const previewAnimationVariants: MotionProps['variants'] = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
