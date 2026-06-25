import React from 'react';

/**
 * Avatar — circular initial badge (user, sidebar).
 */
export function Avatar({ initials = 'A', size = 36, style, ...rest }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--blue-mid)',
        color: 'var(--cream)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: Math.round(size * 0.42),
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      {initials}
    </div>
  );
}
