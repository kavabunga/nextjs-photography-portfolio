'use client';

import Image from 'next/image';

import clsx from 'clsx';

import type { IImageData } from '@/shared/types';

import classes from './classes.module.css';

interface IGalleryImageUi extends IImageData {
  isGridOn: boolean;
}

export function GalleryImageUi({ isGridOn, ...asset }: IGalleryImageUi) {
  return (
    <Image
      src={asset.attributes.origin_path}
      alt={
        asset.attributes.custom_fields?.caption || asset.attributes.origin_path
      }
      width={asset.attributes.media_width || 300}
      height={asset.attributes.media_height || 300}
      sizes="(min-width: 1280px) 1280px, 100vw"
      quality={80}
      id={asset.attributes.origin_path}
      className={clsx(classes.image, isGridOn && classes._view_grid)}
    />
  );
}
