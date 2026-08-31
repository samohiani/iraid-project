import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import {
  contactFormAction,
  organization,
  organizationEmailHref,
} from "@/data/organization";

export const metadata: Metadata = { title: "Contact" };

function ContactIcon({ type }: { type: "pin" | "phone" | "mail" }) {
  const paths = {
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.25" />
      </>
    ),
    phone: (
      <path d="M7.2 4.8 9 4l2 4-1.55 1.25a11.1 11.1 0 0 0 5.3 5.3L16 13l4 2-.8 1.8a2.4 2.4 0 0 1-2.5 1.35C10.2 17.25 6.75 13.8 5.85 7.3A2.4 2.4 0 0 1 7.2 4.8Z" />
    ),
    mail: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[type]}
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact IRAID"
        title="Let’s build stronger communities, together."
        body="Whether you want to volunteer, partner with us, support a programme or learn more about our work, we would love to hear from you."
      />
      <section className="inner-section contact-layout">
        <div className="contact-details">
          <div className="contact-intro">
            <p className="section-kicker">Start a conversation</p>
            <h2>One message can move a community forward.</h2>
            <p>
              Tell us what you care about and our team will point you in the
              right direction. We welcome thoughtful questions, practical ideas
              and people who want to stand with rural communities.
            </p>
          </div>
          <div className="contact-info-grid">
            <article className="contact-info-card">
              <span className="contact-icon">
                <ContactIcon type="pin" />
              </span>
              <div>
                <p className="contact-label">Visit us</p>
                <h3>Our office</h3>
                <p>{organization.address}</p>
              </div>
            </article>
            <article className="contact-info-card">
              <span className="contact-icon">
                <ContactIcon type="phone" />
              </span>
              <div>
                <p className="contact-label">Call us</p>
                <h3>Let’s talk</h3>
                <p>
                  {organization.phones.map((phone) => (
                    <a href={phone.href} key={phone.href}>
                      {phone.display}
                    </a>
                  ))}
                </p>
              </div>
            </article>
            <article className="contact-info-card contact-info-card--email">
              <span className="contact-icon">
                <ContactIcon type="mail" />
              </span>
              <div>
                <p className="contact-label">Email us</p>
                <h3>Write to the team</h3>
                <p>
                  <a href={organizationEmailHref}>{organization.email}</a>
                </p>
              </div>
              <div className="contact-card-side-note">
                <span>Have a question or an idea?</span>
                <strong>We’re always glad to hear from you.</strong>
              </div>
              <a
                className="contact-card-action"
                href={organizationEmailHref}
              >
                Send an email <span>↗</span>
              </a>
            </article>
          </div>
          <div className="contact-visual-card">
            <Image
              src="/assets/img/img/farmer.webp"
              alt="A woman working among crops in a rural farm"
              fill
              sizes="(max-width: 820px) 92vw, 42vw"
            />
            <div className="contact-visual-caption">
              <span aria-hidden="true">✦</span>
              <p>Stronger livelihoods</p>
              <strong>Practical support that reaches rural families.</strong>
            </div>
          </div>
        </div>
        <form
          id="contact-form"
          className="contact-form contact-form-card"
          action={contactFormAction}
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New IRAID website enquiry"
          />
          <div className="contact-form-heading">
            <p className="contact-label">Send a message</p>
            <h2>How can we help?</h2>
            <p>
              Share a little about yourself and what brought you here. We’ll
              get back to you as soon as we can.
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
              <select name="interest" defaultValue="">
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
              Send message <span>↗</span>
            </button>
            <p>We treat every enquiry with care and respect.</p>
          </div>
        </form>
      </section>
    </>
  );
}
