import { downloadsPageData } from '@/shared/data';
import { DownloadsWidget } from '@/widgets/downloads';

export default function Contacts() {
  return <DownloadsWidget {...downloadsPageData} />;
}
