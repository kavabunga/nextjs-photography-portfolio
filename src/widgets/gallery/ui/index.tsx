import clsx from 'clsx';

import { motion } from 'framer-motion';

import type { IImageData } from '@/shared/types';

import { resolveImageOrientation } from '../lib';

import { GalleryImageUi } from './gallery-image';
import { imageAnimationVariants } from './motion';
import classes from './classes.module.css';

interface IGalleryWidgetUi {
  data: IImageData[];
  isGridOn: boolean;
}

export function GalleryWidgetUi({ data, isGridOn }: IGalleryWidgetUi) {
  return (
    <ul className={clsx(classes.gallery, isGridOn && classes._view_grid)}>
      {data.map((asset: IImageData) => (
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
          <motion.div
            // whileHover={{ scale: 1.01 }}
            variants={imageAnimationVariants}
            initial="initial"
            animate="animate"
            className={classes.gallery__imageContainer}
          >
            <GalleryImageUi {...asset} {...{ isGridOn }} />
          </motion.div>
          {!isGridOn && asset.attributes.custom_fields?.caption && (
            <p className={classes.gallery__caption}>
              {asset.attributes.custom_fields.caption}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
