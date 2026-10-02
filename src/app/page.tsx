import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { ArrowIcon } from "@/components/icons";
import { learningModules } from "@/data/learning-modules";

export default function Home() {
  return <AppShell activePath="/"><div className="mx-auto max-w-6xl px-5 py-12 pb-28 lg:px-10 lg:py-16">
    <p className="mb-4 text-sm font-bold text-[var(--orange)]">SEMICONDUCTOR INTERVIEW LAB</p>
    <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-[-0.04em] md:text-6xl">공정을 이해하고,<br/><span className="text-[var(--green)]">양산의 관점</span>으로 답하세요.</h1>
    <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">반도체 기초부터 최신 메모리 기술까지. 개념 암기가 아닌 공정·수율·문제 해결의 연결을 연습하는 면접 학습 공간입니다.</p>
    <div className="mt-10 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl border border-[var(--line)] bg-white p-5"><p className="text-xs font-bold text-[var(--muted)]">AVAILABLE MODULES</p><p className="mt-2 text-3xl font-bold">5<span className="text-sm text-[var(--muted)]"> / 8</span></p></div><div className="rounded-2xl border border-[var(--line)] bg-white p-5"><p className="text-xs font-bold text-[var(--muted)]">PROCESS STEPS</p><p className="mt-2 text-3xl font-bold">10</p></div><div className="rounded-2xl bg-[var(--green)] p-5 text-white"><p className="text-xs font-bold text-white/60">RECOMMENDED</p><p className="mt-2 font-bold">Process Map부터 시작하기 →</p></div></div>
    <section className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-labelledby="modules-title">
      <h2 id="modules-title" className="sr-only">학습 메뉴</h2>
      {learningModules.map((module) => <Link key={module.href} href={module.href} className="group rounded-3xl border border-[var(--line)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(23,79,56,.10)]">
        <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[var(--mint)] text-[var(--green)]"><module.icon className="size-6" /></span><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-widest ${module.status === "Available" ? "bg-[var(--mint)] text-[var(--green)]" : "bg-[#f0f2ed] text-[var(--muted)]"}`}>{module.status}</span></div>
        <h3 className="mt-8 text-lg font-bold">{module.title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-[var(--muted)]">{module.description}</p><ArrowIcon className="mt-6 size-5 transition group-hover:translate-x-1" />
      </Link>)}
    </section>
  </div></AppShell>;
}
