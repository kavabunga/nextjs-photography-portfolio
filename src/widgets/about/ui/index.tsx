'use server';

import type { IaboutPageData } from '@/shared/data';
import type { IAssetData } from '@/shared/types';

import { AboutWidgetDynamicUi } from './about-dynamic-ui';
import { AboutWidgetStaticUi } from './about-static-ui';

interface IAboutWidgetUi extends IaboutPageData {
  images: IAssetData[] | null;
}

export async function AboutWidgetUi({ images, ...props }: IAboutWidgetUi) {
  return (
    <AboutWidgetDynamicUi {...props}>
      <AboutWidgetStaticUi {...{ images }} />
    </AboutWidgetDynamicUi>
  );
}
