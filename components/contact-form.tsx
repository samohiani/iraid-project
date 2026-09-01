"use client";

import { type FormEvent, useState } from "react";
import { organization, organizationEmailHref } from "@/data/organization";

type SubmissionStatus = "idle" | "opened";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = [
      `Name: ${String(values.get("name") || "")}`,
      `Email: ${String(values.get("email") || "")}`,
      `Phone: ${String(values.get("phone") || "Not provided")}`,
      `Interest: ${String(values.get("interest") || "")}`,
      "",
      "Message:",
      String(values.get("message") || ""),
    ].join("\n");

    const mailto = `${organizationEmailHref}?subject=${encodeURIComponent(
      "IRAID website enquiry",
    )}&body=${encodeURIComponent(body)}`;

    setStatus("opened");
    window.location.href = mailto;
  }

  if (status === "opened") {
    return (
      <section
        id="contact-form"
        className="contact-form contact-form-card contact-form-success"
        aria-live="polite"
      >
        <div className="contact-success-copy">
          <span className="contact-form-success-mark" aria-hidden="true">
            ↗
          </span>
          <p className="contact-label">Ready to send</p>
          <h2>Your message is ready.</h2>
          <p>
            We’ve prepared an email for the IRAID team. Press Send in your
            email app to complete your enquiry.
          </p>
          <div className="contact-success-actions">
            <a className="primary-button" href={organizationEmailHref}>
              Email IRAID directly <span>↗</span>
            </a>
            <button
              className="text-button"
              type="button"
              onClick={() => setStatus("idle")}
            >
              Start over
            </button>
          </div>
        </div>
        <aside className="contact-success-next" aria-label="What happens next">
          <span className="contact-success-next-icon" aria-hidden="true">
            ✦
          </span>
          <p className="contact-label">What happens next</p>
          <h3>A simple next step.</h3>
          <ol>
            <li>
              <span>01</span>
              <p>Check that your email app has opened.</p>
            </li>
            <li>
              <span>02</span>
              <p>Press Send and your enquiry will reach our team.</p>
            </li>
          </ol>
          <p className="contact-success-recipient">
            Sending to <strong>{organization.email}</strong>
          </p>
        </aside>
      </section>
    );
  }

  return (
    <form
      id="contact-form"
      className="contact-form contact-form-card"
      onSubmit={handleSubmit}
    >
      <div className="contact-form-heading">
        <p className="contact-label">Send a message</p>
        <h2>How can we help?</h2>
        <p>
          Share a little about yourself and what brought you here. We’ll get
          back to you as soon as we can.
        </p>
      </div>
      <div className="contact-form-row">
        <label>
          Your name
          <input name="name" autoComplete="name" placeholder="Jane Doe" required />
        </label>
        <label>
          Email address
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <div className="contact-form-row">
        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+234"
          />
        </label>
        <label>
          I’m reaching out about
          <select name="interest" defaultValue="" required>
            <option value="" disabled>
              Choose an option
            </option>
            <option value="volunteering">Volunteering</option>
            <option value="partnership">A partnership</option>
            <option value="donation">Making a donation</option>
            <option value="programmes">IRAID programmes</option>
            <option value="general enquiry">A general enquiry</option>
          </select>
        </label>
      </div>
      <label>
        Your message
        <textarea
          name="message"
          placeholder="Tell us what you have in mind..."
          required
        />
      </label>
      <div className="contact-form-footer">
        <button className="primary-button" type="submit">
          Open email <span>↗</span>
        </button>
        <p>We treat every enquiry with care and respect.</p>
      </div>
    </form>
  );
}
