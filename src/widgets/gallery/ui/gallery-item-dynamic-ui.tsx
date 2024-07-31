'use client';

import type { ReactNode } from 'react';

import clsx from 'clsx';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { useViewMode } from '@/shared/providers';
import type { IAssetRichData } from '@/shared/types';

import { CaptionWidget } from '@/widgets/caption';

import { resolveImageOrientation } from '../lib';

import { ImageContainerButtonUi } from './image-container-button';
import classes from './classes.module.css';
import { imageAnimationVariants } from './motion';

interface IGalleryItemDynamicUi extends IAssetRichData {
  category: string;
  children: ReactNode;
}

export function GalleryItemDynamicUi({
  category,
  children,
  ...asset
}: IGalleryItemDynamicUi) {
  const { pagesGridModes } = useViewMode();
  const isGridOn = pagesGridModes?.[category] || false;

  return (
    <LazyMotion features={domAnimation}>
      <m.li
        variants={imageAnimationVariants}
        className={clsx(
          classes.gallery__item,
          asset.attributes.custom_fields.layout &&
            classes[`_layout_${asset.attributes.custom_fields.layout}`],
          classes[`_orientation_${resolveImageOrientation(asset)}`],
          isGridOn && classes._view_grid
        )}
      >
        <ImageContainerButtonUi {...{ asset }} {...{ category }}>
          {children}
        </ImageContainerButtonUi>
        {!isGridOn && <CaptionWidget {...{ asset }} />}
      </m.li>
    </LazyMotion>
  );
}
