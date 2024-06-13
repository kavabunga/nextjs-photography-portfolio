import type { MotionProps } from 'framer-motion';

export const animationConfig: MotionProps['variants'] = {
  visible: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.2,
      },
      when: 'beforeChildren',
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.04,
    },
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
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      opacity: { duration: 0.2 },
      x: { duration: 0.3 },
    },
  },
};

export const labelAnimationConfig: MotionProps['variants'] = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    x: -50,
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      opacity: { duration: 0.2 },
      x: { duration: 0.3 },
    },
  },
};

export const closeButtonAnimationConfig: MotionProps['variants'] = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  hover: {
    rotate: 90,
    transition: {
      duration: 0.2,
    },
  },
};

export const downButtonAnimationConfig: MotionProps['variants'] = {
  visible: {
    opacity: 1,
    y: 8,
    transition: {
      y: {
        type: 'spring',
        stiffness: 100,
        delay: 1.2,
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1,
      },
      opacity: {
        delay: 0.4,
        duration: 0.2,
      },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
