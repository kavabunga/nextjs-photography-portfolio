import type { IaboutPageData } from '@/shared/data';
import type { IImageData } from '@/shared/types';

import { AboutWidgetUi } from './ui';

interface IAboutWidget extends IaboutPageData {
  images: IImageData[] | null;
}

export function AboutWidget({ ...data }: IAboutWidget) {
  return <AboutWidgetUi {...data} />;
}
