import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { getAssetsApi } from '@/shared/api';
import { globalData, projectPagesCategories } from '@/shared/data';
import { getAssetRichData, sortImagesByOrder } from '@/shared/lib';

import { GalleryWidget } from '@/widgets/gallery';

interface IPhotographyProjectPage {
  params: { category: string; imagePath?: string };
}

export async function generateMetadata(
  { params: { category } }: IPhotographyProjectPage,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const metadata = projectPagesCategories.find(
    (element) => element.name === category
  )?.metadata;

  return metadata
    ? {
        ...parent,
        ...metadata,
        title: `${globalData.title} | ${category.charAt(0).toUpperCase() + category.slice(1)}`,
      }
    : (parent as Metadata);
}

export function generateStaticParams() {
  return projectPagesCategories.map((page) => ({
    category: page.name,
  }));
}

export default async function PhotographyProjectPage({
  params: { category, imagePath },
}: IPhotographyProjectPage) {
  // NOTE: Check if requested page exists in provided data and if it is not in progress (wip)
  if (
    !projectPagesCategories.find((page) => page.name === category && !page.wip)
  ) {
    return notFound();
  }

  // NOTE: Get assets for page's category
  const data = await getAssetsApi({ key: 'categories', value: category });

  // NOTE: Sort assets by 'order' custom property
  const sortedData = sortImagesByOrder(data);

  // NOTE: Find selected image from url params
  const selectedAsset = imagePath
    ? sortedData.find((asset) =>
        asset.attributes.origin_path.includes(decodeURIComponent(imagePath))
      )
    : undefined;

  // NOTE: Get selected asset rich data (metadata and placeholder)
  const selectedAssetRichData = selectedAsset
    ? await getAssetRichData(selectedAsset)
    : undefined;

  return (
    data && (
      <GalleryWidget
        data={sortedData}
        selectedAsset={selectedAssetRichData}
        {...{ category }}
      />
    )
  );
}
