import type { SkHynixTechCategory } from "@/types/sk-hynix-tech";
export interface TechPlaceholder { id: string; kind: "placeholder"; title: string; category: SkHynixTechCategory; concepts: string[]; description: string; }
