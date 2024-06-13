import clsx from 'clsx';

import { motion } from 'framer-motion';

import type { IImageData } from '@/shared/types';

import { resolveImageOrientation } from '../lib';

import { GalleryImageUi } from './gallery-image';
import { imageAnimationVariants } from './motion';
import classes from './classes.module.css';
import { CaptionUi } from './caption';

interface IGalleryWidgetUi {
  data: IImageData[];
  isGridOn: boolean;
  handleImageClick: (asset: IImageData) => void;
}

export function GalleryWidgetUi({
  data,
  isGridOn,
  handleImageClick,
}: IGalleryWidgetUi) {
  return (
    <ul className={clsx(classes.gallery, isGridOn && classes._view_grid)}>
      {data.map((asset: IImageData, index) => (
        <li
          key={asset.id}
          className={clsx(
            classes.gallery__item,
            classes[
              `_orientation_${resolveImageOrientation({ width: asset.attributes.media_width, height: asset.attributes.media_height })}`
            ],
            isGridOn && classes._view_grid
          )}
        >
          <motion.button
            variants={imageAnimationVariants}
            initial="initial"
            animate="animate"
            onClick={() => handleImageClick(asset)}
            className={clsx(
              'button',
              classes.gallery__imageContainer,
              !isGridOn && classes._inactive
            )}
          >
            <GalleryImageUi {...asset} {...{ isGridOn }} />
          </motion.button>
          {/* NOTE: Show caption if grid is off, asset has caption and it doesn't match the previous one */}
          {!isGridOn &&
            asset.attributes.custom_fields?.caption &&
            asset.attributes.custom_fields?.caption !==
              data[index - 1]?.attributes.custom_fields?.caption && (
              <CaptionUi text={asset.attributes.custom_fields.caption} />
            )}
        </li>
      ))}
    </ul>
  );
}
