import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Star } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { Section } from "@/components/site/section";
import { VisualPanel } from "@/components/site/visual-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  credentials,
  faqs,
  leadBenefits,
  metrics,
  processSteps,
  services,
  site,
  testimonials,
  trustPoints,
} from "@/content/site";
import { faqSchema, localBusinessSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema(), faqSchema(faqs)]),
        }}
      />
      <section className="relative overflow-hidden border-b border-black/10 bg-[#fff8e7]">
        <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#0f766e,#fbbf24,#111827)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="mb-5 w-fit rounded-full bg-white text-slate-950 shadow-sm hover:bg-white">
              Demo concept for Mayne Gas Heating
            </Badge>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-7xl">
              Heating, plumbing and gas enquiries made easier to book.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-pretty text-slate-700">
              A modern local service website concept for Grimsby customers, with service pages, booking enquiries,
              local SEO and an ElevenLabs assistant available on every page.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="pressable bg-slate-950 text-white hover:bg-slate-800">
                <Link href="/online-bookings">
                  Book an enquiry
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="pressable border-black/15 bg-white">
                <a href={`tel:${site.phone.replaceAll(" ", "")}`}>
                  <Phone aria-hidden="true" />
                  Call {site.phone}
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-black/10 pt-6">
              <div className="flex -space-x-2">
                {["M", "G", "H", "L"].map((letter) => (
                  <span
                    key={letter}
                    className="grid size-10 place-items-center rounded-full border-2 border-[#fff8e7] bg-white text-sm font-semibold shadow-sm"
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-slate-700">Review-led trust area for local customers</p>
              </div>
            </div>
          </div>
          <VisualPanel label="Boiler and plumbing booking flow" />
        </div>
      </section>

      <section className="border-b border-black/10 bg-white py-6">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {metrics.map((metric) => (
            <div key={metric.value} className="flex items-end justify-between rounded-lg bg-[#fff8e7] px-5 py-4">
              <span className="text-3xl font-semibold tabular-nums tracking-tight">{metric.value}</span>
              <span className="max-w-40 text-right text-sm leading-5 text-slate-600">{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Section
        eyebrow="Services"
        title="One local trades template, shaped around real customer intent."
        description="The site makes the main jobs easy to understand, compare and enquire about without burying the visitor in generic trade copy."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.slug} className="surface-shadow rounded-lg border-black/10 transition-transform duration-200 hover:-translate-y-1">
              <CardHeader>
                <span className="mb-4 grid size-11 place-items-center rounded-md bg-primary/10 text-primary">
                  <service.icon aria-hidden="true" />
                </span>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{service.summary}</p>
                <Button asChild className="pressable mt-5 w-full" variant="outline">
                  <Link href={`/${service.slug}`}>View page</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-black/10 bg-[#f3efe4]"
        eyebrow="Process"
        title="Simple steps from visitor interest to useful lead."
        description="Roundsite-style structure works well here because local service customers need confidence, clarity and a short route to action."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Card key={step.title} className="surface-shadow rounded-lg border-black/10 bg-white">
              <CardHeader>
                <span className="mb-4 grid size-11 place-items-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {step.points.map((point) => (
                    <span key={point} className="rounded-full bg-[#fff8e7] px-3 py-1 text-xs font-medium">
                      {point}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-black/10 bg-white"
        eyebrow="Lead capture"
        title="Bookings and the assistant work together."
        description="Visitors who know what they want can submit a structured booking enquiry. Visitors who are unsure can use the assistant on every page."
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="surface-shadow rounded-lg border-black/10 bg-[#fff8e7]">
            <CardHeader>
              <CardTitle>What each lead can capture</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {leadBenefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-md bg-emerald-50 text-emerald-700">
                    <benefit.icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{benefit.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="surface-shadow rounded-lg border-black/10">
            <CardHeader>
              <CardTitle>Quick enquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <LeadForm service="Homepage enquiry" source="Homepage form" compact />
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Local SEO" title="Built around Grimsby search behaviour.">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="surface-shadow rounded-lg border-black/10 lg:col-span-2">
            <CardHeader>
              <CardTitle>Areas served</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {site.areas.map((area) => (
                <span key={area} className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm shadow-sm">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {area}
                </span>
              ))}
            </CardContent>
          </Card>
          <Card className="surface-shadow rounded-lg border-black/10 bg-slate-950 text-white">
            <CardHeader>
              <CardTitle>Trust signals</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 text-sm text-slate-300">
              {credentials.map((credential) => (
                <span key={credential}>{credential}</span>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-[#111827] text-white" eyebrow="Proof" title="A sharper sales asset for outreach.">
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.quote} className="rounded-lg border-white/10 bg-white text-slate-950">
              <CardContent className="pt-6">
                <p className="text-lg leading-8">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm text-slate-500">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions covered for customers and prospects.">
        <Accordion type="single" collapsible className="max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="surface-shadow mx-auto grid max-w-7xl gap-8 rounded-lg border border-black/10 bg-slate-950 p-8 text-white md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-300">Ready for outreach</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              A sharper demo for showing what an SEO-led lead capture site could do.
            </h2>
          </div>
          <Button asChild size="lg" className="pressable bg-white text-slate-950 hover:bg-slate-100">
            <Link href="/online-bookings">
              View booking flow
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
