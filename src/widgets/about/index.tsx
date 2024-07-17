import type { IaboutPageData } from '@/shared/data';
import type { IAssetRichData } from '@/shared/types';

import { AboutWidgetUi } from './ui';

interface IAboutWidget extends IaboutPageData {
  images: IAssetRichData[] | null;
}

export function AboutWidget({ ...data }: IAboutWidget) {
  return <AboutWidgetUi {...data} />;
}
