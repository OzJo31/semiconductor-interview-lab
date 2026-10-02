import Link from "next/link";
import { AppShell } from "@/components/app-shell";

export function ComingSoonPage({ title, description }: { title: string; description: string }) { return <AppShell activePath=""><div className="mx-auto max-w-4xl px-5 py-20 text-center"><span className="rounded-full bg-[var(--mint)] px-4 py-2 text-xs font-bold text-[var(--green)]">COMING NEXT</span><h1 className="mt-6 text-4xl font-bold">{title}</h1><p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--muted)]">{description}</p><Link href="/" className="mt-8 inline-block rounded-xl bg-[var(--green)] px-5 py-3 text-sm font-bold text-white">Dashboard로 돌아가기</Link></div></AppShell>; }
