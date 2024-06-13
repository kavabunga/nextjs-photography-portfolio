import Link from 'next/link';

import clsx from 'clsx';

import { ToggleGridViewFeature } from '@/features/toggle-grid-view';

import { globalData } from '@/shared/data';
import { inter } from '@/shared/style';

import { OpenMenuFeature } from '@/features/open-menu';

import { CurrentPage } from '../current-page';

import { GridButtonUi } from './grid-button';
import { MenuButtonUi } from './menu-button';
import classes from './classes.module.css';

export async function HeaderUi() {
  return (
    <header className={clsx(inter.className, classes.header)}>
      <div className={classes.header__titleBlock}>
        <Link href="/" className={clsx('link', classes.header__title)}>
          {globalData.title}
        </Link>
        <CurrentPage />
      </div>

      <div className={classes.header__buttonsBlock}>
        <ToggleGridViewFeature triggerComponentUi={GridButtonUi} />
        <OpenMenuFeature triggerComponentUi={MenuButtonUi} />
      </div>
    </header>
  );
}
