'use client';

import { useCallback } from 'react';

import { useNavigation } from '@/shared/providers';
import { useSessionStorage } from '@/shared/hooks';

import { HeroWidgetUi } from './ui';

export function HeroWidget() {
  const { openNavigation } = useNavigation();
  const session = useSessionStorage('session-opened');

  if (session) {
    openNavigation();
  }

  const handleClick = useCallback(() => {
    openNavigation();
    sessionStorage.setItem('session-opened', 'true');
  }, [openNavigation]);

  return !session && <HeroWidgetUi onClick={handleClick} />;
}
