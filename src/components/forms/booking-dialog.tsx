"use client";

import { CalendarPlus } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type BookingDialogProps = {
  service: string;
};

export function BookingDialog({ service }: BookingDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="pressable pill-button w-full bg-slate-950 text-white hover:bg-slate-800" size="sm">
          <CalendarPlus aria-hidden="true" />
          Book enquiry
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{service}</DialogTitle>
          <DialogDescription>
            Send the basic details and the team can confirm timing, suitability and next steps.
          </DialogDescription>
        </DialogHeader>
        <LeadForm service={service} source={`Booking - ${service}`} />
      </DialogContent>
    </Dialog>
  );
}
