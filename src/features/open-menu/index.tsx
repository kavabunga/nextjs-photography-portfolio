'use client';

import { type ComponentProps, useCallback, type ComponentType } from 'react';

import { useOverlay } from '@/shared/providers';

export interface IOpenMenuFeatureTriggerUi extends ComponentProps<'button'> {}

interface IOpenMenuFeature {
  triggerComponentUi: ComponentType<IOpenMenuFeatureTriggerUi>;
}

export function OpenMenuFeature({ triggerComponentUi: Ui }: IOpenMenuFeature) {
  const { openOverlay } = useOverlay();
  const handleClick = useCallback(
    () => openOverlay('navigation'),
    [openOverlay]
  );

  return <Ui onClick={handleClick} />;
}
