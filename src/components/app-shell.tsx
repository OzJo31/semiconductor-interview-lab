import Link from "next/link";
import { BookIcon, ChartIcon, ChipIcon, GridIcon, LayersIcon, RouteIcon, WaferIcon } from "@/components/icons";

const navItems = [
  { label: "Dashboard", href: "/", icon: GridIcon },
  { label: "Process Map", href: "/process-map", icon: RouteIcon },
  { label: "Wafer Visualizer", href: "/wafer-visualizer", icon: WaferIcon },
  { label: "PCB vs Semi", href: "/pcb-vs-semiconductor", icon: LayersIcon },
  { label: "SK hynix Tech", href: "/sk-hynix-tech", icon: ChipIcon },
  { label: "Progress", href: "/progress", icon: ChartIcon },
];

export function AppShell({ children, activePath }: { children: React.ReactNode; activePath: string }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[252px_1fr]">
      <aside className="hidden border-r border-[var(--line)] bg-white/85 px-5 py-7 backdrop-blur lg:flex lg:flex-col">
        <Link href="/" className="mb-12 flex items-center gap-3 px-2">
          <span className="grid size-10 place-items-center rounded-xl bg-[var(--green)] text-white"><ChipIcon className="size-5" /></span>
          <span><strong className="block text-sm tracking-tight">SEMICONDUCTOR</strong><span className="text-xs font-semibold text-[var(--muted)]">INTERVIEW LAB</span></span>
        </Link>
        <nav aria-label="주요 메뉴" className="space-y-1.5">
          {navItems.map((item) => {
            const active = item.href === activePath;
            return <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active ? "bg-[var(--mint)] text-[var(--green)]" : "text-[var(--muted)] hover:bg-black/5 hover:text-[var(--ink)]"}`}><item.icon className="size-[18px]" />{item.label}{item.label === "SK hynix Tech" && <span className="ml-auto size-2 rounded-full bg-[var(--orange)]" />}</Link>;
          })}
        </nav>
        <div className="mt-auto rounded-2xl bg-[var(--green)] p-5 text-white">
          <BookIcon className="mb-4 size-6 text-[#a8e3b7]" />
          <p className="text-sm font-bold">양산기술 면접 준비</p>
          <p className="mt-1 text-xs leading-5 text-white/65">공정 지식을 실제 직무 관점의 질문으로 연결해 보세요.</p>
        </div>
      </aside>
      <div>
        <header className="flex h-16 items-center justify-between border-b border-[var(--line)] bg-white/70 px-5 backdrop-blur lg:px-10">
          <Link href="/" className="flex items-center gap-2 font-bold lg:hidden"><ChipIcon className="size-6 text-[var(--green)]" />Interview Lab</Link>
          <p className="hidden text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)] lg:block">Production Technology Prep</p>
          <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-semibold">MVP · Learning mode</span>
        </header>
        <main>{children}</main>
        <nav aria-label="모바일 메뉴" className="fixed inset-x-3 bottom-3 z-20 flex justify-around rounded-2xl border border-[var(--line)] bg-white/95 p-2 shadow-xl backdrop-blur lg:hidden">
          {navItems.map((item) => <Link key={item.href} href={item.href} aria-label={item.label} className={`rounded-xl p-2.5 ${item.href === activePath ? "bg-[var(--mint)] text-[var(--green)]" : "text-[var(--muted)]"}`}><item.icon className="size-[18px]" /></Link>)}
        </nav>
      </div>
    </div>
  );
}
