import { getAssetsApi } from '@/shared/api';
import { aboutPageData } from '@/shared/data';
import { getAssetsRichData, sortImagesByOrder } from '@/shared/lib';

import { AboutWidget } from '@/widgets/about';

export default async function About() {
  const data = await getAssetsApi({ key: 'categories', value: 'about' });

  // NOTE: Iterate through assets and get their extra data
  const richData = await getAssetsRichData(data);

  // NOTE: Sort assets by 'order' custom property
  const sortedData = sortImagesByOrder(richData);

  return <AboutWidget {...aboutPageData} images={sortedData} />;
}
