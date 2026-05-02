import Link from "next/link";

import { navItems, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-background px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#111827] px-6 py-10 text-white md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
            Demo website concept for a local heating, plumbing, gas and booking-led lead capture experience.
          </p>
        </div>
        <div>
          <p className="font-semibold">Pages</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.address}</span>
            <span>{site.hours}</span>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-slate-400 md:col-span-3">
        Original demo content inspired by public service information. Replace details before using as a live client site.
        </div>
      </div>
    </footer>
  );
}
