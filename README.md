# Dori Portfolio

Frontend → AI 커리어를 담은 **Dori** 원페이지 포트폴리오입니다.  
잔망루피 느낌의 핑크 톤으로 구성했고, Vercel에 바로 배포할 수 있습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## Vercel 배포

1. GitHub에 이 저장소를 푸시합니다.
2. [vercel.com](https://vercel.com)에서 **Import Project**로 연결합니다.
3. Framework Preset이 Next.js인지 확인한 뒤 Deploy합니다.

또는 CLI:

```bash
npx vercel
```

## 커스터마이즈

- 프로젝트 문구: `components/Works.tsx`
- 메일/링크: `components/Contact.tsx`
- 색·타이포: `app/globals.css`의 CSS 변수
