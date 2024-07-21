'use client';

import type { ReactNode } from 'react';
import type { IAssetRichData } from '@/shared/types';

import classes from './classes.module.css';

interface IImageContainerButtonUi {
  asset: IAssetRichData;
  category: string;
  children: ReactNode;
}

export function ImageContainerButtonUi({
  asset,
  category,
  children,
}: IImageContainerButtonUi) {
  const { origin_path: assetPath } = asset.attributes;

  const handleSetPreview = () => {
    const imagePath = encodeURIComponent(
      (assetPath.split('/').pop() || assetPath).replace(/\.[^/.]+$/, '')
    );
    const newPath = `/photography/${category}/${imagePath}`;
    window.history.pushState({ url: newPath, asset }, '', newPath);
  };

  return (
    <button
      type="button"
      onClick={handleSetPreview}
      className={classes.gallery__imageContainer}
    >
      {children}
    </button>
  );
}
