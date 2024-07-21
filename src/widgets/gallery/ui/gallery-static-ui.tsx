'use server';

import type { IAssetData } from '@/shared/types';
import { GalleryItemStaticUi } from './gallery-item-static-ui';

interface IGalleryWidgetStaticUi {
  data: IAssetData[];
  category: string;
}

export async function GalleryWidgetStaticUi({
  data,
  category,
}: IGalleryWidgetStaticUi) {
  return data.map((asset, index) => (
    <GalleryItemStaticUi
      key={asset.id}
      {...asset}
      {...{ category }}
      isLcp={index === 0}
    />
  ));
}
