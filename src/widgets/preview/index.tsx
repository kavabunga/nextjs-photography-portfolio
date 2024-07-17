import type { IAssetData } from '@/shared/types';

import { PreviewWidgetUi } from './ui';
import { PreviewWidgetAnimation } from './ui/animation';

interface IPreviewWidget extends IAssetData {
  category: string;
}

export function PreviewWidget(props: IPreviewWidget) {
  return (
    <PreviewWidgetAnimation>
      <PreviewWidgetUi {...props} />
    </PreviewWidgetAnimation>
  );
}
