/* CertIM app — fixed left sidebar (260px). Logo, user, nav, per-theme progress, cert pill. */
const { Avatar, ProgressBar } = window.CertIMDesignSystem_2a4d2d;

const SB_NAV = [
  { id: 's-overview', icon: '◈', label: 'Tableau de bord' },
  { id: 's-training', icon: '◎', label: 'Entraînement' },
  { id: 's-exams', icon: '◉', label: 'Examens blancs' },
  { id: 's-stats', icon: '◐', label: 'Statistiques' },
  { id: 's-account', icon: '◑', label: 'Mon compte' },
];

const SB_THEMES = [
  { name: 'Cadre réglementaire', score: 78 },
  { name: 'Produits financiers', score: 65 },
  { name: 'Marchés financiers', score: 72 },
  { name: 'Analyse financière', score: 48 },
  { name: 'Gestion portefeuille', score: 55 },
  { name: 'Les risques', score: 80 },
  { name: 'Conformité', score: 69 },
  { name: 'Finance durable', score: 30 },
];

function scoreText(v) {
  if (v >= 75) return 'var(--success)';
  if (v >= 50) return 'var(--warning)';
  return 'var(--danger)';
}

function Sidebar({ active, onNavigate }) {
  return (
    <aside style={{
      width: 'var(--sidebar-width)', background: 'var(--navy)',
      display: 'flex', flexDirection: 'column',
      position: 'fixed', top: 0, bottom: 0, left: 0, zIndex: 50,
      overflowY: 'auto', fontFamily: 'var(--font-sans)',
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 22px', borderBottom: '1px solid rgba(61,90,120,.25)' }}>
        <span style={{ color: 'var(--cream)', fontWeight: 800, fontSize: 20, letterSpacing: '-.02em' }}>
          Cert<span style={{ color: 'var(--gold)' }}>IM</span>
        </span>
      </div>

      {/* User */}
      <div style={{ padding: '16px 22px', borderBottom: '1px solid rgba(61,90,120,.25)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar initials="A" />
        <div style={{ minWidth: 0 }}>
          <div style={{ color: 'var(--cream)', fontSize: 13, fontWeight: 600 }}>Alexandre Dubois</div>
          <div style={{ color: 'var(--blue-light)', fontSize: 11, marginTop: 1 }}>a.dubois@banque.fr</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '10px 0' }}>
        {SB_NAV.map((item) => {
          const on = active === item.id;
          return (
            <button key={item.id} onClick={() => onNavigate(item.id)} style={{
              display: 'flex', alignItems: 'center', gap: 10, width: '100%',
              padding: '9px 22px', background: on ? 'rgba(200,184,130,.1)' : 'transparent',
              border: 'none', borderLeft: `3px solid ${on ? 'var(--gold)' : 'transparent'}`,
              color: on ? 'var(--gold)' : 'var(--blue-light)', fontWeight: on ? 600 : 400,
              fontSize: 13.5, cursor: 'pointer', fontFamily: 'var(--font-sans)',
              textAlign: 'left', transition: 'all var(--transition-base)',
            }}>
              <span style={{ fontSize: 15 }}>{item.icon}</span> {item.label}
            </button>
          );
        })}
      </nav>

      <div style={{ height: 1, background: 'rgba(61,90,120,.3)', margin: '6px 22px' }} />

      {/* Per-theme progress */}
      <div style={{ padding: '14px 22px 20px', flex: 1 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue-mid)', marginBottom: 12 }}>
          Progression par thème
        </div>
        {SB_THEMES.map((t) => (
          <div key={t.name} style={{ marginBottom: 9 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 11, color: 'var(--blue-light)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 160 }}>{t.name}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: scoreText(t.score) }}>{t.score}%</span>
            </div>
            <ProgressBar value={t.score} onNavy height={4} />
          </div>
        ))}
      </div>

      {/* Cert pill */}
      <div style={{ padding: '14px 22px', borderTop: '1px solid rgba(61,90,120,.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'var(--surface-accent)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-md)', padding: '9px 12px' }}>
          <span style={{ background: 'var(--gold)', color: 'var(--navy)', fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 3, letterSpacing: '.04em' }}>AMF</span>
          <div>
            <div style={{ color: 'var(--cream)', fontSize: 11, fontWeight: 600 }}>Certification AMF</div>
            <div style={{ color: 'var(--gold)', fontSize: 10 }}>Abonnement actif</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
window.SB_THEMES = SB_THEMES;
