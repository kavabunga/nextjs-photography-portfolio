'use client';

import type { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { previewAnimationVariants } from './motion';
import classes from './classes.module.css';

interface IPreviewWidgetAnimation {
  children: ReactNode;
}

export function PreviewWidgetAnimation({ children }: IPreviewWidgetAnimation) {
  return (
    <AnimatePresence>
      <motion.div
        variants={previewAnimationVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={classes.animation}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
