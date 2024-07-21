'use server';

import type { IAssetData, IAssetRichData } from '@/shared/types';

import { GalleryWidgetUi } from './ui';

interface IGalleryWidget {
  data: IAssetData[];
  category: string;
  selectedAsset: IAssetRichData | undefined;
}

export async function GalleryWidget(props: IGalleryWidget) {
  return <GalleryWidgetUi {...props} />;
}
