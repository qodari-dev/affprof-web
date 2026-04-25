"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CONTACT_SUBJECTS,
  ContactSchema,
  EMAIL_MAX,
  MESSAGE_MAX,
  NAME_MAX,
  type ContactFieldErrors,
} from "../lib/contact-schema";

type FieldErrorKey = "required" | "email" | "subject" | "tooLong";

type FormDict = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  subjects: Record<(typeof CONTACT_SUBJECTS)[number], string>;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  required: string;
  successTitle: string;
  successBody: string;
  errorGeneric: string;
  errorRateLimit: string;
  errorInvalid: string;
  fieldErrors: Record<FieldErrorKey, string>;
  consentPrefix: string;
  consentLink: string;
};

type Status = "idle" | "submitting" | "success" | "error";
type FormField = "name" | "email" | "subject" | "message";

export default function ContactForm({
  dict,
  lang,
}: {
  dict: FormDict;
  lang: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  function localizeError(code: string | undefined): string {
    if (code && code in dict.fieldErrors) {
      return dict.fieldErrors[code as FieldErrorKey];
    }
    return dict.fieldErrors.required;
  }

  function readForm(form: HTMLFormElement) {
    const data = new FormData(form);
    return {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
      honeypot: String(data.get("company") ?? ""),
      lang,
    };
  }

  function validate(payload: ReturnType<typeof readForm>): {
    ok: true;
    data: ReturnType<typeof readForm>;
  } | {
    ok: false;
    errors: ContactFieldErrors;
  } {
    const result = ContactSchema.safeParse(payload);
    if (result.success) return { ok: true, data: payload };

    const errors: ContactFieldErrors = {};
    for (const issue of result.error.issues) {
      const path = issue.path[0];
      if (typeof path !== "string") continue;
      if (path === "honeypot" || path === "lang") continue;
      const field = path as FormField;
      if (!errors[field]) {
        errors[field] = localizeError(issue.message);
      }
    }
    return { ok: false, errors };
  }

  function handleBlur(event: React.FocusEvent<HTMLFormElement>) {
    const target = event.target as HTMLElement;
    if (!(target instanceof HTMLInputElement) &&
        !(target instanceof HTMLTextAreaElement) &&
        !(target instanceof HTMLSelectElement)) return;

    const name = target.name as FormField;
    if (!["name", "email", "subject", "message"].includes(name)) return;

    const form = event.currentTarget;
    const payload = readForm(form);

    const fieldSchema = ContactSchema.shape[name];
    const value = payload[name];
    const result = fieldSchema.safeParse(value);

    setFieldErrors((prev) => {
      const next = { ...prev };
      if (result.success) {
        delete next[name];
      } else {
        next[name] = localizeError(result.error.issues[0]?.message);
      }
      return next;
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLFormElement>) {
    const target = event.target as HTMLElement;
    if (!(target instanceof HTMLInputElement) &&
        !(target instanceof HTMLTextAreaElement) &&
        !(target instanceof HTMLSelectElement)) return;

    const name = target.name as FormField;
    if (!fieldErrors[name]) return;

    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const payload = readForm(form);

    const validation = validate(payload);
    if (!validation.ok) {
      setFieldErrors(validation.errors);
      setStatus("error");
      setErrorMessage(dict.errorInvalid);
      const firstField = (
        ["name", "email", "subject", "message"] as FormField[]
      ).find((f) => validation.errors[f]);
      if (firstField) {
        const el = form.elements.namedItem(firstField);
        if (el instanceof HTMLElement) el.focus();
      }
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const body = await response.json().catch(() => ({}));
      const code = body?.error;
      if (code === "rate_limit") setErrorMessage(dict.errorRateLimit);
      else if (code === "invalid") setErrorMessage(dict.errorInvalid);
      else setErrorMessage(dict.errorGeneric);
      setStatus("error");
    } catch {
      setErrorMessage(dict.errorGeneric);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[28px] border border-primary/25 bg-primary/8 p-8 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          {dict.successTitle}
        </h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          {dict.successBody}
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      onBlur={handleBlur}
      onChange={handleChange}
      className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-8 space-y-5"
      noValidate
    >
      <div aria-hidden className="absolute -left-[9999px] top-auto">
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <Field
        label={dict.nameLabel}
        htmlFor="name"
        required={dict.required}
        error={fieldErrors.name}
      >
        <input
          id="name"
          name="name"
          type="text"
          maxLength={NAME_MAX}
          placeholder={dict.namePlaceholder}
          autoComplete="name"
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          className={inputClass(!!fieldErrors.name)}
        />
      </Field>

      <Field
        label={dict.emailLabel}
        htmlFor="email"
        required={dict.required}
        error={fieldErrors.email}
      >
        <input
          id="email"
          name="email"
          type="email"
          maxLength={EMAIL_MAX}
          placeholder={dict.emailPlaceholder}
          autoComplete="email"
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          className={inputClass(!!fieldErrors.email)}
        />
      </Field>

      <Field
        label={dict.subjectLabel}
        htmlFor="subject"
        required={dict.required}
        error={fieldErrors.subject}
      >
        <select
          id="subject"
          name="subject"
          defaultValue=""
          aria-invalid={fieldErrors.subject ? true : undefined}
          aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
          className={`${inputClass(!!fieldErrors.subject)} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20stroke%3D%22%2374797f%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%221%201%206%206%2011%201%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_8px] bg-[right_18px_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>
            {dict.subjectPlaceholder}
          </option>
          {CONTACT_SUBJECTS.map((key) => (
            <option key={key} value={key}>
              {dict.subjects[key]}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label={dict.messageLabel}
        htmlFor="message"
        required={dict.required}
        error={fieldErrors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={MESSAGE_MAX}
          placeholder={dict.messagePlaceholder}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={`${inputClass(!!fieldErrors.message)} resize-y min-h-[140px]`}
        />
      </Field>

      {status === "error" && errorMessage ? (
        <p
          role="alert"
          className="rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {errorMessage}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? dict.submitting : dict.submit}
        </button>
        <p className="text-xs text-text-muted">
          {dict.consentPrefix}{" "}
          <Link
            href={`/${lang}/privacy`}
            className="text-primary-light underline-offset-2 hover:underline"
          >
            {dict.consentLink}
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="flex items-center justify-between text-sm font-medium text-text-primary"
      >
        <span>{label}</span>
        <span className="text-[11px] uppercase tracking-[0.18em] text-text-muted">
          {required}
        </span>
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p
          id={`${htmlFor}-error`}
          className="mt-2 text-xs text-red-300"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  const base =
    "w-full rounded-2xl bg-white/[0.03] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:outline-none focus:ring-2";
  if (hasError) {
    return `${base} border border-red-500/40 focus:border-red-500/60 focus:ring-red-500/20`;
  }
  return `${base} border border-white/8 focus:border-primary/40 focus:ring-primary/20`;
}
