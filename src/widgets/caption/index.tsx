import type { ComponentProps } from 'react';
import { CaptionWidgetUi } from './ui';

interface ICaptionWidget extends ComponentProps<'p'> {
  text: string;
}

export function CaptionWidget(props: ICaptionWidget) {
  return <CaptionWidgetUi {...props} />;
}
