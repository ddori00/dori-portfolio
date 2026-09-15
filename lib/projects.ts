export type ProjectGroup = "frontend" | "ai";

export type Project = {
  slug: string;
  group: ProjectGroup;
  meta: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "kkeumeum",
    group: "frontend",
    meta: "Next.js · TypeScript · FSD",
    title: "꿈이음 교육·진로 포털",
    summary:
      "군산 청소년·진로 지원 플랫폼의 사용자웹·관리자웹을 프론트 전담으로 구축. 운영형 목록·권한 UI·신청 여정까지 반복적으로 다듬었습니다.",
    role: "Frontend 전담 — 사용자웹 / 관리자웹 화면·연동·권한 UI",
    stack: ["Next.js", "TypeScript", "React", "FSD", "Tailwind", "REST API"],
    highlights: [
      "사용자웹과 관리자웹을 함께 맡아 운영 콘솔형 UI를 반복 구현",
      "검색·필터·페이징·상태 변경처럼 현장에서 매일 쓰는 패턴을 통일",
      "FSD로 라우팅과 화면 로직을 나눠 기능이 늘어나도 유지보수 가능한 구조 유지",
      "레거시 HTML 톤과 맞추며 기획 패리티를 지키는 마이그레이션 경험",
    ],
    outcomes: [
      "교육·진로 포털의 핵심 운영 화면을 프론트 기준으로 안정화",
      "권한·신청·게시 흐름을 사용자 관점에서 읽히게 정리",
    ],
  },
  {
    slug: "waterb",
    group: "frontend",
    meta: "Next.js · Admin · Excel",
    title: "김제 상·하수도 업무 시스템",
    summary:
      "행정 업무용 Admin 화면을 맡아 대시보드·등록·납부내역·엑셀 등 현장 운영 흐름에 맞춘 UI와 상태를 정리했습니다.",
    role: "Admin Web Frontend — UI·라우팅·상태·엑셀·폼 검증",
    stack: ["Next.js", "TypeScript", "React", "Tailwind", "ExcelJS", "FSD"],
    highlights: [
      "대시보드·부담금·납부내역·용도관리·배수설비 대장 등 행정 업무 화면 구축",
      "목록 ↔ 상세 왕복 시 검색·페이지 상태를 자연스럽게 복원하는 UX",
      "엑셀보내기·다이얼로그·날짜 입력을 업무 화면에 맞게 일관화",
      "계산·저장·상태 동기화처럼 현장에서 헷히는 폼 이슈까지 FE에서 마무리",
    ],
    outcomes: [
      "담당자가 하루에도 여러 번 쓰는 업무 화면의 동선과 피드백을 줄임",
      "백엔드와 역할을 나누되, 화면 품질과 상태 흐름은 프론트에서 책임",
    ],
  },
  {
    slug: "ai-kkumjigi",
    group: "ai",
    meta: "LLM · Chat UI · RAG",
    title: "AI 꿈지기 챗봇",
    summary:
      "교육·지원 안내용 챗봇 UI를 만들고, 백엔드 챗 API와 연동해 추천 질문·스트리밍·마크다운 응답까지 화면에서 완성했습니다.",
    role: "Frontend — 챗봇 위젯 UI 및 챗 API 연동",
    stack: ["Next.js", "TypeScript", "React", "Markdown", "FastAPI 연동"],
    highlights: [
      "플로팅 챗 UI, 추천 질문, 로딩·전송 상태까지 사용자 흐름 설계",
      "응답 마크다운 렌더링으로 안내 문장을 읽기 쉽게 표시",
      "팀의 RAG·라우팅 구조를 이해한 뒤 화면과 안전하게 연결",
      "AI가 만든 초안을 타입·동작 검증으로 마무리하는 협업 방식",
    ],
    outcomes: [
      "교육 포털 사용자웹에 AI 안내 접점을 실제 화면으로 붙임",
      "에이전트/챗봇과 프론트가 만나는 UX 패턴을 확보",
    ],
  },
  {
    slug: "paddleocr",
    group: "ai",
    meta: "OCR · Document AI",
    title: "PaddleOCR 문서 인식",
    summary:
      "정형 서류·표 중심 OCR 파이프라인을 실험하며, 인식 품질·속도·후처리 커스터마이징을 실무 관점으로 정리했습니다.",
    role: "AI / Document pipeline — 로컬 OCR 실험·커스터마이징 정리",
    stack: ["PaddleOCR-VL", "PP-OCRv5", "Python", "문서 후처리"],
    highlights: [
      "정형 문서에서 표 구조와 글자 인식의 역할을 분리해 접근",
      "속도는 파이프라인·해상도·추론 환경, 정확도는 모델·후처리로 나누어 튜닝",
      "고정 양식에는 템플릿·규칙 기반 보정이 ROI가 크다는 점을 검증",
      "벤치·실험 결과를 문서화해 다음 프로젝트에 바로 쓸 수 있게 정리",
    ],
    outcomes: [
      "문서 AI를 “모델만”이 아니라 제품 파이프라인으로 보는 기준을 만듦",
      "실무에서 손대기 좋은 커스터마이징 순서를 공개용으로 정리",
    ],
  },
  {
    slug: "dog-behavior",
    group: "ai",
    meta: "Vision · YOLO · VLM",
    title: "강아지 행동 분석",
    summary:
      "탐지·개체 추적 위에 짧은 클립만 VLM으로 판정하는 파이프라인을 설계해, 스트레스·피부·관절 등 행동 클립을 UI로 이어가는 방향을 잡았습니다.",
    role: "AI Vision pipeline design — 탐지·추적·행동 판정 흐름",
    stack: ["YOLO", "ReID", "VLM", "클립 추출", "Python"],
    highlights: [
      "전 영상 VLM 대신 후보 구간만 잘라 판정하는 비용·지연 최적화 설계",
      "개체 단위 추적 후 행동 라벨을 UI 버튼과 연결하는 제품 흐름 정의",
      "유사 행동 오탐을 줄이기 위한 none 클래스·지속시간 기준 초안",
      "기존 탐지 파이프라인 위에 행동 판정 단계를 얹는 확장 구조",
    ],
    outcomes: [
      "비전 파이프라인을 제품 UI까지 이어지는 한 줄 스토리로 정리",
      "실험용 모델 비교를 넘어 운영 가능한 단계별 구현 로드맵 확보",
    ],
  },
  {
    slug: "artist-llm",
    group: "ai",
    meta: "RAG · On-prem LLM",
    title: "예술인 경력 챗봇 설계",
    summary:
      "공개 FAQ와 로그인 후 조회를 분리한 RAG·도구호출 구조를 설계하고, 상용 배포에 맞는 오픈 웨이트 모델 후보를 비교·정리했습니다.",
    role: "AI solution design — RAG·도구호출·모델 선정 기준",
    stack: ["RAG", "Tool calling", "Open-weight LLM", "OCR 연동 구상"],
    highlights: [
      "공개 지식과 로그인 후 개인 조회를 분리해 환각·민감정보 리스크를 줄이는 구조",
      "지식을 모델에 넣지 않고 검색·조회로 두는 운영 원칙 정리",
      "상업 배포 라이선스를 먼저 보는 모델 후보 비교",
      "증빙 문서 OCR과 챗봇 안내를 같은 축으로 붙이는 방향 설계",
    ],
    outcomes: [
      "공공·기관형 챗봇을 라이선스·가드·RAG 중심으로 설계하는 틀을 만듦",
      "PoC부터 운영까지 이어질 수 있는 단계별 실행안 정리",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByGroup(group: ProjectGroup) {
  return projects.filter((project) => project.group === group);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
