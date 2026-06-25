import React from 'react';

/**
 * KpiPill — hero KPI tile on navy. Translucent surface, micro label, big value.
 */
export function KpiPill({ label, children, minWidth = 130, style, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--navy-fill-2)',
        border: '1px solid var(--navy-border)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 16px',
        minWidth,
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          color: 'var(--blue-light)',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          marginBottom: 7,
        }}
      >{label}</div>
      {children}
    </div>
  );
}

/** Big KPI value — gold or cream. Use inside KpiPill. */
export function KpiValue({ tone = 'gold', children, style }) {
  return (
    <div
      style={{
        fontSize: '1.6rem',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1,
        color: tone === 'gold' ? 'var(--gold)' : 'var(--cream)',
        ...style,
      }}
    >{children}</div>
  );
}
