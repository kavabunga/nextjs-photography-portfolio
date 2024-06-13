'use client';

import { useCallback, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { useOverlay, useViewMode } from '@/shared/providers';
import type { IImageData } from '@/shared/types';

import { GalleryWidgetUi } from './ui';
import { GalleryPreviewUi } from './ui/gallery-preview';
import { OverlayWidget } from '../overlay';

interface IGalleryWidget {
  data: IImageData[] | null;
}

export function GalleryWidget({ data }: IGalleryWidget) {
  const { pagesGridModes } = useViewMode();
  const { openOverlay, closeOverlay } = useOverlay();
  const path = usePathname();
  const currentPageName = path.split('/').slice(-1)[0];
  const isGridOn = pagesGridModes?.[currentPageName] || false;

  const [preview, setPreview] = useState<IImageData | null>(null);

  const handleImageClick = useCallback(
    (image: IImageData) => {
      setPreview(image);
      openOverlay('preview');
    },
    [openOverlay]
  );

  const handleClosePreview = useCallback(() => {
    closeOverlay('preview');
    setPreview(null);
  }, [closeOverlay]);

  useEffect(() => () => handleClosePreview(), [handleClosePreview]);

  // TODO: Add something for empty data
  return (
    data && (
      <>
        <GalleryWidgetUi
          {...{ data }}
          {...{ isGridOn }}
          {...{ handleImageClick }}
        />
        <OverlayWidget id="preview">
          {preview && (
            <GalleryPreviewUi {...preview} onClose={handleClosePreview} />
          )}
        </OverlayWidget>
      </>
    )
  );
}
