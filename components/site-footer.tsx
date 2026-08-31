import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import {
  organization,
  organizationEmailHref,
} from "@/data/organization";

const quickLinks = [
  ["/about", "About Us"],
  ["/blog", "Our News"],
  ["/gallery", "Our Track Record"],
  ["/programmes", "Our Programmes"],
  ["/contact", "Contact Us"],
] as const;

const programmeLinks = [
  ["/programmes", "Community Development"],
  ["/programmes", "Education Support"],
  ["/programmes", "Agriculture & Livelihoods"],
  ["/programmes", "Family Health"],
  ["/gallery", "Our Campaigns"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Image
        className="footer-hand-art"
        src="/assets/shape/footer-bg-shape3.png"
        alt=""
        width={208}
        height={176}
      />
      <div className="footer-main">
        <section className="footer-brand" aria-labelledby="footer-brand-title">
          <Link href="/" aria-label="IRAID home">
            <Image
              src="/assets/brand/logo-main.png"
              alt="IRAID"
              width={112}
              height={112}
            />
          </Link>
          <h2 id="footer-brand-title">{organization.name}</h2>
          <div className="footer-contact-list">
            <div>
              <span>Locate address</span>
              <a href={organization.mapUrl} target="_blank" rel="noreferrer">
                {organization.address}
              </a>
            </div>
            <div>
              <span>Call us any time</span>
              {organization.phones.map((phone) => (
                <a href={phone.href} key={phone.href}>
                  {phone.display}
                </a>
              ))}
            </div>
            <div>
              <span>Email us any time</span>
              <a href={organizationEmailHref}>{organization.email}</a>
            </div>
          </div>
        </section>

        <FooterLinks title="Quick Links" label="Footer quick links" links={quickLinks} />
        <FooterLinks title="Our Programmes" label="IRAID programmes" links={programmeLinks} />

        <section
          className="footer-column footer-connect"
          aria-labelledby="footer-connect-title"
        >
          <h2 id="footer-connect-title">Newsletter</h2>
          <p>
            Get updates on our impact and ways to support stronger rural
            communities.
          </p>
          <NewsletterForm />
          <div className="footer-socials" aria-label="Social media">
            <a
              href="https://www.facebook.com/search/top?q=Integrated%20Rural%20Aid%20Foundation"
              target="_blank"
              rel="noreferrer"
              aria-label="Find IRAID on Facebook"
            >
              <span aria-hidden="true">f</span> Facebook
            </a>
            <a
              href="https://www.instagram.com/explore/search/keyword/?q=iraid"
              target="_blank"
              rel="noreferrer"
              aria-label="Find IRAID on Instagram"
            >
              <span aria-hidden="true">◎</span> Instagram
            </a>
          </div>
        </section>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} <Link href="/">IRAID</Link>.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  label,
  links,
}: {
  title: string;
  label: string;
  links: ReadonlyArray<readonly [href: string, text: string]>;
}) {
  return (
    <nav className="footer-column" aria-label={label}>
      <h2>{title}</h2>
      {links.map(([href, text]) => (
        <Link href={href} key={`${href}-${text}`}>
          {text}
        </Link>
      ))}
    </nav>
  );
}
