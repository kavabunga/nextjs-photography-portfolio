'use client';

import clsx from 'clsx';

import Link from 'next/link';

import type { IImageData } from '@/shared/types';

import { CaptionWidget } from '@/widgets/caption';

import { resolveImageOrientation } from '../lib';

import { GalleryImageUi } from './gallery-image';
import classes from './classes.module.css';

interface IGalleryWidgetUi {
  data: IImageData[];
  isGridOn: boolean;
  path: string;
}

export function GalleryWidgetUi({ data, isGridOn, path }: IGalleryWidgetUi) {
  return (
    <ul className={clsx(classes.gallery, isGridOn && classes._view_grid)}>
      {data.map((asset: IImageData) => (
        <li
          key={asset.id}
          className={clsx(
            classes.gallery__item,
            classes[`_orientation_${resolveImageOrientation(asset)}`],
            asset.attributes.custom_fields.layout &&
              classes[`_layout_${asset.attributes.custom_fields.layout}`],
            isGridOn && classes._view_grid
          )}
        >
          <Link
            href={`/photography/${path}/${encodeURIComponent(
              (
                asset.attributes.origin_path.split('/').pop() ||
                asset.attributes.origin_path
              ).replace(/\.[^/.]+$/, '')
            )}`}
            className={clsx(
              classes.gallery__imageContainer,
              !isGridOn && classes._inactive
            )}
          >
            <GalleryImageUi {...asset} {...{ isGridOn }} />
          </Link>
          {/* NOTE: Show caption if grid is off, asset has caption and it doesn't match the previous one */}
          {/* {!isGridOn &&
            asset.attributes.custom_fields?.caption &&
            asset.attributes.custom_fields?.caption !==
              data[index - 1]?.attributes.custom_fields?.caption && (
              <CaptionWidget text={asset.attributes.custom_fields.caption} />
            )} */}
          {!isGridOn && asset.attributes.custom_fields?.caption && (
            <CaptionWidget text={asset.attributes.custom_fields.caption} />
          )}
        </li>
      ))}
    </ul>
  );
}
