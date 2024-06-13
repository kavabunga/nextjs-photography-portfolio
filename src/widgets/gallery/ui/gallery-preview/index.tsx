import clsx from 'clsx';

import { motion } from 'framer-motion';

import Image from 'next/image';

import { inter } from '@/shared/style';
import type { IImageData } from '@/shared/types';

import classes from './classes.module.css';
import { CaptionUi } from '../caption';

interface IGalleryPreviewUi extends IImageData {
  onClose: () => void;
}

export function GalleryPreviewUi({ onClose, ...asset }: IGalleryPreviewUi) {
  return (
    <motion.div id="preview" className={classes.preview}>
      <Image
        src={asset.attributes.origin_path}
        alt={
          asset.attributes.custom_fields?.caption ||
          asset.attributes.origin_path
        }
        width={asset.attributes.media_width || 300}
        height={asset.attributes.media_height || 300}
        sizes="(min-width: 1280px) 1280px, 100vw"
        quality={80}
        id={asset.attributes.origin_path}
        className={classes.preview__image}
      />
      <div className={classes.preview__infoContainer}>
        {asset.attributes.custom_fields?.caption && (
          <CaptionUi text={asset.attributes.custom_fields.caption} />
          // <p className={classes.preview__caption}>
          //   {asset.attributes.custom_fields.caption}
          // </p>
        )}

        <button
          type="button"
          className={clsx(
            'button',
            inter.className,
            classes.preview__closeButton
          )}
          onClick={onClose}
        >
          Back
        </button>
      </div>
    </motion.div>
  );
}
