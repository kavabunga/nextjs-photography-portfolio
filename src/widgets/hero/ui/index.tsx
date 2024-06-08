import { AnimatePresence, motion } from 'framer-motion';

import { inter, fira } from '@/shared/style';

import { motionButtonVariants, motionSectionVariants } from './motion';
import classes from './classes.module.css';

interface IHeroWidgetUi {
  onClick: () => void;
}

export function HeroWidgetUi({ onClick }: IHeroWidgetUi) {
  return (
    <AnimatePresence>
      <motion.div
        variants={motionSectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`${inter.className} ${classes.hero}`}
      >
        <motion.button
          variants={motionButtonVariants}
          type="button"
          className={classes.hero__button}
          onClick={(e) => {
            e.preventDefault();
            return onClick();
          }}
        >
          Semyon Katz
        </motion.button>
        <motion.p
          variants={motionButtonVariants}
          className={`${fira.className} ${classes.hero__subtitle}`}
        >
          Photographer & web developer
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
