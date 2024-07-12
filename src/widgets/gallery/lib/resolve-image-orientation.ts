import { IImageData } from '@/shared/types';

interface IresolveImageOrientation extends IImageData {}

export function resolveImageOrientation({
  attributes: {
    media_width: width,
    media_height: height,
    custom_fields: { isVertical },
  },
}: IresolveImageOrientation) {
  if (width && height) {
    return width > height ? 'horizontal' : 'vertical';
  }

  if (isVertical) {
    return 'vertical';
  }

  return 'horizontal';
}
