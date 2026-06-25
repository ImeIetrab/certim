import * as React from 'react';

/** Segmented single-choice selector — question counts (10 / 20 / 50 / Toutes). */
export interface CountSelectorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Options to render. @default ["10","20","50","Toutes"] */
  options?: string[];
  /** Currently selected option. */
  value?: string;
  /** Selection handler. */
  onChange?: (value: string) => void;
}

export function CountSelector(props: CountSelectorProps): JSX.Element;
