import type { IAssetRichData } from '@/shared/types';

import { PreviewWidgetUi } from './ui';

interface IPreviewWidget extends IAssetRichData {
  category: string;
  onClickBack: () => void;
}

export function PreviewWidget(props: IPreviewWidget) {
  return <PreviewWidgetUi {...props} />;
}
