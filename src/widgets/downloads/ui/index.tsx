'use client';

import Link from 'next/link';

import clsx from 'clsx';

import { AnimatePresence, motion } from 'framer-motion';

import { IconFileTypePdf } from '@tabler/icons-react';

import { inter } from '@/shared/style';
import type { IlinksPageData } from '@/shared/data';

import { animationConfig, itemAnimationConfig } from './motion';
import classes from './classes.module.css';

interface IDownloadsWidgetUi extends IlinksPageData {}

export function DownloadsWidgetUi({ links }: IDownloadsWidgetUi) {
  return (
    <AnimatePresence>
      {links && (
        <motion.ul
          variants={animationConfig}
          initial="hidden"
          animate="visible"
          className={clsx(inter.className, classes.downloads)}
        >
          {links.map((item) => (
            <motion.li
              variants={itemAnimationConfig}
              className={classes.downloads__item}
              key={item.link.text}
            >
              {item.type && item.type === 'pdf' && (
                <IconFileTypePdf
                  stroke={1}
                  className={classes.downloads__icon}
                />
              )}
              {item.link.url && (
                <Link
                  className={clsx('link', classes.downloads__link)}
                  href={item.link.url}
                >
                  {item.link.text || item.link.url}
                </Link>
              )}
              {item.text && (
                <span className={classes.downloads__text}>{item.text}</span>
              )}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
