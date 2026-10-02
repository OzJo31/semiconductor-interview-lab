import type { TechPlaceholder } from "@/types/tech-placeholder";

export const techPlaceholders: readonly TechPlaceholder[] = [
  { id: "hbm-integration", kind: "placeholder", title: "HBM 적층과 연결 기술 학습 노트", category: "HBM", concepts: ["TSV", "MR-MUF", "Thermal management"], description: "HBM의 수직 연결과 패키징을 공정·열·수율 관점으로 연결할 콘텐츠 자리입니다." },
  { id: "nand-scaling", kind: "placeholder", title: "3D NAND 적층 구조 학습 노트", category: "NAND", concepts: ["3D NAND", "Vertical stacking", "QLC"], description: "수직 적층과 고집적화의 장점 및 양산 난제를 정리할 콘텐츠 자리입니다." },
  { id: "dram-efficiency", kind: "placeholder", title: "DRAM 성능과 효율 학습 노트", category: "DRAM", concepts: ["DRAM cell", "Scaling", "Bandwidth", "Power efficiency"], description: "DRAM scaling과 성능·전력 trade-off를 면접 질문으로 연결할 콘텐츠 자리입니다." },
];
