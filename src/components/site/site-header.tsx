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
    <header className="sticky top-0 z-40 border-b border-black/10 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md bg-slate-950 text-sm font-bold text-white">
            MG
          </span>
          <span className="leading-tight">
            <span className="block font-semibold">{site.name}</span>
            <span className="block text-xs text-muted-foreground">Heating & plumbing demo</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button asChild variant="outline" className="pressable">
            <a href={`tel:${site.phone.replaceAll(" ", "")}`}>
              <Phone aria-hidden="true" />
              {site.phone}
            </a>
          </Button>
          <Button asChild className="pressable bg-slate-950 text-white hover:bg-slate-800">
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
