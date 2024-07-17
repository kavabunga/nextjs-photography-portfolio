import { type MutableRefObject } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import { LazyMotion, domAnimation, m } from 'framer-motion';

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
    <LazyMotion features={domAnimation}>
      <m.nav
        id="navigation"
        data-testid="navigation"
        variants={animationConfig}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.navigation}
      >
        <m.div className={classes.navigation__container}>
          {projectPages && (
            <m.ul className={classes.navigation__list}>
              {projectPages.map((element) => (
                <m.li
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
                    href={`/photography/${element.name.toLowerCase()}`}
                    aria-disabled={element.wip}
                    tabIndex={element.wip ? -1 : undefined}
                    onClick={element.wip ? undefined : onClose}
                  >
                    {element.name}
                  </Link>
                  {element.wip && (
                    <m.p
                      variants={labelAnimationConfig}
                      className={classes.navigation__itemLabel}
                    >
                      Soon
                    </m.p>
                  )}
                </m.li>
              ))}
            </m.ul>
          )}
          {infoPages && (
            <m.ul ref={infoLinksRef} className={classes.navigation__list}>
              {infoPages.map((element) => (
                <m.li
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
                </m.li>
              ))}
            </m.ul>
          )}
          <m.div className={classes.navigation__buttonsGroup}>
            <m.button
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
            </m.button>
            {!isInView && (
              <m.button
                type="button"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={downButtonAnimationConfig}
                className={clsx(classes.navigation__button)}
                onClick={() => onDownButton('navigation')}
              >
                <IconChevronDown size="100%" />
              </m.button>
            )}
          </m.div>
        </m.div>
      </m.nav>
    </LazyMotion>
  );
}
