import { type MutableRefObject } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import { motion } from 'framer-motion';

import { IconChevronDown, IconX } from '@tabler/icons-react';

import type { IinfoPageCategory, IprojectPageCategory } from '@/shared/data';

import {
  animationConfig,
  closeButtonAnimationConfig,
  downButtonAnimationConfig,
  itemAnimationConfig,
  labelAnimationConfig,
} from './motion';
import classes from './classes.module.css';

interface INavigationWidgetUi {
  projectPages: IprojectPageCategory[] | null;
  infoPages: IinfoPageCategory[] | null;
  infoLinksRef: MutableRefObject<null>;
  isInView: boolean;
  onDownButton: (targetId: string) => void;
  onClose: () => void;
}

export function NavigationWidgetUi({
  projectPages,
  infoPages,
  infoLinksRef,
  isInView,
  onDownButton,
  onClose,
}: INavigationWidgetUi) {
  return (
    <motion.nav
      id="navigation"
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
                <Link
                  className={clsx(
                    'link',
                    classes.navigation__link,
                    element.wip && classes._inactive
                  )}
                  href={`/${element.name.toLowerCase()}`}
                  aria-disabled={element.wip}
                  tabIndex={element.wip ? -1 : undefined}
                  onClick={element.wip ? undefined : onClose}
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
          <motion.ul
            ref={infoLinksRef}
            id="info-links"
            className={classes.navigation__list}
          >
            {infoPages.map((element) => (
              <motion.li
                key={element.name}
                variants={itemAnimationConfig}
                className={classes.navigation__item}
              >
                <Link
                  className={clsx(
                    'link',
                    classes.navigation__link,
                    classes._size_small
                  )}
                  href={`/${element.name.toLowerCase()}`}
                  onClick={onClose}
                >
                  {element.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
        <motion.div className={classes.navigation__buttonsGroup}>
          <motion.button
            type="button"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={closeButtonAnimationConfig}
            whileHover="hover"
            className={clsx(classes.navigation__button)}
            onClick={onClose}
          >
            <IconX size="100%" />
          </motion.button>
          {!isInView && (
            <motion.button
              type="button"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={downButtonAnimationConfig}
              className={clsx(classes.navigation__button)}
              onClick={() => onDownButton('navigation')}
            >
              <IconChevronDown size="100%" />
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
