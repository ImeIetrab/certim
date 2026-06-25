/* @ds-bundle: {"format":3,"namespace":"CertIMDesignSystem_2a4d2d","components":[{"name":"CountSelector","sourcePath":"components/app/CountSelector.jsx"},{"name":"KpiPill","sourcePath":"components/app/KpiPill.jsx"},{"name":"KpiValue","sourcePath":"components/app/KpiPill.jsx"},{"name":"ProgressBar","sourcePath":"components/app/ProgressBar.jsx"},{"name":"ThemeChip","sourcePath":"components/app/ThemeChip.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"}],"sourceHashes":{"components/app/CountSelector.jsx":"a5f4d4ab940f","components/app/KpiPill.jsx":"5c9e0023cbae","components/app/ProgressBar.jsx":"dad24880971b","components/app/ThemeChip.jsx":"e5fa2d764111","components/core/Avatar.jsx":"343bc881df78","components/core/Badge.jsx":"51b64045f8c6","components/core/Button.jsx":"3d285551b185","components/core/Card.jsx":"bb2ebd8940e7","ui_kits/app/DashboardBody.jsx":"afd828b1265a","ui_kits/app/DashboardHero.jsx":"bf382ffc1426","ui_kits/app/Sidebar.jsx":"716a0eb17a51","ui_kits/website/LandingPage.jsx":"46e51c340512","ui_kits/website/SiteChrome.jsx":"34b884dccbac"},"inlinedExternals":[],"unexposedExports":[{"name":"scoreColor","sourcePath":"components/app/ProgressBar.jsx"}]} */

(() => {

const __ds_ns = (window.CertIMDesignSystem_2a4d2d = window.CertIMDesignSystem_2a4d2d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/app/CountSelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CountSelector — segmented selector (e.g. 10 / 20 / 50 / Toutes).
 */
function CountSelector({
  options = ['10', '20', '50', 'Toutes'],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 6,
      ...style
    }
  }, rest), options.map(opt => {
    const sel = opt === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      type: "button",
      onClick: () => onChange && onChange(opt),
      style: {
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
        transition: 'all var(--transition-base)'
      }
    }, opt);
  }));
}
Object.assign(__ds_scope, { CountSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/CountSelector.jsx", error: String((e && e.message) || e) }); }

// components/app/KpiPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KpiPill — hero KPI tile on navy. Translucent surface, micro label, big value.
 */
function KpiPill({
  label,
  children,
  minWidth = 130,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--navy-fill-2)',
      border: '1px solid var(--navy-border)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      minWidth,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--blue-light)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      marginBottom: 7
    }
  }, label), children);
}

/** Big KPI value — gold or cream. Use inside KpiPill. */
function KpiValue({
  tone = 'gold',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.6rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: tone === 'gold' ? 'var(--gold)' : 'var(--cream)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { KpiPill, KpiValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/KpiPill.jsx", error: String((e && e.message) || e) }); }

// components/app/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — score bar with semantic fill color and optional 75% goal line.
 * Score thresholds: ≥75 green, 50–74 orange, <50 red.
 */
function scoreColor(value) {
  if (value >= 75) return 'var(--success)';
  if (value >= 50) return 'var(--warning)';
  return 'var(--danger)';
}
function ProgressBar({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--radius-xs)',
      overflow: showGoal ? 'visible' : 'hidden',
      background: onNavy ? 'var(--navy-fill-3)' : 'var(--border)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${Math.max(0, Math.min(100, value))}%`,
      background: fill,
      borderRadius: 'var(--radius-xs)',
      transition: 'width var(--transition-bar)'
    }
  }), showGoal ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -2,
      bottom: -2,
      left: `${goal}%`,
      width: 2,
      background: 'var(--gold)',
      opacity: 0.85
    }
  }) : null);
}
Object.assign(__ds_scope, { scoreColor, ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/app/ThemeChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ThemeChip — selectable AMF theme with number, name, score and checkbox.
 */
function ThemeChip({
  num,
  name,
  score,
  selected = false,
  onToggle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "checkbox",
    "aria-checked": selected,
    tabIndex: 0,
    onClick: onToggle,
    style: {
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
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--navy)',
      color: 'var(--gold)',
      fontSize: 10,
      fontWeight: 700,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.3
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      flexShrink: 0
    }
  }, score != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: __ds_scope.scoreColor(score)
    }
  }, score, "%") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 15,
      height: 15,
      borderRadius: 3,
      border: `1.5px solid ${selected ? 'var(--navy)' : 'var(--border)'}`,
      background: selected ? 'var(--navy)' : 'transparent',
      color: 'var(--gold)',
      fontSize: 9,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--transition-base)'
    }
  }, selected ? '✓' : '')));
}
Object.assign(__ds_scope, { ThemeChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ThemeChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular initial badge (user, sidebar).
 */
function Avatar({
  initials = 'A',
  size = 36,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
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
      ...style
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status pill (pass / fail / active / neutral).
 */
function Badge({
  variant = 'neutral',
  children,
  style,
  ...rest
}) {
  const variants = {
    pass: {
      background: 'var(--pass-bg)',
      color: 'var(--pass-fg)'
    },
    fail: {
      background: 'var(--fail-bg)',
      color: 'var(--fail-fg)'
    },
    active: {
      background: 'var(--pass-bg)',
      color: 'var(--pass-fg)'
    },
    neutral: {
      background: 'var(--border)',
      color: '#888'
    },
    gold: {
      background: 'var(--gold)',
      color: 'var(--navy)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CertIM Button — gold/navy CTA system.
 * Variants: primary (gold), secondary (navy), outline (on navy), ghost.
 */
function Button({
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
    sm: {
      padding: '8px 16px',
      fontSize: '13px'
    },
    md: {
      padding: '10px 20px',
      fontSize: '14px'
    },
    lg: {
      padding: '14px 28px',
      fontSize: '15px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--gold)',
      color: 'var(--navy)',
      border: '1px solid var(--gold)'
    },
    secondary: {
      background: 'var(--navy)',
      color: 'var(--cream)',
      border: '1px solid var(--navy)'
    },
    outline: {
      background: 'var(--navy-fill-2)',
      color: 'var(--cream)',
      border: '1px solid var(--navy-border-2)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--blue-light)',
      border: '1px solid transparent'
    }
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
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = '0.88';
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.opacity = '1';
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container. Light (white on beige) or navy (dark) or accent (gold-tinted).
 */
function Card({
  tone = 'light',
  title,
  subtitle,
  children,
  style,
  ...rest
}) {
  const tones = {
    light: {
      background: 'var(--white)',
      border: '1px solid var(--border)',
      color: 'var(--navy)'
    },
    navy: {
      background: 'var(--navy-card)',
      border: '1px solid transparent',
      color: 'var(--cream)'
    },
    accent: {
      background: 'var(--surface-accent)',
      border: '1px solid var(--border-accent)',
      color: 'var(--cream)'
    }
  };
  const titleColor = tone === 'light' ? 'var(--navy)' : 'var(--cream)';
  const subColor = tone === 'light' ? 'var(--blue-light)' : 'var(--blue-light)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: '20px 22px',
      fontFamily: 'var(--font-sans)',
      ...tones[tone],
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      fontWeight: 700,
      color: titleColor,
      marginBottom: subtitle ? '3px' : '16px'
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: subColor,
      marginBottom: '16px'
    }
  }, subtitle) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DashboardBody.jsx
try { (() => {
/* CertIM dashboard — main content: overview, exams, training, stats, account. */
const {
  Card,
  Button,
  Badge,
  ThemeChip,
  CountSelector,
  ProgressBar
} = window.CertIMDesignSystem_2a4d2d;
const THEMES_FULL = [{
  name: 'Cadre institutionnel et réglementaire',
  short: 'Cadre réglementaire',
  score: 78,
  seen: '109/140'
}, {
  name: "L'offre de produits financiers",
  short: 'Produits financiers',
  score: 65,
  seen: '104/160'
}, {
  name: 'Les marchés financiers',
  short: 'Marchés financiers',
  score: 72,
  seen: '86/120'
}, {
  name: "L'analyse financière",
  short: 'Analyse financière',
  score: 48,
  seen: '46/95'
}, {
  name: 'La gestion de portefeuille',
  short: 'Gestion portefeuille',
  score: 55,
  seen: '52/95'
}, {
  name: 'Les risques',
  short: 'Les risques',
  score: 80,
  seen: '64/80'
}, {
  name: 'La conformité et la déontologie',
  short: 'Conformité',
  score: 69,
  seen: '55/80'
}, {
  name: 'La finance durable',
  short: 'Finance durable',
  score: 30,
  seen: '9/30'
}];
function scoreCol(v) {
  return v >= 75 ? 'var(--success)' : v >= 50 ? 'var(--warning)' : 'var(--danger)';
}
function SectionLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 13,
      background: 'var(--navy)',
      borderRadius: 2
    }
  }), children);
}
function ThemePicker({
  title,
  subtitle
}) {
  const [sel, setSel] = React.useState({});
  const [count, setCount] = React.useState('20');
  const n = Object.values(sel).filter(Boolean).length;
  return /*#__PURE__*/React.createElement(Card, {
    title: title,
    subtitle: subtitle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 7,
      marginBottom: 14
    }
  }, THEMES_FULL.map((t, i) => /*#__PURE__*/React.createElement(ThemeChip, {
    key: i,
    num: i + 1,
    name: t.short,
    score: t.score,
    selected: !!sel[i],
    onToggle: () => setSel(s => ({
      ...s,
      [i]: !s[i]
    }))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center',
      marginBottom: 12
    }
  }, n === 0 ? 'Tous les thèmes · aucune sélection' : n === 1 ? '1 thème sélectionné' : n + ' thèmes sélectionnés'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 7
    }
  }, "Nombre de questions"), /*#__PURE__*/React.createElement(CountSelector, {
    value: count,
    onChange: setCount,
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "\u2192",
    style: {
      width: '100%',
      background: 'var(--navy)',
      color: 'var(--gold)',
      justifyContent: 'center'
    }
  }, "Commencer l'entra\xEEnement"));
}
function LastExamCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 22px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--blue-light)',
      marginBottom: 12
    }
  }, "Dernier examen blanc"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2.6rem',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-.04em',
      color: 'var(--danger)'
    }
  }, "68%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      marginTop: 3,
      color: 'var(--danger)'
    }
  }, "\xC9CHOU\xC9 \xB7 Il manque 7 points")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream)',
      fontSize: 12,
      fontWeight: 600
    }
  }, "18 juin 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--blue-light)',
      fontSize: 11,
      marginTop: 2
    }
  }, "2h12 / 2h30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-light)',
      fontSize: 11
    }
  }, "Score"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-light)',
      fontSize: 11
    }
  }, "Seuil 75%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 68,
    onNavy: true,
    showGoal: true,
    height: 6,
    color: "var(--danger)"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconRight: "\u2192",
    style: {
      width: '100%',
      marginTop: 14,
      background: 'var(--surface-accent)',
      border: '1px solid var(--border-accent)',
      color: 'var(--gold)',
      fontSize: 12,
      justifyContent: 'center'
    }
  }, "Relancer un examen blanc"));
}
const WEEK = [{
  d: 'Lun',
  n: 23,
  v: 32,
  k: 'high'
}, {
  d: 'Mar',
  n: 24,
  v: 18,
  k: 'mid'
}, {
  d: 'Mer',
  n: 25,
  v: 8,
  k: 'low'
}, {
  d: 'Jeu',
  n: 26,
  v: 45,
  k: 'high'
}, {
  d: 'Ven',
  n: 27,
  v: 12,
  k: 'high',
  today: true
}, {
  d: 'Sam',
  n: 28,
  v: null,
  k: 'empty'
}, {
  d: 'Dim',
  n: 29,
  v: null,
  k: 'empty'
}];
const HEAT = {
  low: {
    background: '#FEF3C7',
    color: '#92400E'
  },
  mid: {
    background: '#FED7AA',
    color: '#9A3412'
  },
  high: {
    background: '#BBF7D0',
    color: '#166534'
  },
  empty: {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    color: 'var(--border)'
  }
};
function CalendarCard() {
  return /*#__PURE__*/React.createElement(Card, {
    title: "Activit\xE9 cette semaine",
    subtitle: "23 \u2013 29 juin 2026"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 6
    }
  }, WEEK.map(day => /*#__PURE__*/React.createElement("div", {
    key: day.d,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, day.d), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '1',
      borderRadius: 7,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 700,
      ...HEAT[day.k],
      outline: day.today ? '2px solid var(--navy)' : 'none',
      outlineOffset: 2
    }
  }, day.v == null ? '—' : day.v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: day.today ? 'var(--navy)' : 'var(--text-muted)',
      fontWeight: day.today ? 700 : 400
    }
  }, day.n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 12,
      paddingTop: 12,
      borderTop: '1px solid var(--border)',
      flexWrap: 'wrap'
    }
  }, [['#FEF3C7', '1–15 q.'], ['#FED7AA', '16–30 q.'], ['#BBF7D0', '30+ q.'], ['var(--bg)', 'Inactif']].map(([c, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: c,
      border: '1px solid var(--border)'
    }
  }), l))));
}
const EXAM_HISTORY = [{
  name: 'Examen blanc #3',
  date: '18 juin 2026',
  dur: '2h12',
  score: 68
}, {
  name: 'Examen blanc #2',
  date: '11 juin 2026',
  dur: '2h24',
  score: 74
}, {
  name: 'Examen blanc #1',
  date: '4 juin 2026',
  dur: '1h58',
  score: 61
}];
function ExamsSection() {
  return /*#__PURE__*/React.createElement(Card, {
    title: "Simulez l'examen officiel",
    subtitle: "120 questions \xB7 2h30 \xB7 Timer \xB7 Correction \xE0 la fin \xB7 Seuil 75%"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "\u2192",
    style: {
      background: 'var(--navy)',
      color: 'var(--gold)',
      marginBottom: 24
    }
  }, "Lancer un examen blanc"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      marginBottom: 10
    }
  }, "Historique"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, EXAM_HISTORY.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 16px',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, e.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, e.dur), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: scoreCol(e.score)
    }
  }, e.score, "%"), /*#__PURE__*/React.createElement(Badge, {
    variant: "fail"
  }, "\xC9chou\xE9"))))));
}
function StatsSection() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Progression par th\xE8me",
    subtitle: "Niveau de ma\xEEtrise sur la banque compl\xE8te."
  }, THEMES_FULL.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, t.seen), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      minWidth: 32,
      textAlign: 'right',
      color: scoreCol(t.score)
    }
  }, t.score, "%"))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: t.score
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      paddingTop: 14,
      borderTop: '1px solid var(--border)',
      marginTop: 4,
      flexWrap: 'wrap'
    }
  }, [['var(--success)', 'Maîtrisé ≥75%'], ['var(--warning)', 'En cours 50–74%'], ['var(--danger)', 'À travailler <50%']].map(([c, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 2,
      background: c
    }
  }), l)))), /*#__PURE__*/React.createElement(Card, {
    title: "Statistiques rapides",
    subtitle: "R\xE9sum\xE9 de votre activit\xE9."
  }, [['Questions répondues', '347 / ~600', null], ['Score moyen', '71%', 'var(--warning)'], ['Temps moyen / question', '38 sec', null], ['Questions maîtrisées', '124', 'var(--success)'], ['Questions à revoir', '87', 'var(--danger)'], ['Meilleur score examen', '74%', 'var(--warning)'], ['Streak actuel', '🔥 7 jours', null], ['Record de streak', '12 jours', null]].map(([l, v, c], i, arr) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '9px 0',
      borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: c || 'var(--navy)'
    }
  }, v)))));
}
function AccountSection() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Informations personnelles"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, [['Nom', 'Alexandre Dubois'], ['Email', 'a.dubois@banque.fr'], ['Membre depuis', 'Mai 2026']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 90,
      color: 'var(--text-muted)',
      fontSize: 13,
      flexShrink: 0
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    title: "Abonnement"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Certification AMF \u2014 34,99 \u20AC/mois"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, "Renouvellement le 24 juillet 2026")), /*#__PURE__*/React.createElement(Badge, {
    variant: "active"
  }, "Actif")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14,
      borderTop: '1px solid var(--border)',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      color: 'var(--danger)',
      border: '1px solid var(--danger)',
      borderRadius: 'var(--radius-sm)',
      padding: '7px 14px',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, "R\xE9silier l'abonnement")))));
}
function DashboardBody() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "s-overview",
    style: {
      scrollMarginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Tableau de bord"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(ThemePicker, {
    title: "Lancer un entra\xEEnement",
    subtitle: "S\xE9lectionnez un ou plusieurs th\xE8mes ci-dessous."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(LastExamCard, null), /*#__PURE__*/React.createElement(CalendarCard, null)))), /*#__PURE__*/React.createElement("div", {
    id: "s-exams",
    style: {
      scrollMarginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Examens blancs"), /*#__PURE__*/React.createElement(ExamsSection, null)), /*#__PURE__*/React.createElement("div", {
    id: "s-training",
    style: {
      scrollMarginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Entra\xEEnement"), /*#__PURE__*/React.createElement(ThemePicker, {
    title: "Session d'entra\xEEnement",
    subtitle: "Choisissez vos th\xE8mes et le nombre de questions."
  })), /*#__PURE__*/React.createElement("div", {
    id: "s-stats",
    style: {
      scrollMarginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Statistiques"), /*#__PURE__*/React.createElement(StatsSection, null)), /*#__PURE__*/React.createElement("div", {
    id: "s-account",
    style: {
      scrollMarginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Mon compte"), /*#__PURE__*/React.createElement(AccountSection, null)));
}
window.DashboardBody = DashboardBody;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DashboardBody.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DashboardHero.jsx
try { (() => {
/* CertIM dashboard — compact navy hero with greeting + KPI pills + CTAs. */
const {
  KpiPill,
  KpiValue,
  ProgressBar,
  Button
} = window.CertIMDesignSystem_2a4d2d;
function DashboardHero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hero-gradient)',
      padding: '22px 32px',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)',
      backgroundSize: '50px 50px',
      opacity: 0.03
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream)',
      fontSize: '1.25rem',
      fontWeight: 700,
      letterSpacing: '-.02em'
    }
  }, "Bonjour, Alexandre \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--blue-light)',
      fontSize: 12,
      marginTop: 3
    }
  }, "Certification AMF \xB7 Progression en cours")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(KpiPill, {
    label: "Jours cons\xE9cutifs"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.5rem',
      lineHeight: 1
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement(KpiValue, {
    tone: "cream",
    style: {
      fontSize: '1.6rem'
    }
  }, "7")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--blue-light)',
      marginTop: 5
    }
  }, "S\xE9rie active \xB7 Record : 12 j.")), /*#__PURE__*/React.createElement(KpiPill, {
    label: "Score de ma\xEEtrise",
    minWidth: 160
  }, /*#__PURE__*/React.createElement(KpiValue, {
    tone: "gold"
  }, "62%"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 62,
    onNavy: true,
    showGoal: true,
    height: 5,
    style: {
      marginTop: 7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--gold-dark)',
      marginTop: 6
    }
  }, "Objectif 75% \xB7 \u221213 pts")), /*#__PURE__*/React.createElement(KpiPill, {
    label: "Questions r\xE9pondues"
  }, /*#__PURE__*/React.createElement(KpiValue, {
    tone: "cream"
  }, "347"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--blue-light)',
      marginTop: 5
    }
  }, "sur ~600 \xB7 Moy. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--gold)'
    }
  }, "71%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "\u25B6",
    onClick: () => onNavigate('s-training')
  }, "S'entra\xEEner"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('s-exams')
  }, "Examen blanc"))));
}
window.DashboardHero = DashboardHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DashboardHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
/* CertIM app — fixed left sidebar (260px). Logo, user, nav, per-theme progress, cert pill. */
const {
  Avatar,
  ProgressBar
} = window.CertIMDesignSystem_2a4d2d;
const SB_NAV = [{
  id: 's-overview',
  icon: '◈',
  label: 'Tableau de bord'
}, {
  id: 's-training',
  icon: '◎',
  label: 'Entraînement'
}, {
  id: 's-exams',
  icon: '◉',
  label: 'Examens blancs'
}, {
  id: 's-stats',
  icon: '◐',
  label: 'Statistiques'
}, {
  id: 's-account',
  icon: '◑',
  label: 'Mon compte'
}];
const SB_THEMES = [{
  name: 'Cadre réglementaire',
  score: 78
}, {
  name: 'Produits financiers',
  score: 65
}, {
  name: 'Marchés financiers',
  score: 72
}, {
  name: 'Analyse financière',
  score: 48
}, {
  name: 'Gestion portefeuille',
  score: 55
}, {
  name: 'Les risques',
  score: 80
}, {
  name: 'Conformité',
  score: 69
}, {
  name: 'Finance durable',
  score: 30
}];
function scoreText(v) {
  if (v >= 75) return 'var(--success)';
  if (v >= 50) return 'var(--warning)';
  return 'var(--danger)';
}
function Sidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-width)',
      background: 'var(--navy)',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 50,
      overflowY: 'auto',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px',
      borderBottom: '1px solid rgba(61,90,120,.25)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cream)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-.02em'
    }
  }, "Cert", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "IM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderBottom: '1px solid rgba(61,90,120,.25)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "A"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream)',
      fontSize: 13,
      fontWeight: 600
    }
  }, "Alexandre Dubois"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--blue-light)',
      fontSize: 11,
      marginTop: 1
    }
  }, "a.dubois@banque.fr"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '10px 0'
    }
  }, SB_NAV.map(item => {
    const on = active === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onNavigate(item.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '9px 22px',
        background: on ? 'rgba(200,184,130,.1)' : 'transparent',
        border: 'none',
        borderLeft: `3px solid ${on ? 'var(--gold)' : 'transparent'}`,
        color: on ? 'var(--gold)' : 'var(--blue-light)',
        fontWeight: on ? 600 : 400,
        fontSize: 13.5,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        textAlign: 'left',
        transition: 'all var(--transition-base)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15
      }
    }, item.icon), " ", item.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(61,90,120,.3)',
      margin: '6px 22px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 20px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--blue-mid)',
      marginBottom: 12
    }
  }, "Progression par th\xE8me"), SB_THEMES.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--blue-light)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: 160
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: scoreText(t.score)
    }
  }, t.score, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: t.score,
    onNavy: true,
    height: 4
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderTop: '1px solid rgba(61,90,120,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--surface-accent)',
      border: '1px solid var(--border-accent)',
      borderRadius: 'var(--radius-md)',
      padding: '9px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gold)',
      color: 'var(--navy)',
      fontSize: 9,
      fontWeight: 800,
      padding: '2px 6px',
      borderRadius: 3,
      letterSpacing: '.04em'
    }
  }, "AMF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream)',
      fontSize: 11,
      fontWeight: 600
    }
  }, "Certification AMF"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold)',
      fontSize: 10
    }
  }, "Abonnement actif")))));
}
window.Sidebar = Sidebar;
window.SB_THEMES = SB_THEMES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandingPage.jsx
try { (() => {
/* CertIM marketing landing — hero, catalogue, arguments, steps, themes, FAQ, CTA. */
const {
  Button,
  Badge,
  Card
} = window.CertIMDesignSystem_2a4d2d;
function HeroGrid() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
      opacity: 0.04
    }
  });
}
function SectionTitle({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginBottom: 8,
      color: dark ? 'var(--cream)' : 'var(--navy)'
    }
  }, children);
}
function SectionSub({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      color: dark ? 'var(--blue-light)' : 'var(--text-muted)',
      fontSize: 15,
      marginBottom: 40
    }
  }, children);
}
const CERTS = [{
  tag: 'AMF',
  name: 'Certification AMF',
  desc: "La certification de référence pour les professionnels des marchés financiers. Obligatoire dans les établissements financiers français.",
  price: '34,99 €',
  active: true
}, {
  tag: 'CFA',
  name: 'CFA Level I',
  desc: 'Bientôt disponible',
  active: false
}, {
  tag: 'MiFID',
  name: 'MiFID II',
  desc: 'Bientôt disponible',
  active: false
}, {
  tag: 'IAS',
  name: 'IAS / IFRS',
  desc: 'Bientôt disponible',
  active: false
}];
const ARGS = [{
  icon: '◈',
  title: 'Base de questions officielle',
  desc: "Accès à l'intégralité des questions de la banque AMF, structurées par thème et sous-thème."
}, {
  icon: '◉',
  title: 'Progression intelligente',
  desc: 'Algorithme de répétition espacée : les questions difficiles reviennent plus souvent.'
}, {
  icon: '◎',
  title: 'Examens blancs réalistes',
  desc: '120 questions, 2h30, conditions réelles — mesurez votre niveau avant le jour J.'
}, {
  icon: '◐',
  title: 'Statistiques avancées',
  desc: 'Progression par thème, streak quotidien, temps moyen, points faibles identifiés.'
}];
const STEPS = [{
  n: '01',
  t: "S'abonner",
  d: 'Choisissez votre certification et souscrivez. Accès immédiat, sans engagement.'
}, {
  n: '02',
  t: "S'entraîner",
  d: 'Entraînements ciblés par thème et examens blancs en conditions réelles.'
}, {
  n: '03',
  t: 'Réussir',
  d: "Présentez-vous à l'examen avec la confiance d'être parfaitement préparé."
}];
const THEMES = ['Cadre institutionnel et réglementaire', "L'offre de produits financiers", 'Les marchés financiers et leur fonctionnement', "L'analyse financière", 'La gestion de portefeuille', 'Les risques', 'La conformité et la déontologie', 'La finance durable'];
const FAQ = [["À qui s'adresse la certification AMF ?", "La certification AMF est obligatoire pour toute personne exerçant une activité de conseil en investissement, de gestion de portefeuille, ou travaillant au contact de clients sur des produits financiers au sein d'établissements financiers régulés."], ["Quel est le format de l'examen officiel ?", "L'examen comprend 120 questions QCM réparties sur 8 thèmes officiels. La durée est de 2h30 et le seuil de réussite est fixé à 75% (90 bonnes réponses minimum)."], ['Sans engagement signifie quoi exactement ?', 'Vous pouvez résilier votre abonnement à tout moment depuis votre espace personnel. La résiliation prend effet à la fin de la période en cours. Aucuns frais supplémentaires.'], ['Est-ce que CertIM utilise les vraies questions de l\'AMF ?', "CertIM utilise la banque de questions officielle de l'AMF, structurée selon les 8 thèmes officiels de l'examen. Toutes les questions sont conformes au référentiel en vigueur."]];
function LandingPage({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--navy)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hero-gradient)',
      padding: '100px 2rem 120px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 800,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: 'rgba(200,184,130,.12)',
      border: '1px solid rgba(200,184,130,.3)',
      color: 'var(--gold)',
      padding: '6px 18px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.06em',
      marginBottom: 28
    }
  }, "CERTIFICATION AMF \xB7 PROFESSIONNELS DES MARCH\xC9S FINANCIERS"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--cream)',
      fontSize: 'clamp(2.4rem,5vw,3.8rem)',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-.03em',
      marginBottom: 22
    }
  }, "Pr\xE9parez et obtenez votre", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "certification financi\xE8re")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-light)',
      fontSize: '1.1rem',
      lineHeight: 1.7,
      maxWidth: 540,
      margin: '0 auto 40px'
    }
  }, "La plateforme d'entra\xEEnement professionnelle pour r\xE9ussir l'examen AMF. Questions officielles, examens blancs, statistiques avanc\xE9es."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onStart
  }, "Commencer maintenant \u2014 34,99 \u20AC/mois"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-mid)',
      fontSize: 13,
      marginTop: 14
    }
  }, "Sans engagement \xB7 R\xE9siliation \xE0 tout moment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      flexWrap: 'wrap',
      marginTop: 64,
      padding: '2rem',
      background: 'var(--navy-fill-1)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--navy-border)'
    }
  }, [['1 000+', 'Questions officielles'], ['8', 'Thèmes AMF couverts'], ['75%', 'Score requis à l\'examen']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold)',
      fontSize: '2rem',
      fontWeight: 800
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--blue-light)',
      fontSize: 13,
      marginTop: 4
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Certifications disponibles"), /*#__PURE__*/React.createElement(SectionSub, null, "Pr\xE9parez la certification de votre secteur. D'autres arrivent."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 20
    }
  }, CERTS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      background: c.active ? 'var(--white)' : 'var(--bg)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      position: 'relative',
      opacity: c.active ? 1 : 0.6
    }
  }, !c.active ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      background: 'var(--border)',
      color: '#888',
      fontSize: 10,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      letterSpacing: '.05em'
    }
  }, "BIENT\xD4T") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '.05em',
      background: c.active ? 'var(--navy)' : 'var(--border)',
      color: c.active ? 'var(--gold)' : '#aaa'
    }
  }, c.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1.5,
      flex: 1
    }
  }, c.desc), c.active ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 20
    }
  }, c.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      fontWeight: 400
    }
  }, "/ mois")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "\u2192",
    onClick: onStart,
    style: {
      justifyContent: 'center'
    }
  }, "Acc\xE9der")) : null))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy)',
      padding: '80px 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    dark: true
  }, "Pourquoi CertIM ?"), /*#__PURE__*/React.createElement(SectionSub, {
    dark: true
  }, "Con\xE7u par des professionnels, pour des professionnels."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 20
    }
  }, ARGS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.title,
    style: {
      background: 'var(--navy-card)',
      border: '1px solid var(--blue-mid)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      color: 'var(--gold)',
      marginBottom: 14
    }
  }, a.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--cream)',
      fontSize: 16,
      marginBottom: 8
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--blue-light)',
      fontSize: 14,
      lineHeight: 1.6
    }
  }, a.desc)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Comment \xE7a fonctionne"), /*#__PURE__*/React.createElement(SectionSub, null, "Trois \xE9tapes, une m\xE9thode."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      padding: '32px 28px',
      borderLeft: i === 0 ? 'none' : '1px dashed var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 800,
      fontSize: '3.5rem',
      color: 'rgba(200,184,130,.15)',
      lineHeight: 1,
      marginBottom: 16,
      letterSpacing: '-.04em'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginBottom: 8
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1.6
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '80px 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Les 8 th\xE8mes officiels de l'examen AMF"), /*#__PURE__*/React.createElement(SectionSub, null, "100% du programme couvert."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 12
    }
  }, THEMES.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 28,
      height: 28,
      background: 'var(--navy)',
      color: 'var(--gold)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 12,
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, t)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Questions fr\xE9quentes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      maxWidth: 760,
      margin: '0 auto'
    }
  }, FAQ.map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 10
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1.7
    }
  }, a))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy)',
      padding: '80px 2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--cream)',
      fontSize: '2.2rem',
      fontWeight: 700,
      letterSpacing: '-.02em',
      marginBottom: 16
    }
  }, "Pr\xEAt \xE0 d\xE9crocher votre certification ?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-light)',
      fontSize: 16,
      marginBottom: 36
    }
  }, "Rejoignez CertIM et commencez \xE0 vous entra\xEEner d\xE8s aujourd'hui."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onStart
  }, "Commencer \u2014 34,99 \u20AC/mois"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-mid)',
      fontSize: 13,
      marginTop: 14
    }
  }, "Sans engagement \xB7 R\xE9siliation \xE0 tout moment")));
}
window.LandingPage = LandingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* CertIM marketing site — sticky nav + footer chrome. */
function SiteNav({
  onStart
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: 'var(--navy)',
      borderBottom: '1px solid var(--navy-card)',
      padding: '0 2rem',
      height: 'var(--navbar-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cream)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-.02em'
    }
  }, "Cert", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "IM")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center'
    }
  }, ['Formations', 'Comment ça marche', 'FAQ'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--blue-light)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, l)), /*#__PURE__*/React.createElement("button", {
    onClick: onStart,
    style: {
      background: 'var(--gold)',
      color: 'var(--navy)',
      padding: '8px 18px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 14,
      fontWeight: 700,
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, "Commencer")));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-deepest)',
      borderTop: '1px solid var(--navy-card)',
      padding: '32px 2rem',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cream)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '-.02em'
    }
  }, "Cert", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "IM")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 16
    }
  }, ['CGU', 'Mentions légales', 'Politique de confidentialité', 'Contact'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--blue-mid)',
      textDecoration: 'none',
      fontSize: 13
    }
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-mid)',
      fontSize: 12,
      marginTop: 20
    }
  }, "\xA9 2026 CertIM. Tous droits r\xE9serv\xE9s."));
}
window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CountSelector = __ds_scope.CountSelector;

__ds_ns.KpiPill = __ds_scope.KpiPill;

__ds_ns.KpiValue = __ds_scope.KpiValue;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.ThemeChip = __ds_scope.ThemeChip;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

})();
