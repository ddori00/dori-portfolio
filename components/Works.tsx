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
    meta: "Next.js · TypeScript · FSD",
    title: "꿈이음 교육·진로 포털",
    desc: "군산 청소년·진로 지원 플랫폼의 사용자웹·관리자웹을 프론트 전담으로 구축. 운영형 목록·권한 UI·신청 여정까지 반복적으로 다듬었습니다.",
  },
  {
    meta: "Next.js · Admin · Excel",
    title: "김제 상·하수도 업무 시스템",
    desc: "행정 업무용 Admin 화면을 맡아 대시보드·등록·납부내역·엑셀 등 현장 운영 흐름에 맞춘 UI와 상태를 정리했습니다.",
  },
];

const aiWorks: Work[] = [
  {
    meta: "LLM · Chat UI · RAG",
    title: "AI 꿈지기 챗봇",
    desc: "교육·지원 안내용 챗봇 UI를 만들고, 백엔드 챗 API와 연동해 추천 질문·스트리밍·마크다운 응답까지 화면에서 완성했습니다.",
  },
  {
    meta: "OCR · Document AI",
    title: "PaddleOCR 문서 인식",
    desc: "정형 서류·표 중심 OCR 파이프라인을 실험하며, 인식 품질·속도·후처리 커스터마이징을 실무 관점으로 정리했습니다.",
  },
  {
    meta: "Vision · YOLO · VLM",
    title: "강아지 행동 분석",
    desc: "탐지·개체 추적 위에 짧은 클립만 VLM으로 판정하는 파이프라인을 설계해, 스트레스·피부·관절 등 행동 클립을 UI로 이어가는 방향을 잡았습니다.",
  },
  {
    meta: "RAG · On-prem LLM",
    title: "예술인 경력 챗봇 설계",
    desc: "공개 FAQ와 로그인 후 조회를 분리한 RAG·도구호출 구조를 설계하고, 상용 배포에 맞는 오픈 웨이트 모델 후보를 비교·정리했습니다.",
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
            공공·업무용 프론트엔드와, 그 위에 붙인 AI 실험·설계를 모아 두었어요.
            민감 정보와 내부 연동 디테일은 빼고 공개용으로만 정리했습니다.
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
