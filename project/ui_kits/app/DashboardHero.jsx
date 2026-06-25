/* CertIM dashboard — compact navy hero with greeting + KPI pills + CTAs. */
const { KpiPill, KpiValue, ProgressBar, Button } = window.CertIMDesignSystem_2a4d2d;

function DashboardHero({ onNavigate }) {
  return (
    <div style={{
      background: 'var(--hero-gradient)', padding: '22px 32px',
      position: 'relative', overflow: 'hidden', flexShrink: 0, fontFamily: 'var(--font-sans)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)',
        backgroundSize: '50px 50px', opacity: 0.03,
      }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <div>
          <div style={{ color: 'var(--cream)', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-.02em' }}>Bonjour, Alexandre 👋</div>
          <div style={{ color: 'var(--blue-light)', fontSize: 12, marginTop: 3 }}>Certification AMF · Progression en cours</div>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <KpiPill label="Jours consécutifs">
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>🔥</span>
              <KpiValue tone="cream" style={{ fontSize: '1.6rem' }}>7</KpiValue>
            </div>
            <div style={{ fontSize: 11, color: 'var(--blue-light)', marginTop: 5 }}>Série active · Record : 12 j.</div>
          </KpiPill>

          <KpiPill label="Score de maîtrise" minWidth={160}>
            <KpiValue tone="gold">62%</KpiValue>
            <ProgressBar value={62} onNavy showGoal height={5} style={{ marginTop: 7 }} />
            <div style={{ fontSize: 11, color: 'var(--gold-dark)', marginTop: 6 }}>Objectif 75% · −13 pts</div>
          </KpiPill>

          <KpiPill label="Questions répondues">
            <KpiValue tone="cream">347</KpiValue>
            <div style={{ fontSize: 11, color: 'var(--blue-light)', marginTop: 5 }}>sur ~600 · Moy. <strong style={{ color: 'var(--gold)' }}>71%</strong></div>
          </KpiPill>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button variant="primary" iconLeft="▶" onClick={() => onNavigate('s-training')}>S'entraîner</Button>
          <Button variant="outline" onClick={() => onNavigate('s-exams')}>Examen blanc</Button>
        </div>
      </div>
    </div>
  );
}

window.DashboardHero = DashboardHero;
