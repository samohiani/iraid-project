"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site-content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="app-shell">
      <header className={`iraid-site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="iraid-header-inner">
          <Link href="/" className="iraid-header-logo" aria-label="IRAID home">
            <Image
              src="/assets/img/brand/logo-main.png"
              alt="IRAID"
              width={76}
              height={76}
              priority
            />
          </Link>
          <nav className="iraid-desktop-nav" aria-label="Primary navigation">
            {navItems.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={isActive(href) ? "is-active" : ""}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="iraid-header-actions">
            <Link href="/contact" className="iraid-header-donate">
              <span aria-hidden="true">♥</span> Donate Now
            </Link>
            <Link href="/contact" className="iraid-mobile-donate">
              Donate
            </Link>
            <button
              type="button"
              className="iraid-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <aside
        className={`iraid-mobile-panel${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="iraid-mobile-panel-inner">
          <button
            type="button"
            className="iraid-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span aria-hidden="true">×</span> Close menu
          </button>
          <Image
            className="iraid-panel-logo"
            src="/assets/img/brand/logo-main.png"
            alt="IRAID"
            width={62}
            height={62}
          />
          <p className="iraid-panel-eyebrow">Explore IRAID</p>
          <nav className="iraid-panel-nav" aria-label="Mobile navigation">
            {navItems.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={isActive(href) ? "is-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="iraid-panel-actions">
            <Link
              href="/contact"
              className="iraid-panel-donate"
              onClick={() => setMenuOpen(false)}
            >
              ♥ Donate Now
            </Link>
            <Link
              href="/contact"
              className="iraid-panel-contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact IRAID <span>→</span>
            </Link>
          </div>
        </div>
      </aside>

      <main className="main-content">{children}</main>
      <footer className="site-footer">
        <Image
          className="footer-hand-art"
          src="/assets/img/shape/footer-bg-shape3.png"
          alt=""
          width={208}
          height={176}
        />
        <div className="footer-main">
          <section className="footer-brand" aria-labelledby="footer-brand-title">
            <Link href="/" aria-label="IRAID home">
              <Image
                src="/assets/img/brand/logo-main.png"
                alt="IRAID"
                width={112}
                height={112}
              />
            </Link>
            <h2 id="footer-brand-title">Integrated Rural Aid Foundation</h2>
            <div className="footer-contact-list">
              <div>
                <span>Locate address</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=36+Bende+Road%2C+Umuahia%2C+Abia+State"
                  target="_blank"
                  rel="noreferrer"
                >
                  36 Bende Road, Umuahia, Abia State
                </a>
              </div>
              <div>
                <span>Call us any time</span>
                <a href="tel:+2349125625007">+234 912 562 5007</a>
                <a href="tel:+2348065902793">+234 806-590-2793</a>
                <a href="tel:+2348065940004">+234 806-594-0004</a>
              </div>
              <div>
                <span>Email us any time</span>
                <a href="mailto:officiallyiraid@gmail.com">
                  officiallyiraid@gmail.com
                </a>
              </div>
            </div>
          </section>

          <nav className="footer-column" aria-label="Footer quick links">
            <h2>Quick Links</h2>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Our News</Link>
            <Link href="/gallery">Our Track Record</Link>
            <Link href="/programmes">Our Programmes</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>

          <nav className="footer-column" aria-label="IRAID programmes">
            <h2>Our Programmes</h2>
            <Link href="/programmes">Community Development</Link>
            <Link href="/programmes">Education Support</Link>
            <Link href="/programmes">Agriculture &amp; Livelihoods</Link>
            <Link href="/programmes">Family Health</Link>
            <Link href="/gallery">Our Campaigns</Link>
          </nav>

          <section className="footer-column footer-connect" aria-labelledby="footer-connect-title">
            <h2 id="footer-connect-title">Newsletter</h2>
            <p>
              Get updates on our impact and ways to support stronger rural
              communities.
            </p>
            <form
              className="footer-newsletter"
              onSubmit={(event) => {
                event.preventDefault();
                setNewsletterSubmitted(true);
              }}
            >
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input id="footer-email" type="email" placeholder="Enter your email" required />
            <button type="submit" aria-label="Subscribe to newsletter">
              ↗
            </button>
            </form>
            {newsletterSubmitted ? (
              <p className="footer-form-success" role="status">
                Thanks — we&apos;ll be in touch.
              </p>
            ) : null}
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
    </div>
  );
}
