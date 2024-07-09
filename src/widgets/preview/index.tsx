import type { IImageData } from '@/shared/types';

import { PreviewWidgetUi } from './ui';
import { PreviewWidgetAnimation } from './ui/animation';

interface IPreviewWidget extends IImageData {
  category: string;
}

export function PreviewWidget(props: IPreviewWidget) {
  return (
    <PreviewWidgetAnimation>
      <PreviewWidgetUi {...props} />
    </PreviewWidgetAnimation>
  );
}
