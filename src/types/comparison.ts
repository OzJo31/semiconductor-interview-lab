export interface PcbComparison {
  id: string;
  pcbConcept: string;
  semiconductorConcept: string;
  sharedPurpose: string;
  similarities: string[];
  differences: string[];
  productionPerspective: string;
}
