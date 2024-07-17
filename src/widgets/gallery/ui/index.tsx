'use client';

import Link from 'next/link';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import clsx from 'clsx';

import type { IImageData } from '@/shared/types';

import { CaptionWidget } from '@/widgets/caption';

import { resolveImageOrientation } from '../lib';

import { GalleryImageUi } from './gallery-image';
import { containerAnimationVariants, imageAnimationVariants } from './motion';
import classes from './classes.module.css';

interface IGalleryWidgetUi {
  data: IImageData[];
  isGridOn: boolean;
  path: string;
}

export function GalleryWidgetUi({ data, isGridOn, path }: IGalleryWidgetUi) {
  return (
    <LazyMotion features={domAnimation}>
      <m.ul
        variants={containerAnimationVariants}
        initial="initial"
        animate="visible"
        className={clsx(classes.gallery, isGridOn && classes._view_grid)}
      >
        {data.map((asset: IImageData) => (
          <m.li
            variants={imageAnimationVariants}
            key={asset.id}
            className={clsx(
              classes.gallery__item,
              asset.attributes.custom_fields.layout &&
                classes[`_layout_${asset.attributes.custom_fields.layout}`],
              classes[`_orientation_${resolveImageOrientation(asset)}`],
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
              className={classes.gallery__imageContainer}
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
          </m.li>
        ))}
      </m.ul>
    </LazyMotion>
  );
}
