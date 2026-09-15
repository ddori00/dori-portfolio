"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { getProjectsByGroup, type Project } from "@/lib/projects";

function WorkList({
  items,
  startDelay = 0,
}: {
  items: Project[];
  startDelay?: number;
}) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const itemsNodes = Array.from(root.querySelectorAll<HTMLElement>(".work-item"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    itemsNodes.forEach((node, i) => {
      node.style.transitionDelay = `${startDelay + i * 90}ms`;
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [startDelay]);

  return (
    <ul className="works__list" ref={listRef}>
      {items.map((work) => (
        <li key={work.slug}>
          <Link href={`/works/${work.slug}`} className="work-item">
            <span className="work-item__meta">{work.meta}</span>
            <h4 className="work-item__title">{work.title}</h4>
            <p className="work-item__desc">{work.summary}</p>
            <span className="work-item__more">자세히 보기</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Works() {
  const frontendWorks = getProjectsByGroup("frontend");
  const aiWorks = getProjectsByGroup("ai");

  return (
    <section className="section" id="works">
      <div className="wrap">
        <Reveal>
          <p className="section__label">Works</p>
          <h2 className="section__title">해온 일과 하고 있는 일</h2>
          <p className="section__lede">
            항목을 누르면 공개용으로 정리한 프로젝트 상세로 이동해요. 민감
            정보와 내부 연동 디테일은 빼 두었습니다.
          </p>
        </Reveal>

        <div className="works__groups">
          <div>
            <h3 className="works__group-title">Frontend</h3>
            <WorkList items={frontendWorks} />
          </div>
          <div>
            <h3 className="works__group-title">AI</h3>
            <WorkList items={aiWorks} startDelay={80} />
          </div>
        </div>
      </div>
    </section>
  );
}
