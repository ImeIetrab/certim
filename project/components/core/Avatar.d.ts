import * as React from 'react';

/** Circular initials avatar (blue-mid fill, cream text). */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Initials to display. @default "A" */
  initials?: string;
  /** Pixel diameter. @default 36 */
  size?: number;
}

export function Avatar(props: AvatarProps): JSX.Element;
