'use server';

import { IAssetData } from '@/shared/types';
import AboutWidgetImageDynamicUi from './about-image-dynamic-ui';
import { AboutWidgetImageStaticUi } from './about-image-static-ui';

interface IAboutWidgetStaticUi {
  images: IAssetData[] | null;
}

export async function AboutWidgetStaticUi({ images }: IAboutWidgetStaticUi) {
  if (!images) {
    return null;
  }

  return images.map((asset, index) => (
    <AboutWidgetImageDynamicUi key={asset.id}>
      <AboutWidgetImageStaticUi {...asset} isLcp={index === 0} />
    </AboutWidgetImageDynamicUi>
  ));
}
