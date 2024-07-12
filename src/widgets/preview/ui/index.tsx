import Link from 'next/link';
import Image from 'next/image';

import clsx from 'clsx';

import { inter } from '@/shared/style';
import type { IImageData } from '@/shared/types';

import { CaptionWidget } from '@/widgets/caption';

import classes from './classes.module.css';

interface IPreviewWidgetUi extends IImageData {
  category: string;
}

export function PreviewWidgetUi({ category, ...asset }: IPreviewWidgetUi) {
  return (
    <div className={classes.preview}>
      <div className={classes.preview__imageContainer}>
        <Image
          src={asset.attributes.origin_path}
          alt={
            asset.attributes.custom_fields?.caption ||
            asset.attributes.origin_path
          }
          width={0}
          height={0}
          sizes="(min-width: 1280px) 1280px, 100vw"
          quality={50}
          fill
          id={asset.attributes.origin_path}
          className={classes.preview__image}
        />
      </div>
      <div className={classes.preview__infoContainer}>
        {asset.attributes.custom_fields?.caption && (
          <CaptionWidget text={asset.attributes.custom_fields.caption} />
        )}

        <Link
          className={clsx(
            'link',
            inter.className,
            classes.preview__closeButton
          )}
          href={`/photography/${category}/`}
        >
          Back
        </Link>
      </div>
    </div>
  );
}
