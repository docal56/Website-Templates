import { CalendarCheck, Flame, MapPin, Wrench } from "lucide-react";

type VisualPanelProps = {
  label: string;
  variant?: "boiler" | "plumbing";
};

export function VisualPanel({ label, variant = "boiler" }: VisualPanelProps) {
  const Icon = variant === "boiler" ? Flame : Wrench;

  return (
    <div className="surface-shadow relative min-h-[420px] overflow-hidden rounded-lg border border-black/10 bg-white">
      <div className="absolute inset-x-0 top-0 h-28 bg-[#0f766e]" />
      <div className="absolute inset-x-6 top-6 rounded-lg border border-black/10 bg-[#fff8e7] p-5 shadow-xl">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold">Live booking dashboard</span>
          <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-950">Demo</span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {["Service", "Area", "Urgency"].map((item) => (
            <span key={item} className="h-12 rounded-md bg-white shadow-sm" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-6 right-6 grid gap-4 sm:grid-cols-[1fr_0.82fr]">
        <div className="rounded-lg border border-black/10 bg-slate-950 p-5 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md bg-amber-300 text-slate-950">
              <Icon aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-slate-300">Selected enquiry</p>
              <p className="font-semibold">{label}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            <span className="h-2 rounded bg-white/30" />
            <span className="h-2 rounded bg-white/20" />
            <span className="h-2 w-2/3 rounded bg-white/20" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-lg border border-black/10 bg-white p-4 shadow-lg">
            <CalendarCheck className="mb-3 size-5 text-primary" aria-hidden="true" />
            <p className="text-sm font-semibold">Preferred date captured</p>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-4 shadow-lg">
            <MapPin className="mb-3 size-5 text-primary" aria-hidden="true" />
            <p className="text-sm font-semibold">Postcode routed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
