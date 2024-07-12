import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import type { IImageData } from '@/shared/types';

import { PreviewWidget } from '@/widgets/preview';
import { getAssetsApi } from '@/shared/api';
import { globalData } from '@/shared/data';

interface IPreviewPage {
  params: { category: string; imagePath: string };
}

export async function generateMetadata(
  { params: { category, imagePath } }: IPreviewPage,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const imageName = decodeURIComponent(imagePath);

  const assets: IImageData[] | null = await getAssetsApi({
    key: 'categories',
    value: category,
  });

  const image =
    assets?.find(({ attributes: { origin_path } }) =>
      origin_path.includes(imageName)
    ) || null;

  const caption = image?.attributes.custom_fields.caption;

  return image
    ? {
        ...parent,
        title: `${globalData.title} | ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        description: `Photogrpaph by Semyon Katz.${` ${caption}` || ''}`,
      }
    : (parent as Metadata);
}

export async function generateStaticParams({
  params: { category },
}: {
  params: { category: string };
}) {
  const data: IImageData[] | null = await getAssetsApi({
    key: 'categories',
    value: category,
  });

  if (!data) {
    return [];
  }

  return data.map((asset) => {
    const name = asset.attributes.origin_path;
    const path = encodeURIComponent(
      (name.split('/').pop() || name).replace(/\.[^/.]+$/, '')
    );

    return {
      imagePath: path,
    };
  });
}

export default async function PreviewPage({
  params: { category, imagePath },
}: IPreviewPage) {
  const name = decodeURIComponent(imagePath);

  const data: IImageData[] | null = await getAssetsApi({
    key: 'categories',
    value: category,
  });

  const image =
    data?.find((asset) => asset.attributes.origin_path.includes(name)) || null;

  // NOTE: Check if requested image exists in provided data and if it is not in progress (wip)
  if (!image) {
    return notFound();
  }

  return <PreviewWidget {...image} {...{ category }} />;
}
