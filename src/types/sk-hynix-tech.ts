export const SK_HYNIX_TECH_CATEGORIES = [
  "DRAM",
  "NAND",
  "HBM",
  "Advanced Packaging",
  "AI Memory",
  "Latest Newsroom",
] as const;

export type SkHynixTechCategory = (typeof SK_HYNIX_TECH_CATEGORIES)[number];

export type KnowledgeBasis = "GENERAL_SEMICONDUCTOR" | "SK_HYNIX_PUBLIC";

export interface SourcedLearningNote {
  /** 학습 노트가 일반 지식인지 SK hynix 공개 정보인지 명시한다. */
  basis: KnowledgeBasis;
  content: string;
  sourceUrl?: string;
}

export interface KeyConcept {
  name: string;
  description: SourcedLearningNote;
  relatedConcepts: string[];
}

export interface SkHynixTechContent {
  id: string;
  title: string;
  category: SkHynixTechCategory;
  /** 뉴스룸 원문에 표기된 공개일. YYYY-MM-DD 형식이다. */
  publishedDate: string;
  sourceUrl: string;
  sourceName: "SK hynix Newsroom";
  tags: string[];
  /** 원문 복제가 아닌 면접 학습용 요약만 저장한다. */
  summary: SourcedLearningNote[];
  keyConcepts: KeyConcept[];
  processRelation: SourcedLearningNote[];
  massProductionPerspective: SourcedLearningNote[];
  interviewQuestions: string[];
}
