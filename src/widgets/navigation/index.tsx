'use client';

import { useCallback } from 'react';

import { usePathname } from 'next/navigation';

import { AnimatePresence } from 'framer-motion';

import { useNavigation } from '@/shared/providers';
import { projectPagesCategories, infoPagesCategories } from '@/shared/data';

import { NavigationWidgetUi } from './ui';

export function NavigationWidget() {
  const pathName = usePathname();
  const { closeNavigation, isNavigationOpen } = useNavigation();

  const handleClose = useCallback(() => {
    closeNavigation();
  }, [closeNavigation]);

  return (
    <AnimatePresence>
      {isNavigationOpen && (
        <NavigationWidgetUi
          projectPages={projectPagesCategories}
          infoPages={infoPagesCategories}
          currentPage={pathName}
          onClose={handleClose}
        />
      )}
    </AnimatePresence>
  );
}
