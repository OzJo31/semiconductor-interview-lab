import { BookIcon, ChartIcon, ChipIcon, LayersIcon, QuizIcon, RouteIcon, WaferIcon, WrenchIcon } from "@/components/icons";

export const learningModules = [
  { title: "Semiconductor Basics", description: "소자, 웨이퍼, 수율의 핵심 개념을 익힙니다.", href: "/basics", icon: BookIcon, status: "Coming next", tone: "blue" },
  { title: "Process Map", description: "FEOL부터 BEOL까지 제조 흐름을 연결합니다.", href: "/process-map", icon: RouteIcon, status: "Available", tone: "green" },
  { title: "Wafer Visualizer", description: "공정 단계별 소자 단면의 변화를 관찰합니다.", href: "/wafer-visualizer", icon: WaferIcon, status: "Available", tone: "violet" },
  { title: "PCB vs Semiconductor", description: "PCB 생산기술 경험을 반도체 개념과 비교합니다.", href: "/pcb-vs-semiconductor", icon: LayersIcon, status: "Available", tone: "amber" },
  { title: "SK hynix Tech", description: "공개 기술 자료를 양산 관점으로 연결합니다.", href: "/sk-hynix-tech", icon: ChipIcon, status: "Available", tone: "orange" },
  { title: "Troubleshooting", description: "이상 현상에서 원인과 검증 순서를 훈련합니다.", href: "/troubleshooting", icon: WrenchIcon, status: "Coming next", tone: "red" },
  { title: "Interview Quiz", description: "핵심 개념을 면접 질문으로 점검합니다.", href: "/interview-quiz", icon: QuizIcon, status: "Coming next", tone: "cyan" },
  { title: "Progress", description: "학습 기록과 완료한 공정을 확인합니다.", href: "/progress", icon: ChartIcon, status: "Available", tone: "slate" },
] as const;
