import { downloadsPageData } from '@/shared/data';

import { DownloadsWidget } from '@/widgets/downloads';

export const metadata = {
  ...downloadsPageData.metadata,
};

export default function Downloads() {
  return <DownloadsWidget {...downloadsPageData} />;
}
