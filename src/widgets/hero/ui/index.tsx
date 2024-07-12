import clsx from 'clsx';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { inter, fira } from '@/shared/style';

import { OpenMenuFeature } from '@/features/open-menu';

import { motionButtonVariants, motionTextVariants } from './motion';
import { HeroButtonUi } from './hero-button';
import classes from './classes.module.css';

export function HeroWidgetUi() {
  return (
    <motion.div
      variants={motionButtonVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={clsx(inter.className, classes.hero)}
    >
      <motion.div className={classes.hero__container}>
        <motion.h1
          variants={motionTextVariants}
          className={classes.hero__title}
        >
          Semyon Katz
        </motion.h1>
        <motion.p
          variants={motionTextVariants}
          className={clsx(fira.className, classes.hero__subtitle)}
        >
          <OpenMenuFeature
            triggerComponentUi={(props) =>
              HeroButtonUi({ label: 'Photographer', ...props })
            }
          />
          {' & '}
          <Link
            href="https://github.com/kavabunga"
            className={clsx('link', classes.hero__link)}
          >
            web&nbsp;developer
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
