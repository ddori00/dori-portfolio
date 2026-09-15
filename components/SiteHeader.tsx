import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link href="/" className="header__brand">
          Dori
        </Link>
        <nav className="header__nav" aria-label="Primary">
          <Link href="/#path">Path</Link>
          <Link href="/#works">Works</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
