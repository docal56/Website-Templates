import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { navItems, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 px-3 py-3 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/90 px-3 shadow-sm sm:px-4 lg:px-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">
            MG
          </span>
          <span className="leading-tight">
            <span className="block font-semibold">{site.name}</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Heating & plumbing demo</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-slate-100 p-1 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:bg-white hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button asChild variant="outline" className="pressable pill-button">
            <a href={`tel:${site.phone.replaceAll(" ", "")}`}>
              <Phone aria-hidden="true" />
              {site.phone}
            </a>
          </Button>
          <Button asChild className="pressable pill-button bg-slate-950 text-white hover:bg-slate-800">
            <Link href="/online-bookings">Book enquiry</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline" aria-label="Open navigation">
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{site.name}</SheetTitle>
            </SheetHeader>
            <div className="mt-8 grid gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-lg font-medium">
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/online-bookings">Book enquiry</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
