import * as React from 'react';

/** Maps a 0–100 score to its semantic CSS color variable. */
export function scoreColor(value: number): string;

/**
 * Score progress bar with semantic fill (green/orange/red) and optional gold 75% goal line.
 *
 * @startingPoint section="App" subtitle="Score bar with 75% goal marker" viewport="700x120"
 */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Score 0–100; drives fill width and color. */
  value?: number;
  /** Render on a navy surface (translucent track). @default false */
  onNavy?: boolean;
  /** Track height in px. @default 7 */
  height?: number;
  /** Show the vertical goal line. @default false */
  showGoal?: boolean;
  /** Goal percentage for the marker. @default 75 */
  goal?: number;
  /** Override the semantic fill color. */
  color?: string;
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;
