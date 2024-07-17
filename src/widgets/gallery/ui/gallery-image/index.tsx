'use client';

import Image from 'next/image';

import { blurhashToBase64 } from 'blurhash-base64';

import clsx from 'clsx';

import type { IAssetRichData } from '@/shared/types';

import classes from './classes.module.css';

interface IGalleryImageUi extends IAssetRichData {
  isGridOn: boolean;
}

export function GalleryImageUi({ isGridOn, ...asset }: IGalleryImageUi) {
  return (
    <Image
      placeholder="blur"
      blurDataURL={blurhashToBase64(asset.placeholder || '')}
      src={asset.attributes.origin_path}
      alt={
        asset.attributes.custom_fields?.caption || asset.attributes.origin_path
      }
      width={asset.attributes.media_width || asset.metadata.PixelWidth || 0}
      height={asset.attributes.media_height || asset.metadata.PixelHeight || 0}
      sizes="(min-width: 1280px) 1280px, 100vw"
      quality={50}
      id={asset.attributes.origin_path}
      className={clsx(classes.image, isGridOn && classes._view_grid)}
    />
  );
}
