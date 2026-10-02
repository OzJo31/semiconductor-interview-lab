import { AppShell } from "@/components/app-shell";
import { ProgressDashboard } from "@/components/progress-dashboard";
export default function ProgressPage() { return <AppShell activePath="/progress"><div className="mx-auto max-w-5xl px-5 py-10 pb-28 lg:px-10 lg:py-14"><p className="text-sm font-bold text-[var(--orange)]">YOUR LEARNING</p><h1 className="mt-3 text-4xl font-bold">Progress</h1><p className="mt-4 text-[var(--muted)]">이 브라우저에 저장된 학습 기록입니다.</p><ProgressDashboard/></div></AppShell>; }
