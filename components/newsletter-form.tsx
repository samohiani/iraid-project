"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <form
        className="footer-newsletter"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label className="sr-only" htmlFor="footer-email">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit" aria-label="Subscribe to newsletter">
          ↗
        </button>
      </form>
      {submitted ? (
        <p className="footer-form-success" role="status">
          Thanks — we&apos;ll be in touch.
        </p>
      ) : null}
    </>
  );
}
