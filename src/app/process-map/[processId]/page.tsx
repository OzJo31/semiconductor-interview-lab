import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { ArrowIcon } from "@/components/icons";
import { CompleteProcessButton } from "@/components/complete-process-button";
import { getProcess, processes } from "@/content/processes";

export function generateStaticParams() { return processes.map((process) => ({ processId: process.id })); }

export default async function ProcessDetailPage({ params }: { params: Promise<{ processId: string }> }) {
  const { processId } = await params;
  const process = getProcess(processId);
  if (!process) notFound();
  const index = processes.findIndex((item) => item.id === process.id);
  const previous = processes[index - 1];
  const next = processes[index + 1];
  return <AppShell activePath="/process-map"><article className="mx-auto max-w-5xl px-5 py-10 pb-28 lg:px-10 lg:py-14">
    <Link href="/process-map" className="text-sm font-bold text-[var(--green)]">← 전체 공정 맵</Link>
    <header className="mt-6 rounded-3xl bg-[var(--green)] p-7 text-white md:p-10"><div className="flex flex-wrap items-center justify-between gap-4"><div className="flex items-center gap-3"><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">{process.stage}</span><span className="text-xs text-white/60">STEP {String(process.order).padStart(2, "0")}</span></div><CompleteProcessButton processId={process.id}/></div><h1 className="mt-5 text-4xl font-bold">{process.name}</h1><p className="mt-4 max-w-2xl leading-7 text-white/70">{process.summary}</p></header>
    <div className="mt-7 grid gap-5 md:grid-cols-2"><Section title="Purpose"><p>{process.purpose}</p></Section><Section title="Principle"><p>{process.principle}</p></Section></div>
    <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.2fr]"><Section title="Process"><ol className="space-y-3">{process.process.map((item, i) => <li key={item} className="flex gap-3"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--mint)] text-xs font-bold text-[var(--green)]">{i + 1}</span>{item}</li>)}</ol></Section><Section title="Key Parameters"><div className="divide-y divide-[var(--line)]">{process.keyParameters.map((item) => <div key={item.name} className="py-3 first:pt-0 last:pb-0"><strong>{item.name}</strong><p className="mt-1 text-[var(--muted)]">{item.importance}</p></div>)}</div></Section></div>
    <div className="mt-5 grid gap-5 md:grid-cols-2"><Section title="Typical Defects">{process.typicalDefects.map((item) => <div key={item.name} className="mb-4 last:mb-0"><strong>{item.name}</strong><p className="mt-1 text-[var(--muted)]">{item.description}</p></div>)}</Section><Section title="Troubleshooting"><ul className="space-y-3">{process.troubleshooting.map((item) => <li key={item} className="flex gap-2"><span className="text-[var(--orange)]">◆</span>{item}</li>)}</ul></Section></div>
    <Section title="Interview Questions" className="mt-5 bg-[#fff4ed]"><ol className="space-y-3">{process.interviewQuestions.map((item, i) => <li key={item}><strong className="mr-2 text-[var(--orange)]">Q{i + 1}.</strong>{item}</li>)}</ol></Section>
    <nav className="mt-7 flex justify-between gap-4">{previous ? <Link href={`/process-map/${previous.id}`} className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm font-bold">← {previous.name}</Link> : <span/>}{next && <Link href={`/process-map/${next.id}`} className="flex items-center gap-2 rounded-xl bg-[var(--green)] px-4 py-3 text-sm font-bold text-white">{next.name}<ArrowIcon className="size-4"/></Link>}</nav>
  </article></AppShell>;
}

function Section({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-[var(--line)] bg-white p-6 ${className}`}><h2 className="mb-4 text-lg font-bold">{title}</h2><div className="text-sm leading-6">{children}</div></section>;
}
