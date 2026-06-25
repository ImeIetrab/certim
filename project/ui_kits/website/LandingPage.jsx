/* CertIM marketing landing — hero, catalogue, arguments, steps, themes, FAQ, CTA. */
const { Button, Badge, Card } = window.CertIMDesignSystem_2a4d2d;

function HeroGrid() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)',
      backgroundSize: '60px 60px', opacity: 0.04,
    }} />
  );
}

function SectionTitle({ children, dark }) {
  return <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: 8, color: dark ? 'var(--cream)' : 'var(--navy)' }}>{children}</h2>;
}
function SectionSub({ children, dark }) {
  return <p style={{ color: dark ? 'var(--blue-light)' : 'var(--text-muted)', fontSize: 15, marginBottom: 40 }}>{children}</p>;
}

const CERTS = [
  { tag: 'AMF', name: 'Certification AMF', desc: "La certification de référence pour les professionnels des marchés financiers. Obligatoire dans les établissements financiers français.", price: '34,99 €', active: true },
  { tag: 'CFA', name: 'CFA Level I', desc: 'Bientôt disponible', active: false },
  { tag: 'MiFID', name: 'MiFID II', desc: 'Bientôt disponible', active: false },
  { tag: 'IAS', name: 'IAS / IFRS', desc: 'Bientôt disponible', active: false },
];

const ARGS = [
  { icon: '◈', title: 'Base de questions officielle', desc: "Accès à l'intégralité des questions de la banque AMF, structurées par thème et sous-thème." },
  { icon: '◉', title: 'Progression intelligente', desc: 'Algorithme de répétition espacée : les questions difficiles reviennent plus souvent.' },
  { icon: '◎', title: 'Examens blancs réalistes', desc: '120 questions, 2h30, conditions réelles — mesurez votre niveau avant le jour J.' },
  { icon: '◐', title: 'Statistiques avancées', desc: 'Progression par thème, streak quotidien, temps moyen, points faibles identifiés.' },
];

const STEPS = [
  { n: '01', t: "S'abonner", d: 'Choisissez votre certification et souscrivez. Accès immédiat, sans engagement.' },
  { n: '02', t: "S'entraîner", d: 'Entraînements ciblés par thème et examens blancs en conditions réelles.' },
  { n: '03', t: 'Réussir', d: "Présentez-vous à l'examen avec la confiance d'être parfaitement préparé." },
];

const THEMES = [
  'Cadre institutionnel et réglementaire', "L'offre de produits financiers",
  'Les marchés financiers et leur fonctionnement', "L'analyse financière",
  'La gestion de portefeuille', 'Les risques',
  'La conformité et la déontologie', 'La finance durable',
];

const FAQ = [
  ["À qui s'adresse la certification AMF ?", "La certification AMF est obligatoire pour toute personne exerçant une activité de conseil en investissement, de gestion de portefeuille, ou travaillant au contact de clients sur des produits financiers au sein d'établissements financiers régulés."],
  ["Quel est le format de l'examen officiel ?", "L'examen comprend 120 questions QCM réparties sur 8 thèmes officiels. La durée est de 2h30 et le seuil de réussite est fixé à 75% (90 bonnes réponses minimum)."],
  ['Sans engagement signifie quoi exactement ?', 'Vous pouvez résilier votre abonnement à tout moment depuis votre espace personnel. La résiliation prend effet à la fin de la période en cours. Aucuns frais supplémentaires.'],
  ['Est-ce que CertIM utilise les vraies questions de l\'AMF ?', "CertIM utilise la banque de questions officielle de l'AMF, structurée selon les 8 thèmes officiels de l'examen. Toutes les questions sont conformes au référentiel en vigueur."],
];

function LandingPage({ onStart }) {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--navy)' }}>
      {/* HERO */}
      <section style={{ background: 'var(--hero-gradient)', padding: '100px 2rem 120px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <HeroGrid />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          <span style={{ display: 'inline-block', background: 'rgba(200,184,130,.12)', border: '1px solid rgba(200,184,130,.3)', color: 'var(--gold)', padding: '6px 18px', borderRadius: 'var(--radius-pill)', fontSize: 12, fontWeight: 600, letterSpacing: '.06em', marginBottom: 28 }}>
            CERTIFICATION AMF · PROFESSIONNELS DES MARCHÉS FINANCIERS
          </span>
          <h1 style={{ color: 'var(--cream)', fontSize: 'clamp(2.4rem,5vw,3.8rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.03em', marginBottom: 22 }}>
            Préparez et obtenez votre<br /><span style={{ color: 'var(--gold)' }}>certification financière</span>
          </h1>
          <p style={{ color: 'var(--blue-light)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 540, margin: '0 auto 40px' }}>
            La plateforme d'entraînement professionnelle pour réussir l'examen AMF. Questions officielles, examens blancs, statistiques avancées.
          </p>
          <Button variant="primary" size="lg" onClick={onStart}>Commencer maintenant — 34,99 €/mois</Button>
          <p style={{ color: 'var(--blue-mid)', fontSize: 13, marginTop: 14 }}>Sans engagement · Résiliation à tout moment</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: 64, padding: '2rem', background: 'var(--navy-fill-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--navy-border)' }}>
            {[['1 000+', 'Questions officielles'], ['8', 'Thèmes AMF couverts'], ['75%', 'Score requis à l\'examen']].map(([v, l]) => (
              <div key={l}>
                <div style={{ color: 'var(--gold)', fontSize: '2rem', fontWeight: 800 }}>{v}</div>
                <div style={{ color: 'var(--blue-light)', fontSize: 13, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section style={{ padding: '80px 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionTitle>Certifications disponibles</SectionTitle>
          <SectionSub>Préparez la certification de votre secteur. D'autres arrivent.</SectionSub>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {CERTS.map((c) => (
              <div key={c.name} style={{
                background: c.active ? 'var(--white)' : 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12,
                position: 'relative', opacity: c.active ? 1 : 0.6,
              }}>
                {!c.active ? <span style={{ position: 'absolute', top: 16, right: 16, background: 'var(--border)', color: '#888', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', letterSpacing: '.05em' }}>BIENTÔT</span> : null}
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 11, letterSpacing: '.05em', background: c.active ? 'var(--navy)' : 'var(--border)', color: c.active ? 'var(--gold)' : '#aaa' }}>{c.tag}</div>
                <div style={{ fontWeight: 700, fontSize: 17 }}>{c.name}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.5, flex: 1 }}>{c.desc}</div>
                {c.active ? (
                  <React.Fragment>
                    <div style={{ fontWeight: 700, fontSize: 20 }}>{c.price} <span style={{ color: 'var(--text-muted)', fontSize: 14, fontWeight: 400 }}>/ mois</span></div>
                    <Button variant="secondary" iconRight="→" onClick={onStart} style={{ justifyContent: 'center' }}>Accéder</Button>
                  </React.Fragment>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI (dark) */}
      <section style={{ background: 'var(--navy)', padding: '80px 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionTitle dark>Pourquoi CertIM ?</SectionTitle>
          <SectionSub dark>Conçu par des professionnels, pour des professionnels.</SectionSub>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {ARGS.map((a) => (
              <div key={a.title} style={{ background: 'var(--navy-card)', border: '1px solid var(--blue-mid)', borderRadius: 'var(--radius-lg)', padding: '28px 24px' }}>
                <div style={{ fontSize: 24, color: 'var(--gold)', marginBottom: 14 }}>{a.icon}</div>
                <div style={{ fontWeight: 600, color: 'var(--cream)', fontSize: 16, marginBottom: 8 }}>{a.title}</div>
                <div style={{ color: 'var(--blue-light)', fontSize: 14, lineHeight: 1.6 }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT */}
      <section style={{ padding: '80px 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionTitle>Comment ça fonctionne</SectionTitle>
          <SectionSub>Trois étapes, une méthode.</SectionSub>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ padding: '32px 28px', borderLeft: i === 0 ? 'none' : '1px dashed var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '3.5rem', color: 'rgba(200,184,130,.15)', lineHeight: 1, marginBottom: 16, letterSpacing: '-.04em' }}>{s.n}</div>
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{s.t}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEMES (cream) */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionTitle>Les 8 thèmes officiels de l'examen AMF</SectionTitle>
          <SectionSub>100% du programme couvert.</SectionSub>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
            {THEMES.map((t, i) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '14px 18px' }}>
                <div style={{ minWidth: 28, height: 28, background: 'var(--navy)', color: 'var(--gold)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto 40px', textAlign: 'center' }}>
          <SectionTitle>Questions fréquentes</SectionTitle>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 760, margin: '0 auto' }}>
          {FAQ.map(([q, a]) => (
            <div key={q} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '22px 24px' }}>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 10 }}>{q}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: 'var(--navy)', padding: '80px 2rem', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--cream)', fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: 16 }}>Prêt à décrocher votre certification ?</h2>
        <p style={{ color: 'var(--blue-light)', fontSize: 16, marginBottom: 36 }}>Rejoignez CertIM et commencez à vous entraîner dès aujourd'hui.</p>
        <Button variant="primary" size="lg" onClick={onStart}>Commencer — 34,99 €/mois</Button>
        <p style={{ color: 'var(--blue-mid)', fontSize: 13, marginTop: 14 }}>Sans engagement · Résiliation à tout moment</p>
      </section>
    </div>
  );
}

window.LandingPage = LandingPage;
