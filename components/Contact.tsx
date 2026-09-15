import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal>
          <p className="section__label">Contact</p>
          <h2 className="section__title">같이 이야기해요</h2>
          <p className="section__lede">
            협업·프로젝트·AI 실험 이야기 환영해요. GitHub로 편하게 연락 주세요.
          </p>
        </Reveal>
        <Reveal className="contact__panel" delayMs={80}>
          <div className="contact__links">
            <a
              className="btn btn--primary"
              href="https://github.com/ddori00"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ddori00
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
