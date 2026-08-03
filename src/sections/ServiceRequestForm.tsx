"use client";

import { useState } from "react";

interface ServiceRequestFormProps {
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
  defaultService?: string;
  services?: string[];
}

const DEFAULT_SERVICES = [
  "Water Damage Restoration",
  "Fire & Smoke Restoration",
  "Mold Remediation",
  "Damage Restoration",
  "Property Reconstruction",
  "Radon Mitigation",
  "Multi-Surface Cleaning",
];

function hexToRgba(hex: string, alpha: number) {
  const cleaned = hex.replace("#", "");
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return `rgba(0, 51, 102, ${alpha})`;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function ServiceRequestForm({
  theme,
  defaultService = "",
  services = DEFAULT_SERVICES,
}: ServiceRequestFormProps) {
  const primary = theme?.primaryColor || "#003366";
  const secondary = theme?.secondaryColor || "#4b5563";
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const description = String(formData.get("description") || "").trim();

    const nameParts = fullName.split(/\s+/);
    const firstName = nameParts[0] || fullName;
    const lastName = nameParts.slice(1).join(" ") || firstName;
    const message = [
      service ? `Service Request: ${service}` : "",
      description,
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, message }),
      });
      if (!res.ok) throw new Error();
      setStatus({ type: "success", message: "Your assessment request has been sent." });
      form.reset();
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border bg-white px-3.5 py-3 text-sm outline-none transition";

  return (
    <div
      className="rounded-2xl p-6 sm:p-7 border max-w-full"
      style={{
        backgroundColor: hexToRgba(primary, 0.1),
        borderColor: hexToRgba(primary, 0.2),
      }}
    >
      <h3
        className="text-center text-sm font-bold tracking-[0.12em] uppercase mb-5"
        style={{ color: primary }}
      >
        Request Assessment
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <input
          type="text"
          name="fullName"
          required
          placeholder="Full Name*"
          className={inputClass}
          style={{ borderColor: hexToRgba(primary, 0.25), color: secondary }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = primary;
            e.currentTarget.style.boxShadow = `0 0 0 1px ${hexToRgba(primary, 0.35)}`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = hexToRgba(primary, 0.25);
            e.currentTarget.style.boxShadow = "none";
          }}
        />

        <div className="relative">
          <span
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"
            style={{ color: primary }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email*"
            className={`${inputClass} pl-10`}
            style={{ borderColor: hexToRgba(primary, 0.25), color: secondary }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = primary;
              e.currentTarget.style.boxShadow = `0 0 0 1px ${hexToRgba(primary, 0.35)}`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = hexToRgba(primary, 0.25);
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>

        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone*"
          className={inputClass}
          style={{ borderColor: hexToRgba(primary, 0.25), color: secondary }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = primary;
            e.currentTarget.style.boxShadow = `0 0 0 1px ${hexToRgba(primary, 0.35)}`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = hexToRgba(primary, 0.25);
            e.currentTarget.style.boxShadow = "none";
          }}
        />

        <div className="relative">
          <select
            name="service"
            required
            defaultValue={defaultService}
            className={`${inputClass} appearance-none pr-10`}
            style={{ borderColor: hexToRgba(primary, 0.25), color: secondary }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = primary;
              e.currentTarget.style.boxShadow = `0 0 0 1px ${hexToRgba(primary, 0.35)}`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = hexToRgba(primary, 0.25);
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <option value="" disabled>
              Select Service Request
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
            style={{ color: primary }}
          >
            ▾
          </span>
        </div>

        <textarea
          name="description"
          required
          rows={4}
          placeholder="Description of Incident/Request"
          className={`${inputClass} resize-none`}
          style={{ borderColor: hexToRgba(primary, 0.25), color: secondary }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = primary;
            e.currentTarget.style.boxShadow = `0 0 0 1px ${hexToRgba(primary, 0.35)}`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = hexToRgba(primary, 0.25);
            e.currentTarget.style.boxShadow = "none";
          }}
        />

        <label
          className="flex items-start gap-2.5 text-[11px] leading-snug pt-1"
          style={{ color: secondary }}
        >
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 rounded"
            style={{ accentColor: primary }}
          />
          <span>
            I consent to receive text messages and emails from Allied 24/7 Restoration regarding my
            assessment request. Message and data rates may apply. Reply STOP to opt out.
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg py-3.5 text-sm font-bold tracking-wide uppercase text-white transition hover:opacity-90 disabled:opacity-50"
          style={{ backgroundColor: primary }}
        >
          {submitting ? "Sending..." : "Request Assessment"}
        </button>

        {status && (
          <p
            className="text-sm text-center"
            style={{ color: status.type === "success" ? primary : "#dc2626" }}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
