import type { IAssetRichData } from '@/shared/types';

interface IresolveImageOrientation extends IAssetRichData {}

export function resolveImageOrientation({
  metadata: { Orientation, PixelHeight, PixelWidth },
  attributes: {
    media_width,
    media_height,
    custom_fields: { isVertical },
  },
}: IresolveImageOrientation) {
  if (media_width && media_height) {
    return media_width > media_height ? 'horizontal' : 'vertical';
  }

  if (Orientation) {
    return Orientation === 1 ? 'vertical' : 'horizontal';
  }

  if (PixelHeight && PixelWidth) {
    return PixelWidth > PixelHeight ? 'horizontal' : 'vertical';
  }

  if (isVertical) {
    return 'vertical';
  }

  return 'horizontal';
}
