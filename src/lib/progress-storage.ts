import type { LearningProgress } from "@/types/progress";

export const PROGRESS_KEY = "semiconductor-interview-lab.progress";
export const PROGRESS_EVENT = "semiconductor-interview-lab:progress";
export const emptyProgress = (): LearningProgress => ({ version: 1, completedProcessIds: [], viewedWaferStepIds: [], readTechContentIds: [], updatedAt: "" });

export function readProgress(): LearningProgress {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const value = JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? "null") as LearningProgress | null;
    return value?.version === 1 ? value : emptyProgress();
  } catch { return emptyProgress(); }
}

export function saveProgress(progress: LearningProgress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify({ ...progress, updatedAt: new Date().toISOString() }));
  window.dispatchEvent(new Event(PROGRESS_EVENT));
}

export function getProgressSnapshot() {
  return localStorage.getItem(PROGRESS_KEY) ?? "";
}

export function subscribeToProgress(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === PROGRESS_KEY) onStoreChange();
  };
  window.addEventListener(PROGRESS_EVENT, onStoreChange);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(PROGRESS_EVENT, onStoreChange);
    window.removeEventListener("storage", handleStorage);
  };
}
