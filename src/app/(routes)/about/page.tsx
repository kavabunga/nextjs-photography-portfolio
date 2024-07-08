import { getAssetsApi } from '@/shared/api';
import { aboutPageData } from '@/shared/data';

import { AboutWidget } from '@/widgets/about';

export default async function About() {
  const images = await getAssetsApi({ key: 'categories', value: 'about' });

  return <AboutWidget {...aboutPageData} {...{ images }} />;
}
