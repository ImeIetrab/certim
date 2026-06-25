import React from 'react';

/**
 * Badge — small status pill (pass / fail / active / neutral).
 */
export function Badge({ variant = 'neutral', children, style, ...rest }) {
  const variants = {
    pass:    { background: 'var(--pass-bg)', color: 'var(--pass-fg)' },
    fail:    { background: 'var(--fail-bg)', color: 'var(--fail-fg)' },
    active:  { background: 'var(--pass-bg)', color: 'var(--pass-fg)' },
    neutral: { background: 'var(--border)', color: '#888' },
    gold:    { background: 'var(--gold)', color: 'var(--navy)' },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        padding: '3px 9px',
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1.4,
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
