import type { SkHynixTechCategory } from "@/types/sk-hynix-tech";

/** 기사 데이터가 아닌, 콘텐츠 큐레이션 시 활용할 일반 기술 분류표다. */
export const techConceptMap: Partial<Record<SkHynixTechCategory, readonly string[]>> = {
  DRAM: ["DRAM cell", "scaling", "bandwidth", "power efficiency"],
  NAND: ["3D NAND", "vertical stacking", "QLC", "321-layer NAND"],
  HBM: ["TSV", "MR-MUF", "Hybrid Bonding", "Thermal management", "HBM4 / HBM4E"],
  "Advanced Packaging": ["TSV", "MR-MUF", "Hybrid Bonding", "Thermal management"],
  "AI Memory": ["bandwidth", "power efficiency", "memory hierarchy", "AI workload"],
};
