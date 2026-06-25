import * as React from 'react';

/**
 * Primary CTA button in the CertIM gold/navy system.
 *
 * @startingPoint section="Core" subtitle="Gold/navy CTA — 4 variants, 3 sizes" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state. */
  disabled?: boolean;
  /** Glyph/element rendered before the label (e.g. "▶"). */
  iconLeft?: React.ReactNode;
  /** Glyph/element rendered after the label (e.g. "→"). */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
