import type { MotionProps } from 'framer-motion';

export const imageAnimationVariants: MotionProps['variants'] = {
  initial: {
    // height: '16rem',
    opacity: 0,
  },
  animate: {
    // height: imageLoading ? '16rem' : 'auto',
    // opacity: imageLoading ? 0 : 1,
    opacity: 1,
    transition: {
      // height: {
      //   delay: 0.1,
      //   duration: 0.3,
      // },
      opacity: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  },
};
