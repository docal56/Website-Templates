import {
  BadgeCheck,
  Bath,
  CalendarCheck,
  Flame,
  Gauge,
  Home,
  ShieldCheck,
  ShowerHead,
  Wrench,
  Zap,
} from "lucide-react";

export const site = {
  name: "Mayne Gas Heating",
  legalName: "Mayne Gas Heating Ltd",
  description:
    "A modern demo website for a Grimsby plumbing, heating, gas and renewables company.",
  location: "Grimsby",
  region: "Lincolnshire",
  areas: ["Grimsby", "Cleethorpes", "Louth", "Immingham", "Waltham", "Scartho"],
  phone: "01472 000 000",
  email: "hello@example.co.uk",
  address: "Grimsby, Lincolnshire",
  hours: "Mon-Fri 8:00am-5:00pm",
  elevenLabsAgentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "",
};

export const navItems = [
  { label: "Boilers", href: "/boiler-installation" },
  { label: "Servicing", href: "/boiler-servicing-repairs" },
  { label: "Plumbing", href: "/plumbing" },
  { label: "Landlords", href: "/landlords" },
  { label: "Online bookings", href: "/online-bookings" },
  { label: "Contact", href: "/contact" },
];

export const trustPoints = [
  "Established local heating specialists",
  "Gas Safe registered engineers",
  "Boiler, plumbing and landlord support",
  "Clear booking enquiries and fast callbacks",
];

export const credentials = [
  "Gas Safe registered",
  "Worcester Bosch accredited",
  "Vaillant accredited",
  "WaterSafe plumbing standards",
  "MCS renewables knowledge",
  "Buy With Confidence style trust signal",
];

export const services = [
  {
    slug: "boiler-installation",
    title: "Boiler installation",
    eyebrow: "New boilers",
    summary:
      "Help homeowners choose and book a modern, efficient boiler installation with a clear survey-first process.",
    icon: Flame,
    hero:
      "A cleaner route from boiler quote to installation, with survey-led advice and clear next steps.",
    bullets: [
      "Replacement boiler surveys",
      "Combi, system and regular boiler guidance",
      "Warranty-led installation messaging",
      "Finance-friendly enquiry path",
    ],
    seoTitle: "Boiler Installation in Grimsby | Mayne Gas Heating Demo",
    seoDescription:
      "Book a boiler installation survey in Grimsby and nearby Lincolnshire areas with a modern local heating website demo.",
  },
  {
    slug: "boiler-servicing-repairs",
    title: "Boiler servicing & repairs",
    eyebrow: "Servicing and faults",
    summary:
      "Make annual servicing, fault finding and repair enquiries easy for homeowners, landlords and small businesses.",
    icon: Gauge,
    hero:
      "Fast, organised boiler servicing and repair enquiries for homes and rental properties.",
    bullets: [
      "Annual boiler service enquiries",
      "Boiler fault and breakdown requests",
      "Gas fire and heating checks",
      "Reminder-friendly service messaging",
    ],
    seoTitle: "Boiler Servicing & Repairs in Grimsby | Mayne Demo",
    seoDescription:
      "A conversion-focused boiler servicing and repair page for Grimsby heating customers.",
  },
  {
    slug: "plumbing",
    title: "General plumbing",
    eyebrow: "Plumbing work",
    summary:
      "Turn smaller plumbing jobs into structured enquiries, from leaks and taps to bathroom installation work.",
    icon: ShowerHead,
    hero:
      "A practical plumbing page for everyday repairs, upgrades and planned bathroom work.",
    bullets: [
      "Leaks, taps, toilets and pipework",
      "Bathroom installation enquiries",
      "Shower, radiator and appliance plumbing",
      "Clear form fields for job details and postcode",
    ],
    seoTitle: "General Plumbing in Grimsby | Mayne Demo",
    seoDescription:
      "A modern local plumbing page for repairs, bathroom work and planned plumbing jobs around Grimsby.",
  },
  {
    slug: "landlords",
    title: "Landlord gas safety",
    eyebrow: "Rental compliance",
    summary:
      "Give landlords a clearer route for gas safety checks, servicing, compliance records and recurring work.",
    icon: ShieldCheck,
    hero:
      "A focused landlord page built around compliance, repeat bookings and fast certificate enquiries.",
    bullets: [
      "Landlord gas safety certificate enquiries",
      "Boiler service and compliance reminders",
      "Rental property heating checks",
      "Useful for portfolio and single-property landlords",
    ],
    seoTitle: "Landlord Gas Safety Certificates in Grimsby | Mayne Demo",
    seoDescription:
      "A landlord-focused gas safety and compliance page for rental properties in Grimsby and Lincolnshire.",
  },
];

export const bookingProducts = [
  {
    title: "Boiler service",
    description: "Annual boiler service enquiry for homeowners and landlords.",
    idealFor: "Keeping heating safe, efficient and warranty-ready.",
    icon: CalendarCheck,
  },
  {
    title: "Boiler installation survey",
    description: "Request a survey for a replacement or new boiler installation.",
    idealFor: "Comparing options before committing to a quote.",
    icon: Flame,
  },
  {
    title: "Plumbing consultation",
    description: "Tell the team about leaks, repairs, bathroom work or planned upgrades.",
    idealFor: "Jobs that need photos, notes and a callback before booking.",
    icon: Wrench,
  },
  {
    title: "Gas fire consultation",
    description: "Book a conversation about gas fire servicing or repair work.",
    idealFor: "Homeowners who need a safe, qualified gas engineer.",
    icon: Home,
  },
  {
    title: "Landlord gas safety certificate",
    description: "Start a certificate enquiry for a rental property.",
    idealFor: "Landlords who need organised compliance support.",
    icon: ShieldCheck,
  },
  {
    title: "Heating system check",
    description: "Request help with radiators, controls, pressure or uneven heating.",
    idealFor: "Diagnosing heating issues before they become urgent.",
    icon: Gauge,
  },
  {
    title: "Bathroom plumbing enquiry",
    description: "Start a planned bathroom, shower or pipework enquiry.",
    idealFor: "Renovation and installation projects needing a site visit.",
    icon: Bath,
  },
  {
    title: "Electrical partner referral",
    description: "A placeholder card showing how the template can support trade partners.",
    idealFor: "Future electrician versions of this same trades theme.",
    icon: Zap,
  },
];

export const faqs = [
  {
    question: "Can customers book directly online?",
    answer:
      "For the demo, booking cards open an enquiry form. The business can then confirm the job, timing and pricing before anything is committed.",
  },
  {
    question: "Where does the enquiry go?",
    answer:
      "The MVP supports email notifications and an optional Google Sheets webhook, so every form submission can be tracked simply.",
  },
  {
    question: "What does the assistant do?",
    answer:
      "The ElevenLabs assistant is available on every page and can help qualify the visitor, collect job details and route them toward the right service.",
  },
  {
    question: "Is this copied from the current Mayne website?",
    answer:
      "No. The service mix and business context are inspired by the public website, but the copy, structure and design are original demo work.",
  },
];

export const testimonials = [
  {
    quote:
      "The booking journey is much clearer. Visitors can choose the right service before they call.",
    name: "Demo review",
  },
  {
    quote:
      "A stronger local homepage with boiler, plumbing and landlord services all easy to find.",
    name: "Demo review",
  },
];

export const leadBenefits = [
  { label: "Service selected", icon: BadgeCheck },
  { label: "Postcode captured", icon: BadgeCheck },
  { label: "Urgency understood", icon: BadgeCheck },
  { label: "Callback details logged", icon: BadgeCheck },
];
