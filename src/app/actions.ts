"use server";

export type LeadState = {
  ok: boolean;
  message: string;
};

const defaultState: LeadState = {
  ok: false,
  message: "",
};

export async function submitLead(
  previousState: LeadState = defaultState,
  formData: FormData,
): Promise<LeadState> {
  void previousState;

  const payload = {
    service: String(formData.get("service") ?? "General enquiry"),
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    postcode: String(formData.get("postcode") ?? ""),
    preferredDate: String(formData.get("preferredDate") ?? ""),
    preferredTime: String(formData.get("preferredTime") ?? ""),
    message: String(formData.get("message") ?? ""),
    source: String(formData.get("source") ?? "Website"),
  };

  if (!payload.name || !payload.phone) {
    return {
      ok: false,
      message: "Please add a name and phone number so the team can respond.",
    };
  }

  const tasks: Promise<unknown>[] = [];

  if (process.env.RESEND_API_KEY && process.env.LEAD_TO_EMAIL) {
    tasks.push(sendEmail(payload));
  }

  if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      }),
    );
  }

  if (tasks.length > 0) {
    await Promise.allSettled(tasks);
  }

  return {
    ok: true,
    message:
      "Thanks, your enquiry has been captured. For the live site this would be sent to email and Google Sheets.",
  };
}

async function sendEmail(payload: Record<string, string>) {
  const body = Object.entries(payload)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${value || "Not provided"}</p>`)
    .join("");

  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? "Website Demo <onboarding@resend.dev>",
      to: process.env.LEAD_TO_EMAIL,
      subject: `New website enquiry: ${payload.service}`,
      html: body,
    }),
  });
}
