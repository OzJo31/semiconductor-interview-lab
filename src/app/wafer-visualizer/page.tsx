import { AppShell } from "@/components/app-shell";
import { WaferVisualizer } from "@/components/wafer-visualizer";

export default function WaferPage() {
  return <AppShell activePath="/wafer-visualizer"><div className="mx-auto max-w-7xl px-5 py-10 pb-28 lg:px-10 lg:py-14"><p className="text-sm font-bold text-[var(--orange)]">WAFER VISUALIZER · CROSS SECTION</p><h1 className="mt-3 text-4xl font-bold tracking-[-0.035em]">공정이 쌓이는 과정을 관찰하세요.</h1><p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">교육용 단면도를 단계별로 이동하며 재료의 추가·제거와 Photo, Etch의 연결을 확인합니다.</p><WaferVisualizer /></div></AppShell>;
}
