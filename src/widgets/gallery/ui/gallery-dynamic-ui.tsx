'use client';

import { useCallback, useEffect, useState, type ReactNode } from 'react';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { useViewMode } from '@/shared/providers';
import { getAssetRichData } from '@/shared/lib';
import type { IAssetData, IAssetRichData } from '@/shared/types';

import { PreviewWidget } from '@/widgets/preview';

import classes from './classes.module.css';
import { containerAnimationVariants } from './motion';

interface IGalleryWidgetDynamicUi {
  data: IAssetData[];
  children: ReactNode;
  category: string;
  selectedAsset: IAssetRichData | undefined;
}

export function GalleryWidgetDynamicUi({
  data,
  children,
  category,
  selectedAsset,
}: IGalleryWidgetDynamicUi) {
  const path = usePathname();
  const { pagesGridModes } = useViewMode();
  const isGridOn = pagesGridModes?.[category] || false;

  // NOTE: By default add value, parsed from URL on page level and got here by prop
  const [preview, setPreview] = useState(selectedAsset);

  // NOTE: Disable preview method
  const handleUnsetPreview = useCallback(() => {
    window.history.pushState('', '', `/photography/${category}`);
  }, [category]);

  // NOTE: Manage image preview via URL path watch
  useEffect(() => {
    // NOTE: In case path is default disable preview and exit
    if (path === `/photography/${category}`) {
      setPreview(undefined);
      return;
    }

    // NOTE: Search for requested asset in assets array
    const newPreview = data.find((asset) =>
      asset.attributes.origin_path.includes(path.replace('/photography/', ''))
    );

    // NOTE: In case there is unrelevant input, change path back to category level
    if (!newPreview) {
      handleUnsetPreview();
      return;
    }

    // NOTE: Use history state in case rich asset data is present there (used to trigger preview via image container button)
    if (window.history.state.asset) {
      setPreview(window.history.state.asset);
      return;
    }

    // NOTE: Make new requests for rich data in case no data found in state (for ex. when the page is accessed via direct link)
    getAssetRichData(newPreview).then((response) => setPreview(response));
  }, [category, data, handleUnsetPreview, path]);

  // NOTE: Add ESC button functionality to disable preview
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleUnsetPreview();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleUnsetPreview]);

  return (
    <LazyMotion features={domAnimation}>
      {preview && (
        <PreviewWidget
          {...preview}
          category={path}
          onClickBack={handleUnsetPreview}
        />
      )}
      <m.ul
        variants={containerAnimationVariants}
        initial="initial"
        animate="visible"
        className={clsx(classes.gallery, isGridOn && classes._view_grid)}
      >
        {children}
      </m.ul>
    </LazyMotion>
  );
}
