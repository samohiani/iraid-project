import Image from "next/image";
import Link from "next/link";
import {
  organization,
  organizationEmailHref,
} from "@/data/organization";

const footerLinks = [
  ["/about", "Our story"],
  ["/programmes", "What we do"],
  ["/gallery", "Our impact"],
  ["/team", "Meet the team"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <section className="footer-appeal" aria-labelledby="footer-appeal-title">
          <div>
            <p>Community-led change starts with people who care.</p>
            <h2 id="footer-appeal-title">
              Help practical ideas reach the communities that need them.
            </h2>
          </div>
          <Link href="/contact" className="footer-appeal-button">
            Contact IRAID <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <div className="footer-main">
          <section className="footer-brand" aria-labelledby="footer-brand-title">
            <h2 id="footer-brand-title" className="sr-only">
              About IRAID
            </h2>
            <Link href="/" className="footer-brand-lockup" aria-label="IRAID home">
              <Image
                src="/assets/brand/logo-main.png"
                alt=""
                width={84}
                height={84}
              />
              <span>
                <strong>{organization.shortName}</strong>
                <small>{organization.name}</small>
              </span>
            </Link>
            <p className="footer-brand-tagline">
              Building stronger livelihoods and resilient communities through
              practical, locally grounded support.
            </p>
            <div className="footer-socials" aria-label="Social media">
              <a
                href="https://www.facebook.com/search/top?q=Integrated%20Rural%20Aid%20Foundation"
                target="_blank"
                rel="noreferrer"
              >
                Facebook <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.instagram.com/explore/search/keyword/?q=iraid"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <FooterLinks
            title="Explore"
            label="Explore IRAID"
            links={footerLinks}
          />

          <section
            className="footer-connect"
            aria-labelledby="footer-connect-title"
          >
            <p className="footer-section-label">Get in touch</p>
            <h2 id="footer-connect-title">We&apos;d love to hear from you</h2>
            <p>
              For partnerships, volunteering or support, talk to the IRAID
              team.
            </p>
            <div className="footer-connect-links">
              <a href={organizationEmailHref}>{organization.email}</a>
              <a href={organization.phones[0].href}>
                {organization.phones[0].display}
              </a>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {organization.shortName}. All rights reserved.</p>
          <p>Umuahia, Abia State, Nigeria</p>
        </div>
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
    <nav className="footer-links" aria-label={label}>
      <p className="footer-section-label">Find your way</p>
      <h2>{title}</h2>
      <div>
        {links.map(([href, text]) => (
          <Link href={href} key={`${href}-${text}`}>
            {text} <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
