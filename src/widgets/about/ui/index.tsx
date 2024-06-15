import Image from 'next/image';

import clsx from 'clsx';

import { inter } from '@/shared/style';
import type { IaboutPageData } from '@/shared/data';
import type { IImageData } from '@/shared/types';

import classes from './classes.module.css';

interface IAboutWidgetUi extends IaboutPageData {
  images: IImageData[] | null;
}

export function AboutWidgetUi({
  title,
  text,
  clients,
  rights,
  images,
}: IAboutWidgetUi) {
  return (
    <section className={classes.info}>
      <div className={classes.info__articlesContainer}>
        {text && (
          <article
            className={classes.info__article}
            data-testid="about-article"
          >
            {title && (
              <h2 className={clsx(inter.className, classes.info__title)}>
                {title}
              </h2>
            )}
            {text.map((paragraph) => (
              <p className={classes.info__paragraph} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </article>
        )}
        {clients && (
          <article
            className={classes.info__article}
            data-testid="about-clients"
          >
            <h2 className={clsx(inter.className, classes.info__title)}>
              Clients
            </h2>
            {clients.map((paragraph) => (
              <p
                className={clsx(
                  classes.info__paragraph,
                  classes._style_highlight
                )}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </article>
        )}
        {rights && (
          <article className={classes.info__article} data-testid="about-rights">
            {rights.map((paragraph) => (
              <p className={classes.info__paragraph} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </article>
        )}
      </div>

      {images && images[0] && (
        <div
          // initial="hidden"
          // animate="visible"
          // exit="hidden"
          // variants={containerAnimationConfig}
          className={classes.info__imagesContainer}
        >
          {images.map((asset) => (
            <div
              // variants={imageAnimationConfig}
              className={classes.info__imageContainer}
              key={asset.id}
            >
              <Image
                src={asset.attributes.origin_path}
                alt={
                  asset.attributes.custom_fields?.caption ||
                  asset.attributes.origin_path
                }
                width={asset.attributes.media_width || 300}
                height={asset.attributes.media_height || 300}
                sizes="100vw, (min-width: $breakpoint-xs) 40vw"
                quality={70}
                className={classes.info__image}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
