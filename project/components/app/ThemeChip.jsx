import React from 'react';
import { scoreColor } from './ProgressBar.jsx';

/**
 * ThemeChip — selectable AMF theme with number, name, score and checkbox.
 */
export function ThemeChip({ num, name, score, selected = false, onToggle, style, ...rest }) {
  return (
    <div
      role="checkbox"
      aria-checked={selected}
      tabIndex={0}
      onClick={onToggle}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 7,
        padding: '9px 11px',
        borderRadius: 'var(--radius-md)',
        border: `1.5px solid ${selected ? 'var(--navy)' : 'var(--border)'}`,
        background: selected ? 'rgba(4,9,26,0.06)' : 'var(--white)',
        cursor: 'pointer',
        userSelect: 'none',
        fontFamily: 'var(--font-sans)',
        transition: 'all var(--transition-base)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, minWidth: 0 }}>
        <div
          style={{
            width: 20, height: 20, borderRadius: 'var(--radius-xs)',
            background: 'var(--navy)', color: 'var(--gold)',
            fontSize: 10, fontWeight: 700, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >{num}</div>
        <span style={{ fontSize: 12, fontWeight: 500, lineHeight: 1.3 }}>{name}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0 }}>
        {score != null ? (
          <span style={{ fontSize: 11, fontWeight: 700, color: scoreColor(score) }}>{score}%</span>
        ) : null}
        <div
          style={{
            width: 15, height: 15, borderRadius: 3,
            border: `1.5px solid ${selected ? 'var(--navy)' : 'var(--border)'}`,
            background: selected ? 'var(--navy)' : 'transparent',
            color: 'var(--gold)', fontSize: 9, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all var(--transition-base)',
          }}
        >{selected ? '✓' : ''}</div>
      </div>
    </div>
  );
}
