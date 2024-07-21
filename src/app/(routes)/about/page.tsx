import { getAssetsApi } from '@/shared/api';
import { aboutPageData } from '@/shared/data';
import { sortImagesByOrder } from '@/shared/lib';

import { AboutWidget } from '@/widgets/about';

export const metadata = {
  ...aboutPageData.metadata,
};

export default async function About() {
  const data = await getAssetsApi({ key: 'categories', value: 'about' });

  // NOTE: Sort assets by 'order' custom property
  const sortedData = sortImagesByOrder(data);

  return <AboutWidget {...aboutPageData} images={sortedData} />;
}
