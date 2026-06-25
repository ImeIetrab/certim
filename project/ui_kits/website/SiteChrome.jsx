/* CertIM marketing site — sticky nav + footer chrome. */
function SiteNav({ onStart }) {
  return (
    <nav style={{
      background: 'var(--navy)', borderBottom: '1px solid var(--navy-card)',
      padding: '0 2rem', height: 'var(--navbar-height)', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, fontFamily: 'var(--font-sans)',
    }}>
      <span style={{ color: 'var(--cream)', fontWeight: 800, fontSize: 20, letterSpacing: '-.02em' }}>
        Cert<span style={{ color: 'var(--gold)' }}>IM</span>
      </span>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['Formations', 'Comment ça marche', 'FAQ'].map((l) => (
          <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--blue-light)', textDecoration: 'none', fontSize: 14 }}>{l}</a>
        ))}
        <button onClick={onStart} style={{
          background: 'var(--gold)', color: 'var(--navy)', padding: '8px 18px',
          borderRadius: 'var(--radius-sm)', fontSize: 14, fontWeight: 700, border: 'none',
          cursor: 'pointer', fontFamily: 'var(--font-sans)',
        }}>Commencer</button>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer style={{ background: 'var(--navy-deepest)', borderTop: '1px solid var(--navy-card)', padding: '32px 2rem', textAlign: 'center', fontFamily: 'var(--font-sans)' }}>
      <span style={{ color: 'var(--cream)', fontWeight: 800, fontSize: 20, letterSpacing: '-.02em' }}>
        Cert<span style={{ color: 'var(--gold)' }}>IM</span>
      </span>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
        {['CGU', 'Mentions légales', 'Politique de confidentialité', 'Contact'].map((l) => (
          <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--blue-mid)', textDecoration: 'none', fontSize: 13 }}>{l}</a>
        ))}
      </div>
      <p style={{ color: 'var(--blue-mid)', fontSize: 12, marginTop: 20 }}>© 2026 CertIM. Tous droits réservés.</p>
    </footer>
  );
}

window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
