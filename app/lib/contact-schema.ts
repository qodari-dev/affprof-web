import { z } from "zod";

export const CONTACT_SUBJECTS = [
  "general",
  "billing",
  "technical",
  "feature",
  "deletion",
  "press",
  "other",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export const CONTACT_SUBJECT_LABELS: Record<ContactSubject, string> = {
  general: "General question",
  billing: "Billing or subscription",
  technical: "Technical issue / Bug report",
  feature: "Feature request",
  deletion: "Account deletion",
  press: "Press / Partnership",
  other: "Other",
};

export const NAME_MAX = 120;
export const EMAIL_MAX = 254;
export const MESSAGE_MAX = 5000;

export const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "required" })
    .max(NAME_MAX, { message: "tooLong" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "required" })
    .max(EMAIL_MAX, { message: "tooLong" })
    .email({ message: "email" }),
  subject: z.enum(CONTACT_SUBJECTS, { message: "subject" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "required" })
    .max(MESSAGE_MAX, { message: "tooLong" }),
  honeypot: z.string().max(0).optional().or(z.literal("")),
  lang: z.enum(["en", "es"]).optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "subject" | "message", string>
>;
