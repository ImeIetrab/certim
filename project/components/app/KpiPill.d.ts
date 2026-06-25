import * as React from 'react';

/** Hero KPI tile on navy — translucent surface, uppercase micro label, slot for the value. */
export interface KpiPillProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase micro label (e.g. "Score de maîtrise"). */
  label: React.ReactNode;
  /** Minimum width in px. @default 130 */
  minWidth?: number;
  children?: React.ReactNode;
}
export function KpiPill(props: KpiPillProps): JSX.Element;

/** Large KPI number, gold or cream. */
export interface KpiValueProps {
  /** @default "gold" */
  tone?: 'gold' | 'cream';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function KpiValue(props: KpiValueProps): JSX.Element;
