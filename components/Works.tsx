"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

type Work = {
  meta: string;
  title: string;
  desc: string;
};

const frontendWorks: Work[] = [
  {
    meta: "Web · React",
    title: "Product UI polish",
    desc: "랜딩·대시보드 화면을 반응형으로 구성하고, 마이크로 인터랙션으로 흐름을 다듬은 프론트 작업.",
  },
  {
    meta: "Web · Next.js",
    title: "Component systems",
    desc: "재사용 가능한 컴포넌트와 타이포·컬러 토큰으로 일관된 UI 언어를 맞춘 프로젝트.",
  },
];

const aiWorks: Work[] = [
  {
    meta: "AI · LLM",
    title: "Chat & agent flows",
    desc: "프롬프트 설계와 툴 호출 흐름을 묶어, 실제 쓸 수 있는 AI 기능으로 정리한 실험.",
  },
  {
    meta: "AI · Vision",
    title: "OCR / multimodal scan",
    desc: "문서·이미지 인식 파이프라인을 붙여 결과 화면까지 연결한 AI 사이드 프로젝트.",
  },
];

function WorkList({ items, startDelay = 0 }: { items: Work[]; startDelay?: number }) {
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
        <li key={work.title} className="work-item">
          <span className="work-item__meta">{work.meta}</span>
          <h4 className="work-item__title">{work.title}</h4>
          <p className="work-item__desc">{work.desc}</p>
        </li>
      ))}
    </ul>
  );
}

export function Works() {
  return (
    <section className="section" id="works">
      <div className="wrap">
        <Reveal>
          <p className="section__label">Works</p>
          <h2 className="section__title">해온 일과 하고 있는 일</h2>
          <p className="section__lede">
            프론트엔드 작업과 AI 실험을 나란히 모아 두었어요. 제목·설명은 나중에
            실제 프로젝트로 바꿔 넣으면 됩니다.
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
