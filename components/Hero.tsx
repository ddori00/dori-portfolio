"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const atmosphereRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const atmosphere = atmosphereRef.current;
    const content = contentRef.current;
    if (!section || !atmosphere || !content) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    let scrollY = 0;
    let pointerX = 0;
    let pointerY = 0;

    const apply = () => {
      const parallaxY = scrollY * 0.22;
      const tiltX = pointerX * 18;
      const tiltY = pointerY * 12;
      atmosphere.style.transform = `translate3d(${tiltX}px, ${parallaxY + tiltY}px, 0)`;
      content.style.transform = `translate3d(${tiltX * -0.35}px, ${parallaxY * 0.45}px, 0)`;
      frame = 0;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onScroll = () => {
      scrollY = Math.min(window.scrollY, window.innerHeight);
      schedule();
    };

    const onPointer = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
      schedule();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <section className="hero" id="top" aria-label="Intro" ref={sectionRef}>
      <div className="hero__atmosphere" aria-hidden="true" ref={atmosphereRef}>
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__blob hero__blob--c" />
        <span className="hero__spark hero__spark--a" />
        <span className="hero__spark hero__spark--b" />
        <span className="hero__spark hero__spark--c" />
      </div>
      <div className="wrap hero__content" ref={contentRef}>
        <p className="hero__brand">Dori</p>
        <h1 className="hero__headline">Frontend에서 AI로, 만드는 일을 이어가요.</h1>
        <p className="hero__lede">
          운영형 웹 화면을 만들고, 챗봇·OCR·비전까지 제품에 붙이는 일을 하고
          있어요. AI는 속도를, 검증은 제가 책임집니다.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#works">
            Works 보기
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <a className="hero__scroll" href="#path" aria-label="Path 섹션으로 이동">
        <span>scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
