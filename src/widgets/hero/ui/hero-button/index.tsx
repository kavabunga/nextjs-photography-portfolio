import type { ComponentProps } from 'react';

import clsx from 'clsx';

import classes from './classes.module.css';

interface IHeroButtonUi extends ComponentProps<'button'> {
  label: string;
}

export function HeroButtonUi({ type, label, ...props }: IHeroButtonUi) {
  return (
    <button type="button" {...props} className={clsx('button', classes.button)}>
      {label}
    </button>
  );
}
