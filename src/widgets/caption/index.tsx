import type { ComponentProps } from 'react';

import type { IAssetRichData } from '@/shared/types';

import { CaptionWidgetUi } from './ui';

interface ICaptionWidget extends ComponentProps<'p'> {
  asset: IAssetRichData;
}

export function CaptionWidget({ asset, ...props }: ICaptionWidget) {
  // NOTE: Caption can be used from image IPTC field or from Imgix custom field 'caption'. Imgix has priority over IPTC
  const text =
    asset.attributes.custom_fields.caption ||
    asset.metadata.IPTC?.Caption ||
    null;

  return <CaptionWidgetUi {...{ text }} {...props} />;
}
