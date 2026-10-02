"use client";

import { useEffect, useState } from "react";
import { waferSteps } from "@/content/wafer-steps";
import { readProgress, saveProgress } from "@/lib/progress-storage";

const materialLegend = [
  ["Silicon", "#8fa5b1"], ["Isolation / ILD", "#cfe5dc"], ["Gate", "#ef8f5a"],
  ["Doped region", "#a77bcc"], ["Contact / Via", "#57646e"], ["Metal", "#e6b94d"],
] as const;

export function WaferVisualizer() {
  const [index, setIndex] = useState(0);
  const step = waferSteps[index];
  useEffect(() => {
    const progress = readProgress();
    if (!progress.viewedWaferStepIds.includes(step.id)) saveProgress({ ...progress, viewedWaferStepIds: [...progress.viewedWaferStepIds, step.id] });
  }, [step.id]);
  return <div className="mt-9">
    <div className="overflow-x-auto pb-3"><ol className="flex min-w-[820px] items-center">{waferSteps.map((item, i) => <li key={item.id} className="flex flex-1 items-center last:flex-none"><button onClick={() => setIndex(i)} className="group flex flex-col items-center gap-2" aria-current={i === index ? "step" : undefined}><span className={`grid size-8 place-items-center rounded-full text-xs font-bold transition ${i <= index ? "bg-[var(--green)] text-white" : "border border-[var(--line)] bg-white text-[var(--muted)]"}`}>{i + 1}</span><span className={`whitespace-nowrap text-[10px] font-bold ${i === index ? "text-[var(--green)]" : "text-[var(--muted)]"}`}>{item.title}</span></button>{i < waferSteps.length - 1 && <span className={`mb-5 h-px flex-1 ${i < index ? "bg-[var(--green)]" : "bg-[var(--line)]"}`} />}</li>)}</ol></div>
    <div className="mt-5 grid gap-6 xl:grid-cols-[1.45fr_1fr]">
      <section className="rounded-3xl border border-[var(--line)] bg-white p-5 md:p-8"><div className="flex items-center justify-between"><div><p className="text-xs font-bold text-[var(--orange)]">STEP {index + 1} / {waferSteps.length}</p><h2 className="mt-2 text-2xl font-bold">{step.title}</h2></div><span className="rounded-full bg-[#f1f4f0] px-3 py-1.5 text-[10px] font-bold">CONCEPTUAL · NOT TO SCALE</span></div><div className="mt-7 rounded-2xl bg-[#f5f7f4] p-3 md:p-8"><WaferCrossSection step={index} /></div><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{materialLegend.map(([name, color]) => <span key={name} className="flex items-center gap-2 text-[10px] font-bold text-[var(--muted)]"><span className="size-2.5 rounded-sm" style={{ background: color }}/>{name}</span>)}</div><div className="mt-7 flex justify-between"><button disabled={index === 0} onClick={() => setIndex((current) => current - 1)} className="rounded-xl border border-[var(--line)] px-4 py-2.5 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-30">← Previous</button><button disabled={index === waferSteps.length - 1} onClick={() => setIndex((current) => current + 1)} className="rounded-xl bg-[var(--green)] px-4 py-2.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-30">Next →</button></div></section>
      <aside className="space-y-4" aria-live="polite"><Info title="현재 무엇을 만드는가" text={step.objective}/><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1"><Info title="추가되는 material" text={step.addedMaterials.length ? step.addedMaterials.join(" · ") : "없음"}/><Info title="제거되는 material" text={step.removedMaterials.length ? step.removedMaterials.join(" · ") : "없음"}/></div><div className="grid grid-cols-2 gap-4"><Flag label="Photo" active={step.usesPhoto}/><Flag label="Etch" active={step.usesEtch}/></div><Info title="다음 단계와의 연결" text={step.connectionToNext} accent/></aside>
    </div>
  </div>;
}

function Info({ title, text, accent = false }: { title: string; text: string; accent?: boolean }) { return <div className={`rounded-2xl border p-5 ${accent ? "border-[#c8dbc9] bg-[var(--mint)]" : "border-[var(--line)] bg-white"}`}><p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">{title}</p><p className="mt-3 text-sm leading-6">{text}</p></div>; }
function Flag({ label, active }: { label: string; active: boolean }) { return <div className="rounded-2xl border border-[var(--line)] bg-white p-5"><p className="text-xs font-bold text-[var(--muted)]">{label} 사용</p><p className={`mt-2 text-xl font-bold ${active ? "text-[var(--green)]" : "text-[var(--muted)]"}`}>{active ? "YES" : "NO"}</p></div>; }

function WaferCrossSection({ step }: { step: number }) {
  return <svg viewBox="0 0 760 380" role="img" aria-label={`${waferSteps[step].title} 단계의 교육용 웨이퍼 단면`} className="h-auto w-full">
    <rect x="40" y="255" width="680" height="100" rx="6" fill="#8fa5b1"/><text x="65" y="332" fill="#fff" fontSize="16" fontWeight="700">Silicon substrate</text>
    {step >= 1 && <><rect x="60" y="215" width="150" height="40" rx="5" fill="#cfe5dc"/><rect x="550" y="215" width="150" height="40" rx="5" fill="#cfe5dc"/></>}
    {step >= 2 && <><rect x="325" y="207" width="110" height="8" fill="#f7d6a3"/><rect x="340" y="155" width="80" height="52" rx="3" fill="#ef8f5a"/><text x="358" y="186" fontSize="13" fontWeight="700" fill="#fff">Gate</text></>}
    {step >= 3 && <><rect x="225" y="225" width="90" height="30" rx="15" fill="#a77bcc"/><rect x="445" y="225" width="90" height="30" rx="15" fill="#a77bcc"/><text x="238" y="246" fontSize="11" fill="#fff">Source</text><text x="465" y="246" fontSize="11" fill="#fff">Drain</text></>}
    {step >= 4 && <path d="M60 215h150v40h15v-50h95v-58h120v58h95v50h165v-130H60Z" fill="#cfe5dc" opacity=".9"/>}
    {step >= 5 && <><rect x="260" y="165" width="30" height="90" fill="#57646e"/><rect x="470" y="165" width="30" height="90" fill="#57646e"/></>}
    {step >= 6 && <><rect x="180" y="135" width="400" height="30" rx="4" fill="#e6b94d"/><text x="350" y="155" fontSize="12" fontWeight="700">Metal 1</text></>}
    {step >= 7 && <><rect x="485" y="75" width="30" height="60" fill="#57646e"/><rect x="60" y="75" width="640" height="60" fill="#cfe5dc" opacity=".6"/></>}
    {step >= 8 && <><rect x="280" y="45" width="330" height="30" rx="4" fill="#e6b94d"/><text x="410" y="65" fontSize="12" fontWeight="700">Metal 2</text></>}
  </svg>;
}
