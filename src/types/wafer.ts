export type WaferStepId = "silicon-wafer" | "isolation" | "gate-formation" | "source-drain" | "ild" | "contact" | "metal-1" | "via" | "metal-2";

export interface WaferStep {
  id: WaferStepId;
  title: string;
  objective: string;
  addedMaterials: string[];
  removedMaterials: string[];
  usesPhoto: boolean;
  usesEtch: boolean;
  connectionToNext: string;
}
