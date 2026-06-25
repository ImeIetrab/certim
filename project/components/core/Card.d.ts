import * as React from 'react';

/**
 * Surface container with optional title/subtitle header.
 *
 * @startingPoint section="Core" subtitle="Light / navy / accent card surface" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface tone. @default "light" */
  tone?: 'light' | 'navy' | 'accent';
  /** Optional bold card title. */
  title?: React.ReactNode;
  /** Optional muted subtitle under the title. */
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
