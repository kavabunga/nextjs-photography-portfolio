import clsx from 'clsx';

import { inter } from '@/shared/style';

import classes from './classes.module.css';

interface IBackButtonUi {
  onClick: () => void;
}

export function BackButtonUi({ onClick }: IBackButtonUi) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('button', inter.className, classes.button)}
    >
      Back
    </button>
  );
}
