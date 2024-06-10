'use client';

import { useViewMode } from '@/shared/providers';
import type { IImageData } from '@/shared/types';
import { usePathname } from 'next/navigation';
import { GalleryWidgetUi } from './ui';

interface IGalleryWidget {
  data: IImageData[] | null;
}

export function GalleryWidget({ data }: IGalleryWidget) {
  const { pagesGridModes } = useViewMode();
  const path = usePathname();
  const currentPageName = path.split('/').slice(-1)[0];
  const isGridOn = pagesGridModes?.[currentPageName] || false;

  // TODO: Add something for empty data
  return data && <GalleryWidgetUi {...{ data }} {...{ isGridOn }} />;
}
