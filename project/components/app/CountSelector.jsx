import React from 'react';

/**
 * CountSelector — segmented selector (e.g. 10 / 20 / 50 / Toutes).
 */
export function CountSelector({ options = ['10', '20', '50', 'Toutes'], value, onChange, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 6, ...style }} {...rest}>
      {options.map((opt) => {
        const sel = opt === value;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange && onChange(opt)}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: 'var(--radius-sm)',
              border: `1px solid ${sel ? 'var(--navy)' : 'var(--border)'}`,
              background: sel ? 'var(--navy)' : 'var(--white)',
              color: sel ? 'var(--cream)' : 'var(--navy)',
              fontWeight: sel ? 600 : 400,
              fontSize: 13,
              fontFamily: 'var(--font-sans)',
              cursor: 'pointer',
              transition: 'all var(--transition-base)',
            }}
          >{opt}</button>
        );
      })}
    </div>
  );
}
