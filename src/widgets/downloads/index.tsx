import type { IlinksPageData } from '@/shared/data';

import { DownloadsWidgetUi } from './ui';

interface IDownloadsWidget extends IlinksPageData {}

export function DownloadsWidget({ ...data }: IDownloadsWidget) {
  return <DownloadsWidgetUi {...data} />;
}
