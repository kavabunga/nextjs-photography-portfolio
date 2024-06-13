import { downloadsPageData } from '@/shared/data';
import { DownloadsWidget } from '@/widgets/downloads';

export default async function Contacts() {
  return <DownloadsWidget {...downloadsPageData} />;
}
