import * as React from 'react';

/**
 * Selectable AMF theme chip — numbered badge, name, score, gold checkmark when selected.
 */
export interface ThemeChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Theme number (1–8). */
  num: number | string;
  /** Theme name. */
  name: string;
  /** Optional mastery score 0–100 (colored by threshold). */
  score?: number;
  /** Selected state. @default false */
  selected?: boolean;
  /** Click/toggle handler. */
  onToggle?: () => void;
}

export function ThemeChip(props: ThemeChipProps): JSX.Element;
