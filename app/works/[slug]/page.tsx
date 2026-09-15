import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getAllProjectSlugs,
  getProject,
} from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Works — Dori" };
  return {
    title: `${project.title} — Dori`,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const groupLabel = project.group === "frontend" ? "Frontend" : "AI";

  return (
    <div className="site">
      <SiteHeader />
      <main className="project">
        <div className="wrap project__inner">
          <Link href="/#works" className="project__back">
            ← Works로 돌아가기
          </Link>

          <p className="section__label">{groupLabel}</p>
          <p className="project__meta">{project.meta}</p>
          <h1 className="project__title">{project.title}</h1>
          <p className="project__summary">{project.summary}</p>

          <section className="project__block">
            <h2>역할</h2>
            <p>{project.role}</p>
          </section>

          <section className="project__block">
            <h2>스택</h2>
            <ul className="project__stack">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="project__block">
            <h2>한 일</h2>
            <ul className="project__list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="project__block">
            <h2>성과</h2>
            <ul className="project__list">
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="project__cta">
            <Link href="/#works" className="btn btn--ghost">
              다른 프로젝트 보기
            </Link>
            <Link href="/#contact" className="btn btn--primary">
              Contact
            </Link>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="wrap">
          © {new Date().getFullYear()} <strong>Dori</strong> — Frontend → AI
        </div>
      </footer>
    </div>
  );
}
