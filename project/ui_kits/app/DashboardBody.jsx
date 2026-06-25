/* CertIM dashboard — main content: overview, exams, training, stats, account. */
const { Card, Button, Badge, ThemeChip, CountSelector, ProgressBar } = window.CertIMDesignSystem_2a4d2d;

const THEMES_FULL = [
  { name: 'Cadre institutionnel et réglementaire', short: 'Cadre réglementaire', score: 78, seen: '109/140' },
  { name: "L'offre de produits financiers", short: 'Produits financiers', score: 65, seen: '104/160' },
  { name: 'Les marchés financiers', short: 'Marchés financiers', score: 72, seen: '86/120' },
  { name: "L'analyse financière", short: 'Analyse financière', score: 48, seen: '46/95' },
  { name: 'La gestion de portefeuille', short: 'Gestion portefeuille', score: 55, seen: '52/95' },
  { name: 'Les risques', short: 'Les risques', score: 80, seen: '64/80' },
  { name: 'La conformité et la déontologie', short: 'Conformité', score: 69, seen: '55/80' },
  { name: 'La finance durable', short: 'Finance durable', score: 30, seen: '9/30' },
];

function scoreCol(v) { return v >= 75 ? 'var(--success)' : v >= 50 ? 'var(--warning)' : 'var(--danger)'; }

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 7 }}>
      <span style={{ width: 3, height: 13, background: 'var(--navy)', borderRadius: 2 }} />
      {children}
    </div>
  );
}

function ThemePicker({ title, subtitle }) {
  const [sel, setSel] = React.useState({});
  const [count, setCount] = React.useState('20');
  const n = Object.values(sel).filter(Boolean).length;
  return (
    <Card title={title} subtitle={subtitle}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 14 }}>
        {THEMES_FULL.map((t, i) => (
          <ThemeChip key={i} num={i + 1} name={t.short} score={t.score}
            selected={!!sel[i]} onToggle={() => setSel(s => ({ ...s, [i]: !s[i] }))} />
        ))}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginBottom: 12 }}>
        {n === 0 ? 'Tous les thèmes · aucune sélection' : n === 1 ? '1 thème sélectionné' : n + ' thèmes sélectionnés'}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 7 }}>Nombre de questions</div>
      <CountSelector value={count} onChange={setCount} style={{ marginBottom: 16 }} />
      <Button variant="secondary" iconRight="→" style={{ width: '100%', background: 'var(--navy)', color: 'var(--gold)', justifyContent: 'center' }}>
        Commencer l'entraînement
      </Button>
    </Card>
  );
}

function LastExamCard() {
  return (
    <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '20px 22px', fontFamily: 'var(--font-sans)' }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--blue-light)', marginBottom: 12 }}>Dernier examen blanc</div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: '2.6rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-.04em', color: 'var(--danger)' }}>68%</div>
          <div style={{ fontSize: 10, fontWeight: 700, marginTop: 3, color: 'var(--danger)' }}>ÉCHOUÉ · Il manque 7 points</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: 'var(--cream)', fontSize: 12, fontWeight: 600 }}>18 juin 2026</div>
          <div style={{ color: 'var(--blue-light)', fontSize: 11, marginTop: 2 }}>2h12 / 2h30</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
        <span style={{ color: 'var(--blue-light)', fontSize: 11 }}>Score</span>
        <span style={{ color: 'var(--blue-light)', fontSize: 11 }}>Seuil 75%</span>
      </div>
      <ProgressBar value={68} onNavy showGoal height={6} color="var(--danger)" />
      <Button variant="outline" iconRight="→" style={{ width: '100%', marginTop: 14, background: 'var(--surface-accent)', border: '1px solid var(--border-accent)', color: 'var(--gold)', fontSize: 12, justifyContent: 'center' }}>
        Relancer un examen blanc
      </Button>
    </div>
  );
}

const WEEK = [
  { d: 'Lun', n: 23, v: 32, k: 'high' }, { d: 'Mar', n: 24, v: 18, k: 'mid' },
  { d: 'Mer', n: 25, v: 8, k: 'low' }, { d: 'Jeu', n: 26, v: 45, k: 'high' },
  { d: 'Ven', n: 27, v: 12, k: 'high', today: true }, { d: 'Sam', n: 28, v: null, k: 'empty' },
  { d: 'Dim', n: 29, v: null, k: 'empty' },
];
const HEAT = {
  low: { background: '#FEF3C7', color: '#92400E' },
  mid: { background: '#FED7AA', color: '#9A3412' },
  high: { background: '#BBF7D0', color: '#166534' },
  empty: { background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--border)' },
};

function CalendarCard() {
  return (
    <Card title="Activité cette semaine" subtitle="23 – 29 juin 2026">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6 }}>
        {WEEK.map((day) => (
          <div key={day.d} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{day.d}</span>
            <div style={{
              width: '100%', aspectRatio: '1', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700, ...HEAT[day.k],
              outline: day.today ? '2px solid var(--navy)' : 'none', outlineOffset: 2,
            }}>{day.v == null ? '—' : day.v}</div>
            <span style={{ fontSize: 10, color: day.today ? 'var(--navy)' : 'var(--text-muted)', fontWeight: day.today ? 700 : 400 }}>{day.n}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
        {[['#FEF3C7', '1–15 q.'], ['#FED7AA', '16–30 q.'], ['#BBF7D0', '30+ q.'], ['var(--bg)', 'Inactif']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-muted)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: c, border: '1px solid var(--border)' }} />{l}
          </div>
        ))}
      </div>
    </Card>
  );
}

const EXAM_HISTORY = [
  { name: 'Examen blanc #3', date: '18 juin 2026', dur: '2h12', score: 68 },
  { name: 'Examen blanc #2', date: '11 juin 2026', dur: '2h24', score: 74 },
  { name: 'Examen blanc #1', date: '4 juin 2026', dur: '1h58', score: 61 },
];

function ExamsSection() {
  return (
    <Card title="Simulez l'examen officiel" subtitle="120 questions · 2h30 · Timer · Correction à la fin · Seuil 75%">
      <Button variant="secondary" iconRight="→" style={{ background: 'var(--navy)', color: 'var(--gold)', marginBottom: 24 }}>Lancer un examen blanc</Button>
      <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 10 }}>Historique</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {EXAM_HISTORY.map((e) => (
          <div key={e.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '13px 16px', gap: 14, flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{e.name}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{e.date}</div>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{e.dur}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: scoreCol(e.score) }}>{e.score}%</span>
              <Badge variant="fail">Échoué</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function StatsSection() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, alignItems: 'start' }}>
      <Card title="Progression par thème" subtitle="Niveau de maîtrise sur la banque complète.">
        {THEMES_FULL.map((t) => (
          <div key={t.name} style={{ marginBottom: 13 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{t.name}</span>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{t.seen}</span>
                <span style={{ fontSize: 12, fontWeight: 700, minWidth: 32, textAlign: 'right', color: scoreCol(t.score) }}>{t.score}%</span>
              </div>
            </div>
            <ProgressBar value={t.score} />
          </div>
        ))}
        <div style={{ display: 'flex', gap: 12, paddingTop: 14, borderTop: '1px solid var(--border)', marginTop: 4, flexWrap: 'wrap' }}>
          {[['var(--success)', 'Maîtrisé ≥75%'], ['var(--warning)', 'En cours 50–74%'], ['var(--danger)', 'À travailler <50%']].map(([c, l]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--text-muted)' }}>
              <span style={{ width: 9, height: 9, borderRadius: 2, background: c }} />{l}
            </div>
          ))}
        </div>
      </Card>
      <Card title="Statistiques rapides" subtitle="Résumé de votre activité.">
        {[
          ['Questions répondues', '347 / ~600', null],
          ['Score moyen', '71%', 'var(--warning)'],
          ['Temps moyen / question', '38 sec', null],
          ['Questions maîtrisées', '124', 'var(--success)'],
          ['Questions à revoir', '87', 'var(--danger)'],
          ['Meilleur score examen', '74%', 'var(--warning)'],
          ['Streak actuel', '🔥 7 jours', null],
          ['Record de streak', '12 jours', null],
        ].map(([l, v, c], i, arr) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 0', borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--border)' }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{l}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: c || 'var(--navy)' }}>{v}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

function AccountSection() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, alignItems: 'start' }}>
      <Card title="Informations personnelles">
        <div style={{ marginTop: 12 }}>
          {[['Nom', 'Alexandre Dubois'], ['Email', 'a.dubois@banque.fr'], ['Membre depuis', 'Mai 2026']].map(([l, v]) => (
            <div key={l} style={{ display: 'flex', gap: 12, marginBottom: 9 }}>
              <span style={{ width: 90, color: 'var(--text-muted)', fontSize: 13, flexShrink: 0 }}>{l}</span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Abonnement">
        <div style={{ marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Certification AMF — 34,99 €/mois</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}>Renouvellement le 24 juillet 2026</div>
            </div>
            <Badge variant="active">Actif</Badge>
          </div>
          <div style={{ paddingTop: 14, borderTop: '1px solid var(--border)', marginTop: 14 }}>
            <button style={{ background: 'transparent', color: 'var(--danger)', border: '1px solid var(--danger)', borderRadius: 'var(--radius-sm)', padding: '7px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
              Résilier l'abonnement
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function DashboardBody() {
  return (
    <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 22, fontFamily: 'var(--font-sans)' }}>
      <div id="s-overview" style={{ scrollMarginTop: 20 }}>
        <SectionLabel>Tableau de bord</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, alignItems: 'start' }}>
          <ThemePicker title="Lancer un entraînement" subtitle="Sélectionnez un ou plusieurs thèmes ci-dessous." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <LastExamCard />
            <CalendarCard />
          </div>
        </div>
      </div>

      <div id="s-exams" style={{ scrollMarginTop: 20 }}>
        <SectionLabel>Examens blancs</SectionLabel>
        <ExamsSection />
      </div>

      <div id="s-training" style={{ scrollMarginTop: 20 }}>
        <SectionLabel>Entraînement</SectionLabel>
        <ThemePicker title="Session d'entraînement" subtitle="Choisissez vos thèmes et le nombre de questions." />
      </div>

      <div id="s-stats" style={{ scrollMarginTop: 20 }}>
        <SectionLabel>Statistiques</SectionLabel>
        <StatsSection />
      </div>

      <div id="s-account" style={{ scrollMarginTop: 20 }}>
        <SectionLabel>Mon compte</SectionLabel>
        <AccountSection />
      </div>
    </div>
  );
}

window.DashboardBody = DashboardBody;
