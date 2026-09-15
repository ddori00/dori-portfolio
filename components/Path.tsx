import { Reveal } from "./Reveal";

export function Path() {
  return (
    <section className="section" id="path">
      <div className="wrap">
        <Reveal>
          <p className="section__label">Path</p>
          <h2 className="section__title">화면에서 지능으로</h2>
          <p className="section__lede">
            공공·업무 웹의 프론트를 전담하며 운영 UX를 쌓고, 지금은 그 화면 위에
            AI를 얹는 쪽으로 영역을 넓히고 있어요.
          </p>
        </Reveal>

        <div className="path__track">
          <Reveal className="path__step" delayMs={80}>
            <h3>Frontend</h3>
            <hr className="path__divider" />
            <p>
              Next.js·TypeScript·FSD로 사용자/관리자 웹을 전담. 목록·검색·페이징·
              권한 UI처럼 현장에서 매일 쓰는 화면을 읽기 쉽게 만들었습니다.
            </p>
          </Reveal>
          <span className="path__arrow path__arrow--pulse" aria-hidden="true">
            →
          </span>
          <Reveal className="path__step" delayMs={180}>
            <h3>AI</h3>
            <hr className="path__divider" />
            <p>
              챗봇 UI·RAG 설계, 문서 OCR, 비전 파이프라인까지. 모델과 화면이
              만나는 지점을 설계하고 직접 검증합니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
