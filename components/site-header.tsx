"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/navigation";

const MOBILE_NAVIGATION_ID = "iraid-mobile-navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <>
      <header className={`iraid-site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="iraid-header-inner">
          <Link href="/" className="iraid-header-logo" aria-label="IRAID home">
            <Image
              src="/assets/brand/logo-main.png"
              alt="IRAID"
              width={76}
              height={76}
              priority
              loading="eager"
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
            <Link
              href="/contact"
              className={`iraid-header-donate${isActive("/contact") ? " is-active" : ""}`}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              <span aria-hidden="true">♥</span> Donate Now
            </Link>
            <Link
              href="/contact"
              className={`iraid-mobile-donate${isActive("/contact") ? " is-active" : ""}`}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              Donate
            </Link>
            <button
              type="button"
              className="iraid-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-controls={MOBILE_NAVIGATION_ID}
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
        id={MOBILE_NAVIGATION_ID}
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
            src="/assets/brand/logo-main.png"
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
              className={`iraid-panel-donate${isActive("/contact") ? " is-active" : ""}`}
              aria-current={isActive("/contact") ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              ♥ Donate Now
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
