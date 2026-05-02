import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { Section } from "@/components/site/section";
import { VisualPanel } from "@/components/site/visual-panel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services, site } from "@/content/site";
import { serviceSchema } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
      />
      <section className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="round-panel mx-auto grid max-w-7xl gap-6 overflow-hidden bg-[#fff8e7] p-4 sm:p-6 lg:grid-cols-[1fr_0.9fr] lg:p-8">
          <div className="flex flex-col justify-center rounded-[1.75rem] bg-white p-6 sm:p-8 lg:p-12">
            <p className="mb-4 w-fit rounded-full bg-[#f3efe4] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary">
              {service.eyebrow}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-7xl">
              {service.title} in {site.location}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-pretty text-slate-700">{service.hero}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="pressable pill-button bg-slate-950 text-white hover:bg-slate-800">
                <Link href="/online-bookings">
                  Book enquiry
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="pressable pill-button border-black/15 bg-white">
                <Link href="/contact">Ask a question</Link>
              </Button>
            </div>
          </div>
          <VisualPanel label={`${service.title} enquiry`} variant={service.slug === "plumbing" ? "plumbing" : "boiler"} />
        </div>
      </section>

      <Section
        title={`A focused page for ${service.title.toLowerCase()} leads.`}
        description={service.summary}
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="surface-shadow rounded-[1.75rem] border-black/10 bg-[#fff8e7]">
            <CardHeader>
              <CardTitle>What this page supports</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {service.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{bullet}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="surface-shadow rounded-[1.75rem] border-black/10">
            <CardHeader>
              <CardTitle>Request a callback</CardTitle>
            </CardHeader>
            <CardContent>
              <LeadForm service={service.title} source={`${service.title} page`} />
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
