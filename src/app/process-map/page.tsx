import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { ArrowIcon } from "@/components/icons";
import { processes, processStages } from "@/content/processes";

const stageText = { FEOL: "소자 형성", MOL: "소자와 배선 연결", BEOL: "다층 금속 배선" } as const;

export default function ProcessMapPage() {
  return <AppShell activePath="/process-map"><div className="mx-auto max-w-7xl px-5 py-10 pb-28 lg:px-10 lg:py-14">
    <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-bold text-[var(--orange)]">PROCESS MAP · 10 STEPS</p><h1 className="mt-3 text-4xl font-bold tracking-[-0.035em]">반도체 제조 흐름을 연결하세요.</h1><p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">공정 이름을 선택하면 목적부터 결함 대응, 면접 질문까지 양산기술 관점으로 학습할 수 있습니다.</p></div><div className="flex gap-4 text-xs font-bold text-[var(--muted)]"><span>● FEOL</span><span>● MOL</span><span>● BEOL</span></div></div>
    <div className="mt-10 grid gap-5 xl:grid-cols-[5fr_1.25fr_4fr]">
      {processStages.map((stage) => <section key={stage} className="rounded-3xl border border-[var(--line)] bg-white p-5"><div className="flex items-center justify-between border-b border-[var(--line)] pb-4"><div><p className="text-xs font-bold tracking-[.15em] text-[var(--orange)]">{stage}</p><h2 className="mt-1 font-bold">{stageText[stage]}</h2></div><span className="text-xs text-[var(--muted)]">{processes.filter((item) => item.stage === stage).length} steps</span></div><div className="mt-4 space-y-3">{processes.filter((item) => item.stage === stage).map((item) => <Link href={`/process-map/${item.id}`} key={item.id} className="group flex items-center gap-4 rounded-2xl bg-[#f5f7f3] p-4 transition hover:bg-[var(--mint)]"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-xs font-bold">{String(item.order).padStart(2, "0")}</span><span><strong className="block text-sm">{item.name}</strong><span className="mt-1 block text-xs leading-4 text-[var(--muted)]">{item.summary}</span></span><ArrowIcon className="ml-auto size-4 shrink-0 transition group-hover:translate-x-1" /></Link>)}</div></section>)}
    </div>
    <div className="mt-6 rounded-2xl border border-dashed border-[#b9c7bc] bg-[#edf7ef] p-5 text-sm leading-6 text-[var(--green)]"><strong>읽는 방법:</strong> FEOL에서 트랜지스터를 만들고, MOL에서 소자와 배선을 연결한 뒤, BEOL에서 다층 배선망을 구성합니다. 실제 제조 흐름은 제품과 통합 방식에 따라 더 복잡할 수 있습니다.</div>
  </div></AppShell>;
}
