import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal>
          <p className="section__label">Contact</p>
          <h2 className="section__title">같이 이야기해요</h2>
          <p className="section__lede">
            협업, 프로젝트, AI 실험 — 편하게 연락 주세요. 메일 주소는 본인
            것으로 바꿔 넣으면 됩니다.
          </p>
        </Reveal>
        <Reveal className="contact__panel" delayMs={80}>
          <div className="contact__links">
            <a className="btn btn--primary" href="mailto:hello@dori.dev">
              hello@dori.dev
            </a>
            <a
              className="btn btn--ghost"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
