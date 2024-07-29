import Image from 'next/image';

import clsx from 'clsx';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import type { IAssetRichData } from '@/shared/types';
import { inter } from '@/shared/style';

import { CaptionWidget } from '@/widgets/caption';

import { previewAnimationVariants } from './motion';
import classes from './classes.module.css';

interface IPreviewWidgetUi extends IAssetRichData {
  category: string;
  onClickBack: () => void;
}

export function PreviewWidgetUi({
  category,
  onClickBack,
  ...asset
}: IPreviewWidgetUi) {
  return (
    <AnimatePresence>
      <LazyMotion features={domAnimation}>
        <m.div
          variants={previewAnimationVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={classes.preview}
        >
          <div className={classes.preview__imageContainer}>
            <Image
              priority
              src={asset.attributes.origin_path}
              alt={
                asset.attributes.custom_fields.caption ||
                asset.metadata.IPTC?.Caption ||
                asset.attributes.origin_path
              }
              width={0}
              height={0}
              sizes="(min-width: 1600px) 1600px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 720px) 720px, 600px"
              quality={50}
              fill
              id={asset.attributes.origin_path}
              className={classes.preview__image}
            />
          </div>
          <div className={classes.preview__infoContainer}>
            <CaptionWidget {...{ asset }} />
            <button
              type="button"
              onClick={onClickBack}
              className={clsx(
                'button',
                inter.className,
                classes.preview__button
              )}
            >
              Back
            </button>
          </div>
        </m.div>
      </LazyMotion>
    </AnimatePresence>
  );
}
