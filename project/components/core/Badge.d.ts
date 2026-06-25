import * as React from 'react';

/**
 * Uppercase status pill — exam results, subscription state, AMF tag.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. @default "neutral" */
  variant?: 'pass' | 'fail' | 'active' | 'neutral' | 'gold';
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
