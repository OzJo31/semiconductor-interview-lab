export type ProcessStage = "FEOL" | "MOL" | "BEOL";

export interface ProcessParameter {
  name: string;
  importance: string;
}

export interface ProcessDefect {
  name: string;
  description: string;
}

export interface ProcessContent {
  id: string;
  name: string;
  stage: ProcessStage;
  order: number;
  summary: string;
  purpose: string;
  principle: string;
  process: string[];
  keyParameters: ProcessParameter[];
  typicalDefects: ProcessDefect[];
  troubleshooting: string[];
  interviewQuestions: string[];
}
