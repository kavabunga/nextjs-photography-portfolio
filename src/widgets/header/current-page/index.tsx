'use client';

import { usePathname } from 'next/navigation';

import { infoPagesCategories, projectPagesCategories } from '@/shared/data';

import { CurrentPageUi } from './ui';

export function CurrentPage() {
  const possiblePages = projectPagesCategories
    .map(({ name }) => name)
    .concat(infoPagesCategories.map(({ name }) => name));
  const path = usePathname()
    .split('/')
    .filter((x) => x);

  const pageName =
    possiblePages.find((name) => path.find((segment) => segment === name)) ||
    null;

  return pageName && <CurrentPageUi {...{ pageName }} />;
}
