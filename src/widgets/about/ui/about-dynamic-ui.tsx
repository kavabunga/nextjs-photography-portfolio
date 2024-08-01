'use client';

import type { ReactNode } from 'react';

import clsx from 'clsx';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { inter } from '@/shared/style';
import type { IaboutPageData } from '@/shared/data';

import classes from './classes.module.css';
import { containerAnimationConfig } from './motion';

interface IAboutWidgetDynamicUi extends IaboutPageData {
  children: ReactNode;
}

export function AboutWidgetDynamicUi({
  title,
  text,
  clients,
  rights,
  children,
}: IAboutWidgetDynamicUi) {
  return (
    <LazyMotion features={domAnimation}>
      <section className={classes.about}>
        <m.div
          initial="hidden"
          animate="visible"
          variants={containerAnimationConfig}
          className={classes.about__articlesContainer}
        >
          {text && (
            <article
              className={classes.about__article}
              data-testid="about-article"
            >
              {title && (
                <h2 className={clsx(inter.className, classes.about__title)}>
                  {title}
                </h2>
              )}
              {text.map((paragraph) => (
                <p className={classes.about__paragraph} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </article>
          )}
          {clients && (
            <article
              className={classes.about__article}
              data-testid="about-clients"
            >
              <h2 className={clsx(inter.className, classes.about__title)}>
                Clients
              </h2>
              {clients.map((paragraph) => (
                <p
                  className={clsx(
                    classes.about__paragraph,
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
            <article
              className={classes.about__article}
              data-testid="about-rights"
            >
              {rights.map((paragraph) => (
                <p className={classes.about__paragraph} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </article>
          )}
        </m.div>
        <m.div
          initial="hidden"
          animate="visible"
          variants={containerAnimationConfig}
          className={classes.about__imagesContainer}
        >
          {children}
        </m.div>
      </section>
    </LazyMotion>
  );
}
