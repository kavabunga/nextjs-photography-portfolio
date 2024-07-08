'use client';

import { usePathname } from 'next/navigation';

import { infoPagesCategories, projectPagesCategories } from '@/shared/data';

import { CurrentPageUi } from './ui';

export function CurrentPage() {
  const possiblePages = projectPagesCategories
    .map(({ name }) => name)
    .concat(infoPagesCategories.map(({ name }) => name));
  const path = usePathname().split('/').slice(-1)[0];
  const pageName = possiblePages.find((name) => name === path) ? path : null;

  return pageName && <CurrentPageUi {...{ pageName }} />;
}
