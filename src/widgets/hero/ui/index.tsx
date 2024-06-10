import clsx from 'clsx';

import { AnimatePresence, motion } from 'framer-motion';

import { inter, fira } from '@/shared/style';

import { motionButtonVariants, motionTextVariants } from './motion';
import classes from './classes.module.css';

interface IHeroWidgetUi {
  onClick: () => void;
}

export function HeroWidgetUi({ onClick }: IHeroWidgetUi) {
  return (
    <AnimatePresence>
      <motion.button
        variants={motionButtonVariants}
        type="button"
        initial="hidden"
        animate="visible"
        exit="exit"
        className={clsx(inter.className, classes.hero)}
        onClick={(e) => {
          e.preventDefault();
          return onClick();
        }}
      >
        <motion.h1
          variants={motionTextVariants}
          whileHover="hover"
          className={classes.hero__title}
        >
          Semyon Katz
        </motion.h1>
        <motion.p
          variants={motionTextVariants}
          className={clsx(fira.className, classes.hero__subtitle)}
        >
          Photographer & web developer
        </motion.p>
      </motion.button>
    </AnimatePresence>
  );
}
