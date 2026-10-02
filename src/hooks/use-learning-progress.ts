"use client";

import { useMemo, useSyncExternalStore } from "react";
import { emptyProgress, getProgressSnapshot, PROGRESS_EVENT, PROGRESS_KEY, subscribeToProgress } from "@/lib/progress-storage";
import type { LearningProgress } from "@/types/progress";

const getServerSnapshot = () => "";

export function useLearningProgress() {
  const snapshot = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getServerSnapshot);

  return useMemo(() => {
    if (!snapshot) return emptyProgress();
    try {
      const progress = JSON.parse(snapshot) as LearningProgress;
      return progress.version === 1 ? progress : emptyProgress();
    } catch {
      return emptyProgress();
    }
  }, [snapshot]);
}

export function clearLearningProgress() {
  localStorage.removeItem(PROGRESS_KEY);
  window.dispatchEvent(new Event(PROGRESS_EVENT));
}
