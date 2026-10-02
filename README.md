# Semiconductor Interview Lab

반도체 공정 지식을 양산기술 직무 및 면접 질문과 연결하는 Next.js 학습 웹앱입니다.

## MVP scope

- 8개 학습 영역을 안내하는 Dashboard
- FEOL / MOL / BEOL Process Map과 공정 상세 학습
- 9단계 SVG Wafer Cross-section Visualizer
- PCB vs Semiconductor 비교 학습
- SK hynix Tech 콘텐츠 구조, 카테고리와 명시적 placeholder
- 브라우저 localStorage 기반 Progress

Semiconductor Basics, Troubleshooting, Interview Quiz는 다음 개발 단계를 안내하는 placeholder 페이지로 제공합니다.

## SK hynix Tech content policy

`SK hynix Tech`는 SK hynix Newsroom에 공개된 자료를 학습용으로 큐레이션하는 영역입니다.

- 기사 전문을 복제하지 않습니다.
- 기사 제목, 공개일, URL, 출처 및 핵심 키워드를 기록합니다.
- 요약은 짧은 면접 학습용 문장으로 직접 작성합니다.
- 일반 반도체 지식과 SK hynix가 공개한 정보를 데이터 수준에서 구분합니다.
- 공개되지 않은 공정 조건이나 내부 수치를 추정하지 않습니다.
- 모든 콘텐츠는 양산기술 직무의 공정·수율·품질 관점과 연결합니다.

검증된 기사만 `src/data/sk-hynix-tech.ts`에 추가합니다. 현재 기사 데이터는 의도적으로 비어 있습니다.

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```
