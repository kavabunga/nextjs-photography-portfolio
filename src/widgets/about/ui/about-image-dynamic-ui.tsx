'use client';

import type { ReactNode } from 'react';

import { m } from 'framer-motion';

import classes from './classes.module.css';
import { imageAnimationConfig } from './motion';

interface IAboutWidgetImageDynamicUi {
  children: ReactNode;
}

export default function AboutWidgetImageDynamicUi({
  children,
}: IAboutWidgetImageDynamicUi) {
  return (
    <m.div
      variants={imageAnimationConfig}
      className={classes.about__imageContainer}
    >
      {children}
    </m.div>
  );
}
