'use server';

import type { IaboutPageData } from '@/shared/data';
import type { IAssetData } from '@/shared/types';

import { AboutWidgetUi } from './ui';

interface IAboutWidget extends IaboutPageData {
  images: IAssetData[] | null;
}

export async function AboutWidget(data: IAboutWidget) {
  return <AboutWidgetUi {...data} />;
}
