import { getAssetsApi } from '@/shared/api';
import { aboutPageData } from '@/shared/data';
import { sortImagesByOrder } from '@/shared/lib';

import { AboutWidget } from '@/widgets/about';

export default async function About() {
  const images = await getAssetsApi({ key: 'categories', value: 'about' });

  const sortedImages = sortImagesByOrder(images);

  return <AboutWidget {...aboutPageData} images={sortedImages} />;
}
