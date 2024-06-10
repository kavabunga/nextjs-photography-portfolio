'use client';

import { type ComponentProps, useCallback, type ComponentType } from 'react';

import { useNavigation } from '@/shared/providers';

export interface IOpenMenuFeatureTriggerUi extends ComponentProps<'button'> {}

interface IOpenMenuFeature {
  triggerComponentUi: ComponentType<IOpenMenuFeatureTriggerUi>;
}

export function OpenMenuFeature({ triggerComponentUi: Ui }: IOpenMenuFeature) {
  const { openNavigation } = useNavigation();
  const handleClick = useCallback(() => openNavigation(), [openNavigation]);

  return <Ui onClick={handleClick} />;
}
