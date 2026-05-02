"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { submitLead, type LeadState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type LeadFormProps = {
  service?: string;
  source?: string;
  compact?: boolean;
};

const initialState: LeadState = {
  ok: false,
  message: "",
};

export function LeadForm({
  service = "General enquiry",
  source = "Website form",
  compact = false,
}: LeadFormProps) {
  const [state, formAction] = useActionState(submitLead, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <input name="service" type="hidden" value={service} />
      <input name="source" type="hidden" value={source} />

      <div className="grid gap-2">
        <Label htmlFor={`${source}-name`}>Name</Label>
        <Input id={`${source}-name`} name="name" placeholder="Your name" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor={`${source}-phone`}>Phone</Label>
          <Input id={`${source}-phone`} name="phone" placeholder="Phone number" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${source}-email`}>Email</Label>
          <Input id={`${source}-email`} name="email" type="email" placeholder="Email address" />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="grid gap-2">
          <Label htmlFor={`${source}-postcode`}>Postcode</Label>
          <Input id={`${source}-postcode`} name="postcode" placeholder="DN..." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${source}-date`}>Preferred date</Label>
          <Input id={`${source}-date`} name="preferredDate" type="date" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${source}-time`}>Preferred time</Label>
          <Input id={`${source}-time`} name="preferredTime" placeholder="Morning" />
        </div>
      </div>

      {!compact ? (
        <div className="grid gap-2">
          <Label htmlFor={`${source}-message`}>Job details</Label>
          <Textarea
            id={`${source}-message`}
            name="message"
            placeholder="Tell us what you need help with."
            rows={5}
          />
        </div>
      ) : null}

      {state.message ? (
        <p
          className={`rounded-md border px-3 py-2 text-sm ${
            state.ok
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-amber-200 bg-amber-50 text-amber-950"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="pressable w-full bg-slate-950 text-white hover:bg-slate-800 sm:w-fit">
      {pending ? "Sending..." : "Send enquiry"}
    </Button>
  );
}
