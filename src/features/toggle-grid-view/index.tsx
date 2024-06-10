'use client';

import { projectPagesCategories } from '@/shared/data';
import { useViewMode } from '@/shared/providers';
import { usePathname } from 'next/navigation';
import { type ComponentProps, useCallback, type ComponentType } from 'react';

export interface IToggleGridViewFeatureTriggerUi
  extends ComponentProps<'button'> {
  isGridOn: boolean;
  visible: boolean;
}

interface IToggleGridViewFeature {
  triggerComponentUi: ComponentType<IToggleGridViewFeatureTriggerUi>;
}

export function ToggleGridViewFeature({
  triggerComponentUi: Ui,
}: IToggleGridViewFeature) {
  const { pagesGridModes, toggleGrid } = useViewMode();

  const path = usePathname();
  const currentPageName = path.split('/').slice(-1)[0];
  const isGriddable = projectPagesCategories.some(
    (page) => page.name === currentPageName
  );

  const handleClick = useCallback(
    () => toggleGrid(currentPageName),
    [currentPageName, toggleGrid]
  );

  return (
    <Ui
      onClick={handleClick}
      isGridOn={pagesGridModes?.[currentPageName] || false}
      visible={isGriddable}
    />
  );
}
