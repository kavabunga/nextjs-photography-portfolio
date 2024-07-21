import type { ComponentProps } from 'react';

import classes from './classes.module.css';

interface ICaptionWidgetUi extends ComponentProps<'p'> {
  text: string | null;
}

export function CaptionWidgetUi({ text, ...props }: ICaptionWidgetUi) {
  // NOTE: If no text don't render anything
  if (!text) {
    return null;
  }

  // NOTE: Check if the string contains ". For "
  const splitIndex = text.indexOf('. For ');

  if (splitIndex === -1) {
    // NOTE: If ". For " is not found, render the entire string with the same styling
    return (
      <p {...props} className={classes.caption}>
        {text}
      </p>
    );
  }

  // NOTE: If ". For " is found, split the string and apply different styles
  const beforeFor = text.slice(0, splitIndex + 1);
  const afterFor = text.slice(splitIndex + 2); // +2 to include the space after ". For "

  // NOTE: Replace the first space with a non-breaking space in the highlighted part
  const highlightedText = afterFor.replace(' ', '\u00A0');

  return (
    <p {...props} className={classes.caption}>
      {beforeFor}{' '}
      <span className={classes.caption_highlight}>{highlightedText}</span>
    </p>
  );
}
