import { Flame, Wrench } from "lucide-react";

type VisualPanelProps = {
  label: string;
  variant?: "boiler" | "plumbing";
};

export function VisualPanel({ label, variant = "boiler" }: VisualPanelProps) {
  const Icon = variant === "boiler" ? Flame : Wrench;

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border bg-slate-900 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(245,158,11,0.28),transparent_28%),linear-gradient(135deg,#0f766e_0%,#0f172a_62%,#020617_100%)]" />
      <div className="absolute inset-x-8 top-8 h-24 rounded-md border border-white/15 bg-white/10 backdrop-blur-sm" />
      <div className="absolute left-8 top-20 h-52 w-40 rounded-md border border-slate-300/60 bg-slate-100 shadow-xl">
        <div className="m-4 h-24 rounded-md bg-slate-300" />
        <div className="mx-4 grid gap-2">
          <span className="h-2 rounded bg-slate-400" />
          <span className="h-2 rounded bg-slate-300" />
          <span className="h-2 w-2/3 rounded bg-slate-300" />
        </div>
      </div>
      <div className="absolute bottom-10 right-8 w-56 rounded-lg border border-white/15 bg-white/95 p-4 text-slate-950 shadow-xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md bg-amber-400 text-slate-950">
            <Icon aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold">{label}</span>
        </div>
        <div className="grid gap-2">
          <span className="h-2 rounded bg-slate-200" />
          <span className="h-2 rounded bg-slate-200" />
          <span className="h-2 w-3/4 rounded bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
