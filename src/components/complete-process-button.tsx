"use client";
import { useLearningProgress } from "@/hooks/use-learning-progress";
import { saveProgress } from "@/lib/progress-storage";

export function CompleteProcessButton({ processId }: { processId: string }) {
  const progress = useLearningProgress();
  const done = progress.completedProcessIds.includes(processId);
  const toggle = () => {
    const ids = done
      ? progress.completedProcessIds.filter((id) => id !== processId)
      : [...new Set([...progress.completedProcessIds, processId])];
    saveProgress({ ...progress, completedProcessIds: ids });
  };
  return <button onClick={toggle} className={`rounded-xl px-4 py-3 text-sm font-bold ${done ? "bg-[var(--mint)] text-[var(--green)]" : "bg-white/10 text-white"}`}>{done ? "✓ 학습 완료" : "학습 완료로 표시"}</button>;
}
