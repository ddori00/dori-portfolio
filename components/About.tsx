"use client";

import { Reveal } from "./Reveal";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "CSS",
  "LLM APIs",
  "Prompting",
  "OCR / Vision",
  "Vercel",
];

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal>
          <p className="section__label">About</p>
          <h2 className="section__title">관심 있는 것들</h2>
          <p className="section__lede">
            예쁜 화면과 똑똑한 기능을 한 제품 안에서 붙이는 일을 좋아합니다.
            잔망스러운 핑크 톤처럼, 가볍지만 기억에 남는 경험을 목표로 해요.
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
