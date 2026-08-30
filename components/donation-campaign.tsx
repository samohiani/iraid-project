"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function DonationCampaign() {
  const campaignRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const campaign = campaignRef.current;
    if (!campaign) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(campaign);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={campaignRef}
      className={`donation-campaign${isVisible ? " is-visible" : ""}`}
    >
      <div className="donation-campaign-image">
        <Image
          src="/assets/img/donation/donation2-1.png"
          alt="A smiling child supported by IRAID"
          fill
          sizes="(max-width: 820px) 88vw, 180px"
        />
      </div>
      <div className="donation-campaign-content">
        <h3>Build school for poor children</h3>
        <p>Stay informed about our upcoming events and campaigns.</p>
        <div
          className="donation-progress"
          role="progressbar"
          aria-label="Build school for poor children progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={85}
        >
          <span className="donation-progress-track">
            <span className="donation-progress-bar">
              <strong>85%</strong>
            </span>
          </span>
          <div className="donation-progress-meta">
            <span>$5,000 Raised</span>
            <span>Goal - $10,000</span>
          </div>
        </div>
        <Link className="donation-campaign-button" href="/contact">
          Donate Now <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
