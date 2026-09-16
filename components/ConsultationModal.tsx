"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useConsultation } from "./ConsultationContext";

type Props = {
  title: string;
  description: string;
  bottleneckLabel: string;
  bottleneckPlaceholder: string;
  footerNote: string;
  showExtraFields?: boolean;
};

const WHATSAPP_FALLBACK =
  "https://wa.me/971566713442?text=Hi%20Spark%20AI%2C%20I%27d%20like%20a%20free%20consultation.";

const focusableSelector =
  'button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

export function ConsultationModal({
  title,
  description,
  bottleneckLabel,
  bottleneckPlaceholder,
  footerNote,
  showExtraFields = false,
}: Props) {
  const { isOpen, closeConsultation } = useConsultation();
  const pathname = usePathname();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const [status, setStatus] = useState<{
    type: "" | "error" | "success";
    message: string;
    html?: boolean;
  }>({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      lastFocused.current = document.activeElement as HTMLElement | null;
      document.body.classList.add("modal-open");
      const first = panelRef.current?.querySelector(
        focusableSelector
      ) as HTMLElement | null;
      first?.focus();
    } else {
      document.body.classList.remove("modal-open");
      lastFocused.current?.focus?.();
    }
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeConsultation();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const items = [
        ...panelRef.current.querySelectorAll(focusableSelector),
      ] as HTMLElement[];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeConsultation]);

  const clearFieldError = (name: string) => {
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const errors: Record<string, string> = {};
    const fields = form.querySelectorAll("input,select,textarea");
    fields.forEach((node) => {
      const field = node as HTMLInputElement;
      if (!field.checkValidity()) {
        const message = field.validity.valueMissing
          ? "This field is required."
          : field.validity.typeMismatch
            ? "Enter a valid email address."
            : field.validity.patternMismatch
              ? "Enter a valid phone number."
              : field.validity.tooShort
                ? `Enter at least ${field.minLength} characters.`
                : "Check this field.";
        errors[field.name] = message;
      }
    });
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      setStatus({
        type: "error",
        message: "Please check the highlighted fields.",
      });
      const firstInvalid = form.querySelector(
        '[aria-invalid="true"]'
      ) as HTMLElement | null;
      firstInvalid?.focus();
      return;
    }

    setFieldErrors({});
    setSubmitting(true);
    setStatus({ type: "", message: "" });
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.source_page = pathname || "/";

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Submission failed.");
      setStatus({
        type: "success",
        message: "Thank you. Your consultation request has been received.",
      });
      form.reset();
      setTimeout(() => closeConsultation(), 1200);
    } catch {
      setStatus({
        type: "error",
        html: true,
        message: `We could not submit the form right now. Please try again or <a href="${WHATSAPP_FALLBACK}" target="_blank" rel="noopener">continue on WhatsApp</a>.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={`modal${isOpen ? " open" : ""}`}
      id="consultationModal"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeConsultation();
      }}
    >
      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className="modal-panel consultation-panel"
        role="dialog"
        ref={panelRef}
      >
        <button
          aria-label="Close consultation form"
          className="modal-close"
          type="button"
          onClick={closeConsultation}
        >
          ×
        </button>
        <div className="eyebrow">Free Consultation</div>
        <h2 id={titleId}>{title}</h2>
        <p>{description}</p>
        <form className="consultation-form" noValidate onSubmit={onSubmit}>
          <div className="form-grid">
            <label>
              <span>Name *</span>
              <input
                autoComplete="name"
                minLength={2}
                name="name"
                placeholder="Your name"
                required
                aria-invalid={fieldErrors.name ? true : undefined}
                onInput={() => clearFieldError("name")}
              />
              {fieldErrors.name ? (
                <span className="field-error">{fieldErrors.name}</span>
              ) : null}
            </label>
            <label>
              <span>Company *</span>
              <input
                autoComplete="organization"
                minLength={2}
                name="company"
                placeholder="Company name"
                required
                aria-invalid={fieldErrors.company ? true : undefined}
                onInput={() => clearFieldError("company")}
              />
              {fieldErrors.company ? (
                <span className="field-error">{fieldErrors.company}</span>
              ) : null}
            </label>
            <label>
              <span>Email *</span>
              <input
                autoComplete="email"
                name="email"
                placeholder="name@company.com"
                required
                type="email"
                aria-invalid={fieldErrors.email ? true : undefined}
                onInput={() => clearFieldError("email")}
              />
              {fieldErrors.email ? (
                <span className="field-error">{fieldErrors.email}</span>
              ) : null}
            </label>
            <label>
              <span>Phone / WhatsApp</span>
              <input
                autoComplete="tel"
                inputMode="tel"
                name="phone"
                pattern="[+0-9() .-]{7,20}"
                placeholder="+971 50 000 0000"
                aria-invalid={fieldErrors.phone ? true : undefined}
                onInput={() => clearFieldError("phone")}
              />
              {fieldErrors.phone ? (
                <span className="field-error">{fieldErrors.phone}</span>
              ) : null}
            </label>
            {showExtraFields ? (
              <>
                <label>
                  <span>Monthly lead volume</span>
                  <select name="volume" onChange={() => clearFieldError("volume")}>
                    <option value="">Select</option>
                    <option>Under 100</option>
                    <option>100–500</option>
                    <option>500–2,000</option>
                    <option>2,000+</option>
                  </select>
                </label>
                <label>
                  <span>Main lead sources</span>
                  <input
                    maxLength={160}
                    name="sources"
                    placeholder="Meta, Google, WhatsApp, website..."
                    onInput={() => clearFieldError("sources")}
                  />
                </label>
              </>
            ) : null}
            <label className="full">
              <span>{bottleneckLabel}</span>
              <textarea
                maxLength={1000}
                name="bottleneck"
                placeholder={bottleneckPlaceholder}
                onInput={() => clearFieldError("bottleneck")}
              />
            </label>
          </div>
          {status.html ? (
            <div
              aria-live="polite"
              className={`form-status${status.type ? ` ${status.type}` : ""}`}
              role="status"
              dangerouslySetInnerHTML={{ __html: status.message }}
            />
          ) : (
            <div
              aria-live="polite"
              className={`form-status${status.type ? ` ${status.type}` : ""}`}
              role="status"
            >
              {status.message}
            </div>
          )}
          <div className="form-footer">
            <span>{footerNote}</span>
            <button
              className="btn btn-dark"
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
            >
              {submitting ? "Sending…" : "Request Free Consultation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
