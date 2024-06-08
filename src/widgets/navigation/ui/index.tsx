import Link from 'next/link';

import clsx from 'clsx';

import { motion } from 'framer-motion';

import { IconX } from '@tabler/icons-react';

import type { IinfoPageCategory, IprojectPageCategory } from '@/shared/data';

import {
  animationConfig,
  closeButtonAnimationConfig,
  itemAnimationConfig,
  labelAnimationConfig,
} from './motion';
import classes from './classes.module.css';

interface INavigationWidgetUi {
  projectPages: IprojectPageCategory[] | null;
  infoPages: IinfoPageCategory[] | null;
  currentPage: string | null;
  onClose: () => void;
}

export function NavigationWidgetUi({
  projectPages,
  infoPages,
  currentPage,
  onClose,
}: INavigationWidgetUi) {
  return (
    <motion.nav
      variants={animationConfig}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.navigation}
    >
      <motion.div className={classes.navigation__container}>
        {projectPages && (
          <motion.ul className={classes.navigation__list}>
            {projectPages.map((element) => (
              <motion.li
                variants={itemAnimationConfig}
                className={classes.navigation__item}
                key={element.name}
              >
                {/* TODO: impliment page__link styling */}
                <Link
                  className={clsx(
                    classes.navigation__link,
                    element.wip && classes.navigation__link_inactive
                  )}
                  href={`/${element.name.toLowerCase()}`}
                  aria-disabled={element.wip}
                  tabIndex={element.wip ? -1 : undefined}
                >
                  {element.name}
                </Link>
                {element.wip && (
                  <motion.p
                    variants={labelAnimationConfig}
                    className={classes.navigation__itemLabel}
                  >
                    Soon
                  </motion.p>
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
        {infoPages && (
          <motion.ul className={classes.navigation__list}>
            {infoPages.map((element) => (
              <motion.li
                key={element.name}
                variants={itemAnimationConfig}
                className={classes.navigation__item}
              >
                <Link
                  className={`${classes.navigation__link} ${classes.navigation__link_size_small}`}
                  href={`/${element.name.toLowerCase()}`}
                >
                  {element.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
        {currentPage !== '/' && (
          <motion.button
            type="button"
            className={classes.navigation__closeButton}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={closeButtonAnimationConfig}
            whileHover="hover"
            onClick={onClose}
          >
            <IconX />
          </motion.button>
        )}
      </motion.div>
    </motion.nav>
  );
}
