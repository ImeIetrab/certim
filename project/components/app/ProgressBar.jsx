import React from 'react';

/**
 * ProgressBar — score bar with semantic fill color and optional 75% goal line.
 * Score thresholds: ≥75 green, 50–74 orange, <50 red.
 */
export function scoreColor(value) {
  if (value >= 75) return 'var(--success)';
  if (value >= 50) return 'var(--warning)';
  return 'var(--danger)';
}

export function ProgressBar({
  value = 0,
  onNavy = false,
  height = 7,
  showGoal = false,
  goal = 75,
  color,
  style,
  ...rest
}) {
  const fill = color || scoreColor(value);
  return (
    <div
      style={{
        position: 'relative',
        height,
        borderRadius: 'var(--radius-xs)',
        overflow: showGoal ? 'visible' : 'hidden',
        background: onNavy ? 'var(--navy-fill-3)' : 'var(--border)',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          height: '100%',
          width: `${Math.max(0, Math.min(100, value))}%`,
          background: fill,
          borderRadius: 'var(--radius-xs)',
          transition: 'width var(--transition-bar)',
        }}
      />
      {showGoal ? (
        <div
          style={{
            position: 'absolute',
            top: -2,
            bottom: -2,
            left: `${goal}%`,
            width: 2,
            background: 'var(--gold)',
            opacity: 0.85,
          }}
        />
      ) : null}
    </div>
  );
}
