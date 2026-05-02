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
      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Contact and callback enquiries.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            A simple contact route for visitors who need a callback, quote or advice before booking.
          </p>
        </div>
      </section>

      <Section title="Send the details once, route them clearly.">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="rounded-lg">
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
          <Card className="rounded-lg">
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
