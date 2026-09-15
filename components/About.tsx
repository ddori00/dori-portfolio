"use client";

import { Reveal } from "./Reveal";

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "FSD",
  "Tailwind",
  "REST API",
  "Chat UI",
  "RAG",
  "OCR",
  "Vision",
  "Cursor",
];

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal>
          <p className="section__label">About</p>
          <h2 className="section__title">관심 있는 것들</h2>
          <p className="section__lede">
            운영·관제형 화면을 읽히게 만드는 일과, AI를 화면에 안전하게 붙이는
            일을 좋아합니다. 초안은 빠르게, 타입·빌드·동작은 직접 확인해요.
          </p>
        </Reveal>
        <ul className="about__stack">
          {stack.map((item, index) => (
            <Reveal
              key={item}
              as="li"
              className="about__chip"
              delayMs={60 + index * 55}
            >
              {item}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
