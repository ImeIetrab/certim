import React from 'react';

/**
 * CertIM Button — gold/navy CTA system.
 * Variants: primary (gold), secondary (navy), outline (on navy), ghost.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconRight,
  iconLeft,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '13px' },
    md: { padding: '10px 20px', fontSize: '14px' },
    lg: { padding: '14px 28px', fontSize: '15px' },
  };

  const variants = {
    primary: {
      background: 'var(--gold)',
      color: 'var(--navy)',
      border: '1px solid var(--gold)',
    },
    secondary: {
      background: 'var(--navy)',
      color: 'var(--cream)',
      border: '1px solid var(--navy)',
    },
    outline: {
      background: 'var(--navy-fill-2)',
      color: 'var(--cream)',
      border: '1px solid var(--navy-border-2)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--blue-light)',
      border: '1px solid transparent',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'opacity var(--transition-base), background var(--transition-base)',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={base}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.opacity = '0.88'; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.opacity = '1'; }}
      {...rest}
    >
      {iconLeft ? <span aria-hidden="true">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span aria-hidden="true">{iconRight}</span> : null}
    </button>
  );
}
