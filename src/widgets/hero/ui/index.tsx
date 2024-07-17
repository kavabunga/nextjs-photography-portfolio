import clsx from 'clsx';

import Link from 'next/link';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { inter, fira } from '@/shared/style';

import { OpenMenuFeature } from '@/features/open-menu';

import { motionButtonVariants, motionTextVariants } from './motion';
import { HeroButtonUi } from './hero-button';
import classes from './classes.module.css';

export function HeroWidgetUi() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={motionButtonVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={clsx(inter.className, classes.hero)}
      >
        <m.div className={classes.hero__container}>
          <m.h1 variants={motionTextVariants} className={classes.hero__title}>
            Semyon Katz
          </m.h1>
          <m.p
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
          </m.p>
        </m.div>
      </m.div>
    </LazyMotion>
  );
}
