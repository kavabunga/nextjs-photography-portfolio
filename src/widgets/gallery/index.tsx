'use client';

import { useViewMode } from '@/shared/providers';
import type { IAssetRichData } from '@/shared/types';

import { GalleryWidgetUi } from './ui';

interface IGalleryWidget {
  data: IAssetRichData[];
  category: string;
}

export function GalleryWidget({ data, category }: IGalleryWidget) {
  const { pagesGridModes } = useViewMode();
  const isGridOn = pagesGridModes?.[category] || false;

  // TODO: Add something for empty data
  return <GalleryWidgetUi {...{ data }} {...{ isGridOn }} path={category} />;
}
