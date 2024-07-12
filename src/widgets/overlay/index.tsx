'use client';

import { type PropsWithChildren, useEffect, useCallback } from 'react';

import { usePathname } from 'next/navigation';

import { AnimatePresence } from 'framer-motion';

import { useOverlay } from '@/shared/providers/overlay-context';

interface IOverlayWidget extends PropsWithChildren {
  id: string;
}

export function OverlayWidget({ children, id }: IOverlayWidget) {
  const pathName = usePathname();
  const { closeOverlay, isOverlayOpen } = useOverlay();

  const handleClose = useCallback(() => {
    closeOverlay(id);
  }, [closeOverlay, id]);

  // NOTE: ESC key listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, pathName]);

  return <AnimatePresence>{isOverlayOpen[id] && children}</AnimatePresence>;
}
