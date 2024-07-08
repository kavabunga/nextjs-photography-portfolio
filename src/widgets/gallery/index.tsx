'use client';

import { Suspense } from 'react';

import { useViewMode } from '@/shared/providers';
import type { IImageData } from '@/shared/types';

import { GalleryLoaderContainerUi } from './ui/gallery-loader-container';
import { GalleryWidgetUi } from './ui';

interface IGalleryWidget {
  data: IImageData[];
  category: string;
}

export function GalleryWidget({ data, category }: IGalleryWidget) {
  const { pagesGridModes } = useViewMode();
  const isGridOn = pagesGridModes?.[category] || false;

  // TODO: Add something for empty data
  return (
    <Suspense fallback={<GalleryLoaderContainerUi />}>
      <GalleryWidgetUi {...{ data }} {...{ isGridOn }} path={category} />
    </Suspense>
  );
}
