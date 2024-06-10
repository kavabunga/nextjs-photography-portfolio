import { api } from '@/shared/api';

import { GalleryWidget } from '@/widgets/gallery';

export default async function Official() {
  const data = await api({});

  return <GalleryWidget {...{ data }} />;
}
