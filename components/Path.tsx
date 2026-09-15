import { Reveal } from "./Reveal";

export function Path() {
  return (
    <section className="section" id="path">
      <div className="wrap">
        <Reveal>
          <p className="section__label">Path</p>
          <h2 className="section__title">화면에서 지능으로</h2>
          <p className="section__lede">
            프론트엔드로 사용자 경험을 쌓고, 지금은 AI로 그 경험을 한 단계 더
            깊게 만들고 있어요.
          </p>
        </Reveal>

        <div className="path__track">
          <Reveal className="path__step" delayMs={80}>
            <h3>Frontend</h3>
            <hr className="path__divider" />
            <p>
              React·Next 기반 UI, 인터랙션, 반응형 레이아웃. 빠르고 읽기 쉬운
              화면을 우선으로 만들었습니다.
            </p>
          </Reveal>
          <span className="path__arrow path__arrow--pulse" aria-hidden="true">
            →
          </span>
          <Reveal className="path__step" delayMs={180}>
            <h3>AI</h3>
            <hr className="path__divider" />
            <p>
              LLM 연동, 프롬프트·워크플로, 비전/OCR 실험. 모델과 제품을 잇는
              쪽을 정리하고 있습니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
