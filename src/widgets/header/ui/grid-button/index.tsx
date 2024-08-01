'use client';

import clsx from 'clsx';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import {
  IconLayoutGridFilled,
  IconLayoutListFilled,
} from '@tabler/icons-react';

import type { IToggleGridViewFeatureTriggerUi } from '@/features/toggle-grid-view';

import { gridAntimationVariants } from './motion';
import classes from './classes.module.css';

export function GridButtonUi({
  isGridOn,
  visible,
  ...props
}: IToggleGridViewFeatureTriggerUi) {
  return (
    visible && (
      <LazyMotion features={domAnimation}>
        <div className={classes.gridButton}>
          <m.button
            initial="start"
            animate="end"
            whileHover="hover"
            className={clsx('button', classes.gridButton__button)}
            type="button"
            onClick={props.onClick}
          >
            <m.div
              className={classes.gridButton__icon}
              variants={gridAntimationVariants}
            >
              {isGridOn ? <IconLayoutListFilled /> : <IconLayoutGridFilled />}
            </m.div>
            <span className={classes.gridButton__text}>
              {isGridOn ? 'Feed' : 'Grid'}
            </span>
          </m.button>
          <span className={classes.gridButton__divider}>|</span>
        </div>
      </LazyMotion>
    )
  );
}
