'use server';

import type { IAssetData, IAssetRichData } from '@/shared/types';

import { GalleryWidgetDynamicUi } from './gallery-dynamic-ui';
import { GalleryWidgetStaticUi } from './gallery-static-ui';

interface IGalleryWidgetUi {
  data: IAssetData[];
  category: string;
  selectedAsset: IAssetRichData | undefined;
}

export async function GalleryWidgetUi(props: IGalleryWidgetUi) {
  return (
    <GalleryWidgetDynamicUi {...props}>
      <GalleryWidgetStaticUi {...props} />
    </GalleryWidgetDynamicUi>
  );
}
