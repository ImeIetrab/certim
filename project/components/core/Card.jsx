import React from 'react';

/**
 * Card — surface container. Light (white on beige) or navy (dark) or accent (gold-tinted).
 */
export function Card({ tone = 'light', title, subtitle, children, style, ...rest }) {
  const tones = {
    light: {
      background: 'var(--white)',
      border: '1px solid var(--border)',
      color: 'var(--navy)',
    },
    navy: {
      background: 'var(--navy-card)',
      border: '1px solid transparent',
      color: 'var(--cream)',
    },
    accent: {
      background: 'var(--surface-accent)',
      border: '1px solid var(--border-accent)',
      color: 'var(--cream)',
    },
  };

  const titleColor = tone === 'light' ? 'var(--navy)' : 'var(--cream)';
  const subColor = tone === 'light' ? 'var(--blue-light)' : 'var(--blue-light)';

  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: '20px 22px',
        fontFamily: 'var(--font-sans)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {title ? (
        <div style={{ fontSize: '14px', fontWeight: 700, color: titleColor, marginBottom: subtitle ? '3px' : '16px' }}>
          {title}
        </div>
      ) : null}
      {subtitle ? (
        <div style={{ fontSize: '13px', color: subColor, marginBottom: '16px' }}>{subtitle}</div>
      ) : null}
      {children}
    </div>
  );
}
