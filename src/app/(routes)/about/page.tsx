import { api } from '@/shared/api';
import { aboutPageData } from '@/shared/data';

import { AboutWidget } from '@/widgets/about';

export default async function About() {
  const images = await api({ key: 'categories', value: 'about' });

  return <AboutWidget {...aboutPageData} {...{ images }} />;
}
