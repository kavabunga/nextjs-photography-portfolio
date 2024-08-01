import type { ComponentProps } from 'react';

import clsx from 'clsx';

import classes from './classes.module.css';

interface IHeroButtonUi extends ComponentProps<'span'> {
  label: string;
}

export function HeroButtonUi({ label, ...props }: IHeroButtonUi) {
  return (
    <span {...props} className={clsx('link', classes.button)}>
      {label}
    </span>
  );
}
