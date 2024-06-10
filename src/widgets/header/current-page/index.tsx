'use client';

import { usePathname } from 'next/navigation';
import { CurrentPageUi } from './ui';

export function CurrentPage() {
  const path = usePathname();
  const pageName = path.split('/').slice(-1)[0];

  return <CurrentPageUi {...{ pageName }} />;
}
