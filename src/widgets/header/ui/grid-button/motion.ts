import type { MotionProps } from 'framer-motion';

export const gridAntimationVariants: MotionProps['variants'] = {
  start: {
    rotate: 60,
  },
  end: {
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    rotate: 90,
    transition: {
      duration: 0.3,
    },
  },
};
