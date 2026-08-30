import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ImpactStats } from "@/components/impact-stats";
import { TestimonialRail } from "@/components/testimonial-rail";
import { TrusteeCarousel } from "@/components/trustee-carousel";
import { process, programmeDetails } from "@/data/site-content";

export const metadata: Metadata = { title: "About us" };

const focusAreas = [
  "Community Development",
  "Economic Empowerment especially women and youths",
  "Capacity-Building for Community Leaders",
  "Family Health and Reproductive Health/HIV/AIDS",
  "Agriculture",
  "Education for Change",
];

const developmentSteps = [
  "Community Engagement",
  "Needs Assessment",
  "Baseline Surveys",
  "Environmental Assessment",
  "Impact Evaluation",
];

const fieldGallery = [
  ["/assets/img/img/agric/P10.jpeg", "Agricultural livelihoods"],
  ["/assets/img/img/agric/P11.jpeg", "Women-led enterprise"],
  ["/assets/img/img/agric/P12.jpeg", "Community agriculture"],
  ["/assets/img/img/agric/P13.jpeg", "Food security in practice"],
  ["/assets/img/img/agric/P14.jpeg", "Local production"],
  ["/assets/img/img/agric/P16.jpeg", "Rural enterprise"],
  ["/assets/img/img/agric/P17.jpeg", "Working together"],
  ["/assets/img/img/agric/P33.jpeg", "Community participation"],
  ["/assets/img/img/agric/P41.jpeg", "Sustainable development"],
] as const;

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
              <a href="https://www.google.com/maps/search/?api=1&query=36+Bende+Road%2C+Umuahia%2C+Abia+State" target="_blank" rel="noreferrer">
                36 Bende Road, Umuahia, Abia State
              </a>
            </div>
          </article>
          <article className="about-contact-card">
            <span className="about-contact-icon" aria-hidden="true">☎</span>
            <div>
              <p>Call us any time</p>
              <a href="tel:+2349125625007">+234 912 562 5007</a>
              <a href="tel:+2348065902793">+234 806-590-2793</a>
              <a href="tel:+2348065940004">+234 806-594-0004</a>
            </div>
          </article>
          <article className="about-contact-card">
            <span className="about-contact-icon" aria-hidden="true">✉</span>
            <div>
              <p>Email us any time</p>
              <a href="mailto:officiallyiraid@gmail.com">officiallyiraid@gmail.com</a>
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
              src="/IRAID/01.PNG"
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
            src="/IRAID/FOR%20IRAID%203.jpg"
            alt="IRAID programmes and community enterprise"
            fill
            sizes="(max-width: 820px) 92vw, 43vw"
          />
        </div>
        <div className="about-mission-copy">
          <p className="section-kicker">Our Mission & Vision</p>
          <h2>We believe we can touch more lives with you.</h2>
          <p>
            Our vision is seeing a better rural Nigerian community where
            indigent dwellers are empowered economically, socially and
            politically. Through community-driven programmes, we promote
            education, health, agriculture and economic opportunities.
          </p>
          <ul className="about-focus-list">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="inner-section about-development" id="development-process">
        <div className="center-heading">
          <p className="section-kicker">Community Development</p>
          <h2>Our Approach to Community Development</h2>
          <p>
            Our community development activities usually begin with community
            engagement followed by needs assessment, baseline surveys and
            environmental assessment. This approach was used in the Doods
            Methodist NEWMAP site communities in the World Bank-assisted Abia
            NEWMAP project in 2018.
          </p>
          <p>
            The baseline survey identifies the initial conditions of affected
            areas and provides benchmark indicators for end-line evaluation.
            It includes household and community surveys, biophysical surveys
            and expert environmental assessment to monitor progress and
            evaluate intervention impacts.
          </p>
        </div>
        <div className="about-development-steps">
          <h3>Our Development Process</h3>
          <div className="development-step-grid">
            {developmentSteps.map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h4>{step}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="about-programmes" id="programmes">
        {programmeDetails.map((programme, index) => (
          <div className="about-programme-group" key={programme.title}>
            <section
              className={`programme-detail ${index % 2 ? "programme-detail--alternate" : ""}`}
              id={
                index === 0
                  ? "community-development-work"
                  : index === 1
                    ? "empowerment"
                    : index === 2
                      ? "agriculture"
                      : index === 3
                        ? "skills-and-education"
                        : "health-outreach"
              }
            >
              <div className="programme-detail-copy">
                <p className="section-kicker">{programme.eyebrow}</p>
                <h2>{programme.title}</h2>
                {programme.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="programme-photo-grid">
                {programme.images.map(([src, caption]) => (
                  <figure key={src}>
                    <div>
                      <Image
                        src={src}
                        alt={caption}
                        fill
                        sizes="(max-width: 720px) 92vw, (max-width: 1100px) 43vw, 27vw"
                      />
                    </div>
                    <figcaption>{caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {index === 0 ? (
              <section className="about-field-gallery" aria-labelledby="field-gallery-title">
                <div className="center-heading">
                  <p className="section-kicker">IRAID in the field</p>
                  <h2 id="field-gallery-title">People, places and progress</h2>
                  <p>
                    A selection of the agricultural and community images used
                    on the former IRAID site, kept here as part of the story of
                    our work.
                  </p>
                </div>
                <div
                  className="about-field-gallery-track"
                  aria-label="IRAID field images, automatically scrolling"
                  tabIndex={0}
                >
                  {[...fieldGallery, ...fieldGallery].map(([src, label], index) => (
                    <figure
                      key={`${src}-${index}`}
                      aria-hidden={index >= fieldGallery.length ? true : undefined}
                    >
                      <Image
                        src={src}
                        alt={index < fieldGallery.length ? label : ""}
                        fill
                        sizes="(max-width: 620px) 72vw, (max-width: 1000px) 35vw, 22vw"
                      />
                      <figcaption>{label}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        ))}
      </div>

      <section className="inner-section about-belief" id="what-we-do">
        <div>
          <p className="section-kicker">About Us IRAID</p>
          <h2>Mission: Empower Rural Communities</h2>
          <p>
            We seek to create a better rural Nigerian community where indigent
            dwellers are empowered economically, socially and politically. Our
            work connects people, practical support and sustainable
            opportunity.
          </p>
          <ul className="about-focus-list">
            <li>Economic empowerment for women and youths</li>
            <li>Capacity-building for community leaders</li>
            <li>Family and reproductive health initiatives</li>
            <li>Agricultural support and training</li>
            <li>Education and youth development</li>
          </ul>
          <Link className="primary-button" href="/contact">
            Get Involved <span>↗</span>
          </Link>
        </div>
        <div className="about-belief-image">
          <Image
            src="/IRAID/FOR%20IRAID%202.jpeg"
            alt="Mission image showing IRAID participants"
            fill
            sizes="(max-width: 820px) 92vw, 43vw"
          />
        </div>
        <div>
          <p className="section-kicker">Our Programmes</p>
          <h2>What We Do</h2>
          <p>
            IRAID runs a range of programmes focused on long-term, sustainable
            change: community development projects, women and youth economic
            programmes, health outreach, agricultural training and education
            for change.
          </p>
          <ul className="about-focus-list">
            <li>Microfinance and skills training</li>
            <li>Health camps and HIV/AIDS awareness</li>
            <li>School support and scholarships</li>
            <li>Agricultural extension services</li>
            <li>Monitoring, evaluation and accountability</li>
          </ul>
          <Link className="text-link" href="/programmes">
            View all programme details →
          </Link>
        </div>
        <div className="about-belief-image about-belief-image-alt">
          <Image
            src="/IRAID/FOR%20IRAID%203.jpg"
            alt="Programmes image showing IRAID community enterprise"
            fill
            sizes="(max-width: 820px) 92vw, 43vw"
          />
        </div>
      </section>

      <section className="inner-section trustees-section" id="trustees">
        <div className="center-heading trustee-heading">
          <p className="section-kicker">Our Team</p>
          <h2>Meet The Trustees</h2>
          <p>
            Meet the people responsible for guiding Integrated Rural Aid
            Foundation and its community development work.
          </p>
        </div>
        <TrusteeCarousel />
        <div className="about-section-link">
          <Link className="text-link" href="/team">
            Meet the full team →
          </Link>
        </div>
      </section>

      <section className="impact-strip about-impact" aria-label="IRAID impact figures">
        <ImpactStats stats={impactStats} />
      </section>

      <section className="inner-section process-section about-donation-process" id="work-process">
        <div className="center-heading">
          <p className="section-kicker">Work Process</p>
          <h2>Our Donating Work Process</h2>
          <p>
            We keep supporters informed, collect contributions securely and
            direct resources to projects that align with IRAID&apos;s mission.
          </p>
        </div>
        <div className="process-grid">
          {process.map(([number, title, description], index) => (
            <article className="process-card" key={title}>
              <div className="process-card-thumb-wrap">
                <div className="process-card-thumb">
                  <Image
                    src="/assets/img/process/process-card-1-1.png"
                    alt=""
                    fill
                    sizes="(max-width: 700px) 85vw, 298px"
                  />
                </div>
                <div className="process-card-icon">
                  <Image
                    src={`/assets/img/icon/process-icon1-${index + 1}.svg`}
                    alt=""
                    width={72}
                    height={72}
                  />
                </div>
                <div className="process-card-shape">
                  <Image
                    src="/assets/img/process/process-card-shape2.png"
                    alt=""
                    width={136}
                    height={88}
                  />
                </div>
              </div>
              <div className="process-card-content">
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-section testimonial-section" id="testimonials">
        <div className="center-heading">
          <p className="section-kicker">Testimonials</p>
          <h2>What People Say About Our Charity</h2>
        </div>
        <TestimonialRail />
      </section>

      <section className="home-cta about-cta">
        <div>
          <p className="section-kicker">Together, we can do more</p>
          <h2>We believe we can touch more lives with you.</h2>
          <p>
            Partner with IRAID to support practical, locally led development
            across communities in Nigeria.
          </p>
        </div>
        <Link className="primary-button light-button" href="/contact">
          Contact IRAID <span>↗</span>
        </Link>
      </section>
    </>
  );
}
