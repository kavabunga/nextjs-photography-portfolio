import Link from 'next/link';

import clsx from 'clsx';

import { fira } from '@/shared/style';

import classes from './classes.module.css';

export function NotFoundWidgetUi() {
  return (
    <div className={clsx(fira.className, classes.notFound__container)}>
      <p className={classes.notFound__text}>
        Could not find the requested page. Please, try another one.{' '}
        <Link
          href="/"
          className={clsx('link', classes.notFound__text, classes._link)}
        >
          Return Home
        </Link>
      </p>
    </div>
  );
}
