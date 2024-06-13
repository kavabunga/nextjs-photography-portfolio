'use client';

import Link from 'next/link';

import clsx from 'clsx';

import { AnimatePresence, motion } from 'framer-motion';

import { inter } from '@/shared/style';
import type { IlinksPageData } from '@/shared/data';

import { animationConfig, itemAnimationConfig } from './motion';
import classes from './classes.module.css';

interface IContactsWidgetUi extends IlinksPageData {}

export function ContactsWidgetUi({ links }: IContactsWidgetUi) {
  return (
    <AnimatePresence>
      {links && (
        <motion.ul
          variants={animationConfig}
          initial="hidden"
          animate="visible"
          className={clsx(inter.className, classes.contacts)}
        >
          {links.map((item) => (
            <motion.li
              variants={itemAnimationConfig}
              className={classes.contacts__item}
              key={item.link.text}
            >
              {item.type && (
                <span className={classes.contacts__text}>{item.type}</span>
              )}
              {item.link.url && (
                <Link
                  className={clsx('link', classes.contacts__link)}
                  href={item.link.url}
                >
                  {item.link.text || item.link.url}
                </Link>
              )}
              {item.text && (
                <span className={classes.contacts__text}>{item.text}</span>
              )}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
