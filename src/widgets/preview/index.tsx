import type { IImageData } from '@/shared/types';

import { PreviewWidgetUi } from './ui';

interface IPreviewWidget extends IImageData {
  category: string;
}

export function PreviewWidget(props: IPreviewWidget) {
  return <PreviewWidgetUi {...props} />;
}
