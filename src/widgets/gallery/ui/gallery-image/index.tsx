'use server';

import Image from 'next/image';

import { blurhashToBase64 } from 'blurhash-base64';

import type { IAssetRichData } from '@/shared/types';

import { resolveImageOrientation } from '../../lib';
import classes from './classes.module.css';

interface IGalleryImageUi extends IAssetRichData {
  isLcp: boolean;
}

export async function GalleryImageUi({ isLcp, ...asset }: IGalleryImageUi) {
  const isHorizontal = resolveImageOrientation(asset) === 'horizontal';
  const isSmall = asset.attributes.custom_fields?.layout === 'small' || false;

  let sizes: string;

  // NOTE: Define image sizes according to it's orientation and layout
  if (isHorizontal && !isSmall) {
    sizes = '(min-width: 1280px) 1280px, 100vw';
  } else if (!isHorizontal && isSmall) {
    sizes = '(min-width: 720px) 30vw, (min-width: 1280px) 252px, 66vw';
  } else {
    sizes = '(min-width: 720px) 50vw, (min-width: 1280px) 640px, 100vw';
  }

  return (
    <Image
      priority={isLcp}
      placeholder="blur"
      blurDataURL={blurhashToBase64(asset.placeholder || '')}
      src={asset.attributes.origin_path}
      alt={
        asset.attributes.custom_fields.caption ||
        asset.metadata.IPTC?.Caption ||
        asset.attributes.origin_path
      }
      width={asset.attributes.media_width || asset.metadata.PixelWidth || 0}
      height={asset.attributes.media_height || asset.metadata.PixelHeight || 0}
      sizes={sizes}
      quality={50}
      id={asset.attributes.origin_path}
      className={classes.image}
    />
  );
}
