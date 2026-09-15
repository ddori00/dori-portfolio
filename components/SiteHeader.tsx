export function SiteHeader() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="#top" className="header__brand">
          Dori
        </a>
        <nav className="header__nav" aria-label="Primary">
          <a href="#path">Path</a>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
