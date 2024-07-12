'use client';

import { useCallback, useRef } from 'react';

import { useInView } from 'framer-motion';

import { useOverlay } from '@/shared/providers';
import { projectPagesCategories, infoPagesCategories } from '@/shared/data';

import { NavigationWidgetUi } from './ui';

export function NavigationWidget() {
  const { closeOverlay } = useOverlay();

  const infoLinksRef = useRef(null);
  const isInView = useInView(infoLinksRef, { amount: 'all' });

  const handleClose = useCallback(() => {
    closeOverlay('navigation');
  }, [closeOverlay]);

  const scrollToBottom = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollTo(0, targetElement.scrollHeight);
    }
  }, []);

  return (
    <NavigationWidgetUi
      projectPages={projectPagesCategories}
      infoPages={infoPagesCategories}
      {...{ infoLinksRef }}
      {...{ isInView }}
      onDownButton={scrollToBottom}
      onClose={handleClose}
    />
  );
}
