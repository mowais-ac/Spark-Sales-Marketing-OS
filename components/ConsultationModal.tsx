"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useConsultation } from "./ConsultationContext";
import { useLanguage } from "./LanguageContext";
import type { PageVariant } from "@/lib/pageVariant";
import type { MessageKey } from "@/lib/i18n/messages";

type Props = {
  variant: PageVariant;
  showExtraFields?: boolean;
};

const WHATSAPP_FALLBACK =
  "https://wa.me/971566713442?text=Hi%20Spark%20AI%2C%20I%27d%20like%20a%20free%20consultation.";

const focusableSelector =
  'button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

const variantKeys: Record<
  PageVariant,
  {
    title: MessageKey;
    desc: MessageKey;
    bottleneck: MessageKey;
    bottleneckPh: MessageKey;
    note: MessageKey;
  }
> = {
  home: {
    title: "modal.home.title",
    desc: "modal.home.desc",
    bottleneck: "modal.home.bottleneck",
    bottleneckPh: "modal.home.bottleneckPh",
    note: "modal.home.note",
  },
  aiAgent: {
    title: "modal.ai.title",
    desc: "modal.ai.desc",
    bottleneck: "modal.ai.bottleneck",
    bottleneckPh: "modal.ai.bottleneckPh",
    note: "modal.ai.note",
  },
  humanAgents: {
    title: "modal.human.title",
    desc: "modal.human.desc",
    bottleneck: "modal.human.bottleneck",
    bottleneckPh: "modal.human.bottleneckPh",
    note: "modal.human.note",
  },
};

export function ConsultationModal({
  variant,
  showExtraFields = false,
}: Props) {
  const { isOpen, closeConsultation } = useConsultation();
  const { t } = useLanguage();
  const pathname = usePathname();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const keys = variantKeys[variant];
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
          ? t("modal.required")
          : field.validity.typeMismatch
            ? t("modal.invalidEmail")
            : field.validity.patternMismatch
              ? t("modal.invalidPhone")
              : field.validity.tooShort
                ? t("modal.tooShort").replace("{n}", String(field.minLength))
                : t("modal.checkField");
        errors[field.name] = message;
      }
    });
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      setStatus({ type: "error", message: t("modal.checkFields") });
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
      setStatus({ type: "success", message: t("modal.success") });
      form.reset();
      setTimeout(() => closeConsultation(), 1200);
    } catch {
      setStatus({
        type: "error",
        html: true,
        message: `${t("modal.failPrefix")} <a href="${WHATSAPP_FALLBACK}" target="_blank" rel="noopener">${t("modal.whatsapp")}</a>.`,
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
          aria-label={t("modal.close")}
          className="modal-close"
          type="button"
          onClick={closeConsultation}
        >
          ×
        </button>
        <div className="eyebrow">{t("modal.eyebrow")}</div>
        <h2 id={titleId}>{t(keys.title)}</h2>
        <p>{t(keys.desc)}</p>
        <form className="consultation-form" noValidate onSubmit={onSubmit}>
          <div className="form-grid">
            <label>
              <span>{t("modal.name")}</span>
              <input
                autoComplete="name"
                minLength={2}
                name="name"
                placeholder={t("modal.namePh")}
                required
                aria-invalid={fieldErrors.name ? true : undefined}
                onInput={() => clearFieldError("name")}
              />
              {fieldErrors.name ? (
                <span className="field-error">{fieldErrors.name}</span>
              ) : null}
            </label>
            <label>
              <span>{t("modal.company")}</span>
              <input
                autoComplete="organization"
                minLength={2}
                name="company"
                placeholder={t("modal.companyPh")}
                required
                aria-invalid={fieldErrors.company ? true : undefined}
                onInput={() => clearFieldError("company")}
              />
              {fieldErrors.company ? (
                <span className="field-error">{fieldErrors.company}</span>
              ) : null}
            </label>
            <label>
              <span>{t("modal.email")}</span>
              <input
                autoComplete="email"
                name="email"
                placeholder={t("modal.emailPh")}
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
              <span>{t("modal.phone")}</span>
              <input
                autoComplete="tel"
                inputMode="tel"
                name="phone"
                pattern="[+0-9() .-]{7,20}"
                placeholder={t("modal.phonePh")}
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
                  <span>{t("modal.volume")}</span>
                  <select
                    name="volume"
                    onChange={() => clearFieldError("volume")}
                  >
                    <option value="">{t("modal.volumeSelect")}</option>
                    <option>{t("modal.volume.under100")}</option>
                    <option>{t("modal.volume.100_500")}</option>
                    <option>{t("modal.volume.500_2000")}</option>
                    <option>{t("modal.volume.2000plus")}</option>
                  </select>
                </label>
                <label>
                  <span>{t("modal.sources")}</span>
                  <input
                    maxLength={160}
                    name="sources"
                    placeholder={t("modal.sourcesPh")}
                    onInput={() => clearFieldError("sources")}
                  />
                </label>
              </>
            ) : null}
            <label className="full">
              <span>{t(keys.bottleneck)}</span>
              <textarea
                maxLength={1000}
                name="bottleneck"
                placeholder={t(keys.bottleneckPh)}
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
            <span>{t(keys.note)}</span>
            <button
              className="btn btn-dark"
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
            >
              {submitting ? t("cta.sending") : t("cta.requestConsultation")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
