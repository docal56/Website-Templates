import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { Section } from "@/components/site/section";
import { VisualPanel } from "@/components/site/visual-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { credentials, faqs, leadBenefits, services, site, testimonials, trustPoints } from "@/content/site";
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
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,118,110,0.45),transparent_42%),radial-gradient(circle_at_82%_18%,rgba(245,158,11,0.22),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <Badge className="mb-5 w-fit bg-amber-400 text-slate-950 hover:bg-amber-400">
              Demo concept for Mayne Gas Heating
            </Badge>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              Heating, plumbing and gas enquiries made easier to book.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              A modern local service website concept for Grimsby customers, with service pages, booking enquiries,
              local SEO and an ElevenLabs assistant available on every page.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/online-bookings">
                  Book an enquiry
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={`tel:${site.phone.replaceAll(" ", "")}`}>
                  <Phone aria-hidden="true" />
                  Call {site.phone}
                </a>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="size-4 text-amber-300" aria-hidden="true" />
                  {point}
                </div>
              ))}
            </div>
          </div>
          <VisualPanel label="Boiler and plumbing booking flow" />
        </div>
      </section>

      <Section
        eyebrow="Services"
        title="One local trades template, shaped around real customer intent."
        description="The site makes the main jobs easy to understand, compare and enquire about without burying the visitor in generic trade copy."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.slug} className="rounded-lg">
              <CardHeader>
                <span className="mb-4 grid size-11 place-items-center rounded-md bg-primary/10 text-primary">
                  <service.icon aria-hidden="true" />
                </span>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{service.summary}</p>
                <Button asChild className="mt-5 w-full" variant="outline">
                  <Link href={`/${service.slug}`}>View page</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="bg-slate-50"
        eyebrow="Lead capture"
        title="Bookings and the assistant work together."
        description="Visitors who know what they want can submit a structured booking enquiry. Visitors who are unsure can use the assistant on every page."
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-lg">
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
          <Card className="rounded-lg">
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
          <Card className="rounded-lg lg:col-span-2">
            <CardHeader>
              <CardTitle>Areas served</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {site.areas.map((area) => (
                <span key={area} className="inline-flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {area}
                </span>
              ))}
            </CardContent>
          </Card>
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle>Trust signals</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 text-sm text-muted-foreground">
              {credentials.map((credential) => (
                <span key={credential}>{credential}</span>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Proof" title="A sharper sales asset for outreach.">
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.quote} className="rounded-lg border-white/10 bg-white/10 text-white">
              <CardContent className="pt-6">
                <p className="text-lg leading-8">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm text-slate-300">{testimonial.name}</p>
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
    </>
  );
}
