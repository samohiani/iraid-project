import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CallToActionSection } from "@/components/call-to-action-section";
import { DonationProcessSection } from "@/components/donation-process-section";
import { ImpactStats } from "@/components/impact-stats";
import { PageHero } from "@/components/page-hero";
import {
  TestimonialsSection,
  TrusteesSection,
} from "@/components/people-sections";
import {
  organization,
  organizationEmailHref,
} from "@/data/organization";

export const metadata: Metadata = { title: "About us" };

const guidingPrinciples = [
  "Communities help shape the decisions that affect them",
  "Every person is treated with dignity and respect",
  "Local knowledge and professional expertise work together",
  "Partners and supporters receive clear, accountable reporting",
  "Projects are designed for lasting, measurable benefit",
  "People gain the confidence and capacity to lead change",
];

const impactStats = [
  ["15+", "Team personnel"],
  ["20+", "Successful campaigns"],
  ["20+", "International donors"],
  ["20k+", "Social media followers"],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About IRAID"
        title="Our History & Mission Since 2008"
        body="Integrated Rural Aid Foundation is a non-governmental organization registered with the Nigeria Corporate Affairs Commission."
      />

      <section className="inner-section about-contact-section" aria-labelledby="about-contact-title">
        <div className="about-contact-intro">
          <p className="section-kicker">Connect with IRAID</p>
          <h2 id="about-contact-title">Find us, call us or write to us.</h2>
          <p>
            Whether you are looking to support our work, partner with us or
            learn more about our programmes, our team is ready to hear from
            you.
          </p>
          <Link className="primary-button" href="/contact">
            Contact IRAID <span>↗</span>
          </Link>
        </div>
        <div className="about-contact-grid">
          <article className="about-contact-card">
            <span className="about-contact-icon" aria-hidden="true">⌖</span>
            <div>
              <p>Locate address</p>
              <a href={organization.mapUrl} target="_blank" rel="noreferrer">
                {organization.address}
              </a>
            </div>
          </article>
          <article className="about-contact-card">
            <span className="about-contact-icon" aria-hidden="true">☎</span>
            <div>
              <p>Call us any time</p>
              {organization.phones.map((phone) => (
                <a href={phone.href} key={phone.href}>
                  {phone.display}
                </a>
              ))}
            </div>
          </article>
          <article className="about-contact-card">
            <span className="about-contact-icon" aria-hidden="true">✉</span>
            <div>
              <p>Email us any time</p>
              <a href={organizationEmailHref}>{organization.email}</a>
            </div>
          </article>
        </div>
      </section>

      <section className="inner-section about-overview" id="history">
        <div className="about-overview-copy">
          <p className="section-kicker">About IRAID</p>
          <h2>A bridge between donors and communities.</h2>
          <p>
            IRAID is a NON-GOVERNMENTAL ORGANIZATION (NGO) established in
            2008 and registered with the Nigeria Corporate Affairs Commission
            under the Companies and Allied Matters Decree No. 1, 1990 (Part C
            – Incorporated Trustees) Decree. As a development-based
            organization, IRAID acts as a bridge connecting donor agencies,
            institutions and individual donors to rural and peri-urban
            communities for the transfer of knowledge through awareness and
            capacity building/skill acquisition, policy advice and the
            exchange of information on sustainable community development
            practices.
          </p>
          <p>
            IRAID provides the synergy between donors and rural/urban
            communities, ensuring that donor efforts in promoting local
            initiatives for sustainable community development are guided by
            sound professionals involved in project implementation.
          </p>
          <p>
            In Nigeria, the organization collaborates with NGOs, corporate
            institutions, local and international development agencies. IRAID
            works with rural and urban cooperatives and other community-based
            organizations (CBOs) in Abia State. It uses professional skills to
            strengthen the capacity and participation of local people in the
            effort to develop themselves.
          </p>
          <div className="about-overview-links">
            <Link className="primary-button" href="/contact">
              Get Involved <span>↗</span>
            </Link>
            <Link className="text-link" href="/programmes">
              Explore our programmes →
            </Link>
          </div>
        </div>
        <div className="about-overview-visual">
          <div className="about-overview-image about-overview-image-main">
            <Image
              src="/IRAID/FOR%20IRAID%202.jpeg"
              alt="IRAID programme participants"
              fill
              priority
              sizes="(max-width: 820px) 92vw, 38vw"
            />
          </div>
          <div className="about-overview-image about-overview-image-small">
            <Image
              src="/IRAID/01.webp"
              alt="IRAID community engagement in Nkata Ibeku"
              fill
              sizes="(max-width: 820px) 44vw, 18vw"
            />
          </div>
          <div className="about-overview-badge">
            <strong>2008</strong>
            <span>Established to strengthen communities</span>
          </div>
        </div>
      </section>

      <section className="inner-section about-mission" id="mission">
        <div className="about-mission-image">
          <Image
            src="/IRAID/FOR%20IRAID%203.webp"
            alt="IRAID programmes and community enterprise"
            fill
            sizes="(max-width: 820px) 92vw, 43vw"
          />
        </div>
        <div className="about-mission-copy">
          <p className="section-kicker">Our Vision & Values</p>
          <h2>Development led with people, dignity and trust.</h2>
          <p>
            Our vision is seeing a better rural Nigerian community where
            indigent dwellers are empowered economically, socially and
            politically. We pursue that vision by listening first, working in
            partnership and helping people build the knowledge and confidence
            to shape their own future.
          </p>
          <ul className="about-focus-list">
            {guidingPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <TrusteesSection
        className="inner-section trustees-section"
        id="trustees"
        body="Meet the people responsible for guiding Integrated Rural Aid Foundation and its community development work."
        showTeamLink
      />

      <section className="impact-strip about-impact" aria-label="IRAID impact figures">
        <ImpactStats stats={impactStats} />
      </section>

      <DonationProcessSection
        className="inner-section process-section about-donation-process"
        id="work-process"
        description="We keep supporters informed, collect contributions securely and direct resources to projects that align with IRAID's mission."
        showNumbers
      />

      <TestimonialsSection
        className="inner-section testimonial-section"
        id="testimonials"
        title="What People Say About Our Charity"
      />

      <CallToActionSection
        className="home-cta about-cta"
        eyebrow="Together, we can do more"
        title="We believe we can touch more lives with you."
        body="Partner with IRAID to support practical, locally led development across communities in Nigeria."
        actionLabel="Contact IRAID"
      />
    </>
  );
}
