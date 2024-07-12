'use client';

import clsx from 'clsx';

import { IOpenMenuFeatureTriggerUi } from '@/features/open-menu';

import classes from './classes.module.css';

export function MenuButtonUi({ onClick }: IOpenMenuFeatureTriggerUi) {
  return (
    <button
      className={clsx('button', classes.menuButton)}
      type="button"
      {...{ onClick }}
    >
      Menu
    </button>
  );
}
