import type { WaferStep } from "@/types/wafer";

export const waferSteps: readonly WaferStep[] = [
  { id: "silicon-wafer", title: "Silicon Wafer", objective: "소자가 만들어질 단결정 실리콘 기반을 준비합니다.", addedMaterials: ["Silicon"], removedMaterials: [], usesPhoto: false, usesEtch: false, connectionToNext: "활성 영역을 구분하기 위한 isolation 구조를 형성합니다." },
  { id: "isolation", title: "Isolation", objective: "인접 소자가 전기적으로 간섭하지 않도록 활성 영역을 분리합니다.", addedMaterials: ["Isolation oxide"], removedMaterials: ["선택 영역의 Silicon"], usesPhoto: true, usesEtch: true, connectionToNext: "분리된 활성 영역 위에 gate 구조를 만듭니다." },
  { id: "gate-formation", title: "Gate Formation", objective: "전류 흐름을 제어하는 gate stack을 형성합니다.", addedMaterials: ["Gate dielectric", "Gate material"], removedMaterials: ["패턴 외 Gate material"], usesPhoto: true, usesEtch: true, connectionToNext: "Gate를 기준으로 source/drain 영역을 정의합니다." },
  { id: "source-drain", title: "Source / Drain", objective: "전하가 들어오고 나가는 도핑 영역을 형성합니다.", addedMaterials: ["Dopant"], removedMaterials: [], usesPhoto: true, usesEtch: false, connectionToNext: "소자 위를 절연막으로 덮어 배선 구조와 분리합니다." },
  { id: "ild", title: "ILD", objective: "소자와 금속 배선 사이를 절연하고 표면을 덮습니다.", addedMaterials: ["Inter-layer dielectric"], removedMaterials: [], usesPhoto: false, usesEtch: false, connectionToNext: "ILD에 contact hole을 열어 소자와 배선을 연결합니다." },
  { id: "contact", title: "Contact", objective: "Source/drain 또는 gate와 첫 금속층 사이의 수직 연결을 만듭니다.", addedMaterials: ["Contact metal", "Barrier"], removedMaterials: ["Contact 위치의 ILD"], usesPhoto: true, usesEtch: true, connectionToNext: "Contact 위에 첫 번째 수평 배선을 형성합니다." },
  { id: "metal-1", title: "Metal 1", objective: "소자 사이를 연결하는 첫 번째 금속 배선층을 만듭니다.", addedMaterials: ["Metal 1", "Barrier"], removedMaterials: ["패턴에 따른 Metal 또는 dielectric"], usesPhoto: true, usesEtch: true, connectionToNext: "상부 배선과 연결할 via를 형성합니다." },
  { id: "via", title: "Via", objective: "Metal 1과 상부 금속층을 수직으로 연결합니다.", addedMaterials: ["Via metal", "Barrier"], removedMaterials: ["Via 위치의 dielectric"], usesPhoto: true, usesEtch: true, connectionToNext: "Via 위에 두 번째 금속 배선층을 형성합니다." },
  { id: "metal-2", title: "Metal 2", objective: "상위 신호 경로를 위한 두 번째 금속 배선층을 완성합니다.", addedMaterials: ["Metal 2", "Barrier"], removedMaterials: ["패턴에 따른 Metal 또는 dielectric"], usesPhoto: true, usesEtch: true, connectionToNext: "동일한 원리로 더 많은 배선층을 반복 구성할 수 있습니다." },
];
