'use client';

import { useCallback, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { useViewMode } from '@/shared/providers';
import type { IImageData } from '@/shared/types';

import { GalleryWidgetUi } from './ui';
import { GalleryPreviewUi } from './ui/gallery-preview';

interface IGalleryWidget {
  data: IImageData[] | null;
}

export function GalleryWidget({ data }: IGalleryWidget) {
  const { pagesGridModes } = useViewMode();
  const path = usePathname();
  const currentPageName = path.split('/').slice(-1)[0];
  const isGridOn = pagesGridModes?.[currentPageName] || false;
  const [preview, setPreview] = useState<IImageData | null>(null);

  const handleImageClick = useCallback((image: IImageData) => {
    setPreview(image);
  }, []);

  const handleClosePreview = useCallback(() => setPreview(null), []);

  // NOTE: ESC key listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClosePreview();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClosePreview]);

  // TODO: Add something for empty data
  return (
    data && (
      <>
        <GalleryWidgetUi
          {...{ data }}
          {...{ isGridOn }}
          {...{ handleImageClick }}
        />
        {preview && (
          <GalleryPreviewUi {...preview} onClose={handleClosePreview} />
        )}
      </>
    )
  );
}
