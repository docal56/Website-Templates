import { site } from "@/content/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: site.legalName,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
      addressRegion: site.region,
      addressCountry: "GB",
    },
    areaServed: site.areas,
    openingHours: "Mo-Fr 08:00-17:00",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(service: { title: string; summary: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    areaServed: site.areas,
    provider: {
      "@type": "LocalBusiness",
      name: site.legalName,
    },
  };
}
