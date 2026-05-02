import type { Metadata } from "next";

import { BookingDialog } from "@/components/forms/booking-dialog";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bookingProducts } from "@/content/site";

export const metadata: Metadata = {
  title: "Online Bookings",
  description:
    "Book a plumbing, heating, boiler service or landlord gas safety enquiry through a simple online form.",
};

export default function OnlineBookingsPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="round-panel mx-auto max-w-7xl bg-[#fff8e7] p-6 sm:p-10 lg:p-14">
          <Badge className="mb-6 rounded-full bg-white px-4 py-2 text-slate-950 shadow-sm hover:bg-white">Online bookings</Badge>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-7xl">
            Choose a service and send a booking enquiry.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-pretty text-slate-700">
            The assistant is available on every page, but this route is for visitors who already know what they need.
          </p>
        </div>
      </section>

      <Section
        title="Booking enquiry options"
        description="Each card opens a short form with the service pre-filled, ready to send to email and Google Sheets when credentials are added."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {bookingProducts.map((product) => (
            <Card key={product.title} className="surface-shadow rounded-[1.75rem] border-black/10 transition-transform duration-200 hover:-translate-y-1">
              <CardHeader>
                <span className="mb-4 grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <product.icon aria-hidden="true" />
                </span>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <p className="text-sm leading-6 text-muted-foreground">{product.description}</p>
                <p className="text-sm">
                  <span className="font-semibold">Ideal for: </span>
                  {product.idealFor}
                </p>
                <BookingDialog service={product.title} />
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
