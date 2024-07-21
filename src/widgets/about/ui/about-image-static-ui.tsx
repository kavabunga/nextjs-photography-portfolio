'use server';

import Image from 'next/image';

import { blurhashToBase64 } from 'blurhash-base64';

import type { IAssetData } from '@/shared/types';
import { getAssetRichData } from '@/shared/lib';

import classes from './classes.module.css';

interface IAboutWidgetImageStaticUi extends IAssetData {
  isLcp: boolean;
}

export async function AboutWidgetImageStaticUi({
  isLcp,
  ...asset
}: IAboutWidgetImageStaticUi) {
  const richAsset = await getAssetRichData(asset);

  return (
    <Image
      priority={isLcp}
      placeholder="blur"
      blurDataURL={blurhashToBase64(richAsset.placeholder || '')}
      src={richAsset.attributes.origin_path}
      alt={
        richAsset.attributes.custom_fields.caption ||
        richAsset.metadata.IPTC?.Caption ||
        richAsset.attributes.origin_path
      }
      width={
        richAsset.attributes.media_width || richAsset.metadata.PixelWidth || 0
      }
      height={
        richAsset.attributes.media_height || richAsset.metadata.PixelHeight || 0
      }
      sizes="100vw, (min-width: $breakpoint-xs) 40vw"
      quality={40}
      className={classes.about__image}
    />
  );
}
