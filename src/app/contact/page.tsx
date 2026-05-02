import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { Section } from "@/components/site/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Mayne-inspired demo website for plumbing, heating, boiler and landlord gas safety enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="round-panel mx-auto max-w-7xl bg-[#fff8e7] p-6 sm:p-10 lg:p-14">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-7xl">
            Contact and callback enquiries.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-pretty text-slate-700">
            A simple contact route for visitors who need a callback, quote or advice before booking.
          </p>
        </div>
      </section>

      <Section title="Send the details once, route them clearly.">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="surface-shadow rounded-[1.75rem] border-black/10 bg-[#fff8e7]">
            <CardHeader>
              <CardTitle>Demo contact details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm">
              <a className="flex items-center gap-3" href={`tel:${site.phone.replaceAll(" ", "")}`}>
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
              <a className="flex items-center gap-3" href={`mailto:${site.email}`}>
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {site.email}
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {site.address}
              </span>
              <p className="pt-4 text-muted-foreground">
                Replace these details with live client contact information before launch.
              </p>
            </CardContent>
          </Card>
          <Card className="surface-shadow rounded-[1.75rem] border-black/10">
            <CardHeader>
              <CardTitle>Enquiry form</CardTitle>
            </CardHeader>
            <CardContent>
              <LeadForm service="Contact page enquiry" source="Contact page" />
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
