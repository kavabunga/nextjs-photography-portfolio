'use client';

import { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@/shared/providers';

import { HeroWidgetUi } from './ui';

export function HeroWidget() {
  const { openNavigation } = useNavigation();
  const [session, setSession] = useState(false);

  useEffect(() => {
    const storageSession = window.sessionStorage.getItem('session-opened');
    if (storageSession) {
      setSession(true);
    }
    if (session) {
      openNavigation();
    }
  }, [openNavigation, session]);

  const handleClick = useCallback(() => {
    openNavigation();
    sessionStorage.setItem('session-opened', 'true');
  }, [openNavigation]);

  return !session && <HeroWidgetUi onClick={handleClick} />;
}
