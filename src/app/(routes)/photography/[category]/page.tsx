import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { getAssetsApi } from '@/shared/api';
import { globalData, projectPagesCategories } from '@/shared/data';
import { getAssetsRichData, sortImagesByOrder } from '@/shared/lib';

import { GalleryWidget } from '@/widgets/gallery';

interface IPhotographyProjectPage {
  params: { category: string };
}

export function generateMetadata(
  { params: { category } }: IPhotographyProjectPage,
  parent: ResolvingMetadata
): Metadata {
  const metadata = projectPagesCategories.find(
    (element) => element.name === category
  )?.metadata;

  return metadata
    ? {
        ...parent,
        title: `${globalData.title} | ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        ...metadata,
      }
    : (parent as Metadata);
}

export function generateStaticParams() {
  return projectPagesCategories.map((page) => ({
    category: page.name,
  }));
}

export default async function PhotographyProjectPage({
  params: { category },
}: IPhotographyProjectPage) {
  // NOTE: Check if requested page exists in provided data and if it is not in progress (wip)
  if (
    !projectPagesCategories.find((page) => page.name === category && !page.wip)
  ) {
    return notFound();
  }

  // NOTE: Get assets for page's category
  const data = await getAssetsApi({ key: 'categories', value: category });

  // NOTE: Iterate through assets and get their extra data
  const richData = await getAssetsRichData(data);

  // NOTE: Sort assets by 'order' custom property
  const sortedData = sortImagesByOrder(richData);

  return data && <GalleryWidget data={sortedData} {...{ category }} />;
}
