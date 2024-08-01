'use server';

import type { IAssetData } from '@/shared/types';
import { getAssetRichData } from '@/shared/lib';

import { GalleryItemDynamicUi } from './gallery-item-dynamic-ui';
import { GalleryImageUi } from './gallery-image';

interface IGalleryItemStaticUi extends IAssetData {
  category: string;
  isLcp: boolean;
}

export async function GalleryItemStaticUi({
  category,
  isLcp,
  ...asset
}: IGalleryItemStaticUi) {
  const richAsset = await getAssetRichData(asset);

  return (
    <GalleryItemDynamicUi {...richAsset} {...{ category }}>
      <GalleryImageUi {...richAsset} {...{ isLcp }} />
    </GalleryItemDynamicUi>
  );
}
