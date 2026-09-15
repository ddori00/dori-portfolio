import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Path } from "@/components/Path";
import { SiteHeader } from "@/components/SiteHeader";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <div className="site">
      <SiteHeader />
      <main>
        <Hero />
        <Path />
        <Works />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          © {new Date().getFullYear()} <strong>Dori</strong> — Frontend → AI
        </div>
      </footer>
    </div>
  );
}
