'use client';

import type { ReactNode } from 'react';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import { previewAnimationVariants } from './motion';
import classes from './classes.module.css';

interface IPreviewWidgetAnimation {
  children: ReactNode;
}

export function PreviewWidgetAnimation({ children }: IPreviewWidgetAnimation) {
  return (
    <AnimatePresence>
      <LazyMotion features={domAnimation}>
        <m.div
          variants={previewAnimationVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={classes.animation}
        >
          {children}
        </m.div>
      </LazyMotion>
    </AnimatePresence>
  );
}
