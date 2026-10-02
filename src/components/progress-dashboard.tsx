"use client";
import { clearLearningProgress, useLearningProgress } from "@/hooks/use-learning-progress";

export function ProgressDashboard() {
  const progress = useLearningProgress();
  const completed = progress.completedProcessIds.length;
  return <div className="mt-8"><div className="grid gap-4 sm:grid-cols-3"><Stat label="완료한 공정" value={`${completed} / 10`}/><Stat label="확인한 Wafer 단계" value={`${progress.viewedWaferStepIds.length} / 9`}/><Stat label="읽은 Tech 자료" value={`${progress.readTechContentIds.length}`}/></div><div className="mt-5 rounded-3xl border border-[var(--line)] bg-white p-7"><div className="flex justify-between text-sm font-bold"><span>Process Map progress</span><span>{completed * 10}%</span></div><div className="mt-4 h-3 overflow-hidden rounded-full bg-[#edf0eb]"><div className="h-full rounded-full bg-[var(--green)] transition-all" style={{ width: `${completed * 10}%` }}/></div><p className="mt-5 text-sm leading-6 text-[var(--muted)]">공정 상세 페이지에서 “학습 완료로 표시”를 선택하면 여기에 반영됩니다. 기록은 계정이 아닌 현재 브라우저에만 저장됩니다.</p><button onClick={clearLearningProgress} className="mt-6 rounded-xl border border-[var(--line)] px-4 py-2.5 text-sm font-bold text-[var(--muted)]">학습 기록 초기화</button></div></div>;
}
function Stat({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-[var(--line)] bg-white p-5"><p className="text-xs font-bold text-[var(--muted)]">{label}</p><p className="mt-3 text-3xl font-bold">{value}</p></div>; }
