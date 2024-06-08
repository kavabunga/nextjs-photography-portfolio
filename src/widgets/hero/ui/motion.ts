import type { MotionProps } from 'framer-motion';

export const motionButtonVariants: MotionProps['variants'] = {
  visible: {
    scale: 1,
    transition: {
      duration: 1.2,
    },
  },
  hidden: {
    scale: 0.98,
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      x: { duration: 1.2 },
    },
  },
};
export const motionSectionVariants: MotionProps['variants'] = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
