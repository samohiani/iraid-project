import Image from "next/image";
import Link from "next/link";
import { DonationCampaign } from "@/components/donation-campaign";
import { FaqSection } from "@/components/faq-section";
import { HomepageIntro } from "@/components/homepage-intro";
import { ImpactStats } from "@/components/impact-stats";
import { TestimonialRail } from "@/components/testimonial-rail";
import { TrusteeCarousel } from "@/components/trustee-carousel";
import { VideoModal } from "@/components/video-modal";
import { process, programmes } from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      <HomepageIntro />
      <section className="home-hero">
        <Image
          className="hero-brush"
          src="/assets/img/hero/hero-bg-shape2-8.png"
          alt=""
          width={1036}
          height={787}
          priority
        />
        <Image
          className="hero-floating-shape hero-floating-shape-one"
          src="/assets/img/hero/hero-bg-shape2-1.png"
          alt=""
          width={109}
          height={101}
        />
        <Image
          className="hero-floating-shape hero-floating-shape-two"
          src="/assets/img/hero/hero-bg-shape2-2.png"
          alt=""
          width={70}
          height={100}
        />
        <Image
          className="hero-floating-shape hero-floating-shape-three"
          src="/assets/img/hero/hero-bg-shape2-4.png"
          alt=""
          width={30}
          height={34}
        />
        <Image
          className="hero-bottom-shape hero-bottom-shape-orange"
          src="/assets/img/hero/hero-bg-shape2-5.png"
          alt=""
          width={69}
          height={160}
        />
        <Image
          className="hero-bottom-shape hero-bottom-shape-green"
          src="/assets/img/hero/hero-bg-shape2-6.png"
          alt=""
          width={116}
          height={280}
        />
        <Image
          className="hero-bottom-shape hero-bottom-shape-coral"
          src="/assets/img/hero/hero-bg-shape2-7.png"
          alt=""
          width={69}
          height={215}
        />
        <div className="hero-copy">
          <p className="script-label">
            <span />@ Integrated Rural Aid Foundation
          </p>
          <h1>
            <span>Empowering</span>
            <span className="hero-lives">
              <em>Lives</em>
              <Image
                src="/assets/img/hero/hero-bg-shape2-3.png"
                alt=""
                width={67}
                height={71}
              />
            </span>
            <span>Through Integrated Development</span>
          </h1>
          <p className="hero-description">
            Building sustainable livelihoods for Nigeria&apos;s rural poor
            through skill acquisition, micro-credit, and community-driven
            projects.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/about">
              Learn About Our Work <span>↗</span>
            </Link>
            <VideoModal />
          </div>
        </div>
        <div className="hero-visual" aria-label="IRAID community impact">
          <div className="hero-portrait-shadow" aria-hidden="true" />
          <div className="hero-portrait">
            <Image
              src="/assets/img/hero/hero_thumb_1_1.jpg"
              alt="A child in a rural community"
              fill
              priority
              sizes="(max-width: 820px) 88vw, 42vw"
            />
          </div>
        </div>
        <Image
          className="hero-bottom-wave"
          src="/assets/img/hero/hero-bg-shape2-9.png"
          alt=""
          fill
          sizes="100vw"
        />
      </section>

      <section className="home-section about-section">
        <div className="about-collage">
          <Image
            className="about-decoration about-decoration-green"
            src="/assets/img/shape/about_shape2_1.png"
            alt=""
            width={476}
            height={458}
          />
          <Image
            className="about-decoration about-decoration-orange"
            src="/assets/img/shape/about_shape2_2.png"
            alt=""
            width={108}
            height={119}
          />
          <div className="about-image about-image-main">
            <Image
              src="/assets/img/normal/about_2_1.png"
              alt="IRAID community work"
              fill
              sizes="(max-width: 820px) 90vw, 42vw"
            />
          </div>
          <div className="about-image about-image-small">
            <Image
              src="/assets/img/normal/about_2_2.png"
              alt="Community programme participant"
              fill
              sizes="(max-width: 820px) 45vw, 20vw"
            />
          </div>
          <div className="about-image about-image-accent">
            <Image
              src="/assets/img/normal/about_2_3.png"
              alt="Mother and children in a community boat"
              fill
              sizes="(max-width: 820px) 50vw, 24vw"
            />
          </div>
          <div className="impact-badge">
            <strong>15+</strong>
            <span>years of community impact</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="section-kicker">Welcome to Integrated Development</p>
          <h2>Transforming Communities, One Project at a Time</h2>
          <p>
            Our vision is a better rural Nigerian community where indigent
            residents are empowered economically, socially and politically.
          </p>
          <div className="about-features">
            <article>
              <span>
                <Image
                  src="/assets/img/icon/about-icon2-1.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </span>
              <div>
                <h3>Economic Empowerment</h3>
                <p>
                  Discover the inspiring stories of individuals and communities
                  transformed by our programs.
                </p>
              </div>
            </article>
            <article>
              <span>
                <Image
                  src="/assets/img/icon/about-icon2-2.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </span>
              <div>
                <h3>Education for Change</h3>
                <p>
                  Our success stories highlight the real-life impact of your
                  donations and the resilience of those we help.
                </p>
              </div>
            </article>
          </div>
          <Link className="primary-button" href="/about">
            Learn More About IRAID <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="impact-strip" aria-label="IRAID impact figures">
        <ImpactStats
          stats={[
            ["15+", "Team Personnel"],
            ["20+", "Successful Campaigns"],
            ["20+", "International Donors"],
            ["1.5k+", "Social Media Followers"],
          ]}
        />
      </section>

      <section className="home-section programme-section">
        <span className="programme-heart" aria-hidden="true">♥</span>
        <div className="center-heading">
          <p className="section-kicker">We Do It For All People</p>
          <h2>Our value system is based on the humanitarian spirit.</h2>
        </div>
        <div className="programme-grid">
          {programmes.map((item, index) => (
            <article
              className={`programme-card ${index < 3 ? "programme-card--top" : "programme-card--bottom"}`}
              key={item.title}
            >
              <div className="programme-image">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 92vw, (max-width: 1050px) 45vw, 30vw"
                />
              </div>
              <div className="programme-content">
                <span className="programme-mark" aria-hidden="true">
                  <Image src={item.icon} alt="" width={72} height={72} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href="/programmes">
                  Learn More <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="donation-feature">
        <div className="donation-copy">
          <p className="section-kicker">Make a Donation</p>
          <h2>Your Gift Creates Lasting Change</h2>
          <p>
            The most valuable gift you can give is your time. Our volunteers
            are the driving force behind everything we do, bringing passion
            and energy to our projects. Join a community of dedicated
            individuals and see the incredible impact of your actions
            firsthand.
          </p>
          <Link className="primary-button light-button" href="/contact">
            Get Involved <span>↗</span>
          </Link>
          <DonationCampaign />
        </div>
        <div className="donation-media">
          <div className="donation-image">
            <Image
              src="/assets/img/img/water/P30.jpeg"
              alt="IRAID water project"
              fill
              sizes="(max-width: 820px) 92vw, 46vw"
            />
            <div className="donation-video-overlay">
              <span>Watch IRAID in action</span>
              <VideoModal />
            </div>
          </div>
        </div>
      </section>

      <section className="home-section trustees-section">
        <div className="center-heading trustee-heading">
          <p className="section-kicker">Our Team</p>
          <h2>Meet The Trustees</h2>
        </div>
        <TrusteeCarousel />
      </section>

      <section className="home-section testimonial-section">
        <div className="center-heading">
          <p className="section-kicker">Testimonials</p>
          <h2>What The People Of Abia Had To Say?</h2>
        </div>
        <TestimonialRail />
      </section>

      <section className="home-section process-section">
        <Image
          className="process-hand"
          src="/assets/img/shape/hand-bg-shape2-1.png"
          alt=""
          width={208}
          height={176}
        />
        <div className="center-heading">
          <p className="section-kicker">Work Process</p>
          <h2>Our Donating Work Process</h2>
        </div>
        <div className="process-grid">
          {process.map(([, title, text], index) => (
            <article className="process-card" key={title}>
              <div className="process-card-thumb-wrap">
                <div className="process-card-thumb">
                  <Image
                    src="/assets/img/process/process-card-1-1.png"
                    alt=""
                    fill
                    sizes="298px"
                  />
                </div>
                <span className="process-card-icon" aria-hidden="true">
                  <Image
                    src={`/assets/img/icon/process-icon1-${index + 1}.svg`}
                    alt=""
                    width={70}
                    height={70}
                  />
                </span>
                <Image
                  className="process-card-shape"
                  src="/assets/img/process/process-card-shape2.png"
                  alt=""
                  width={136}
                  height={166}
                />
              </div>
              <div className="process-card-content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FaqSection />

      <section className="home-cta">
        <div>
          <p className="section-kicker">Call to Action</p>
          <h2>Lend a Hand to a Community</h2>
          <p>
            Partner with IRAID to support practical, locally led development.
          </p>
        </div>
        <Link className="primary-button light-button" href="/contact">
          Get Involved Today <span>↗</span>
        </Link>
      </section>
    </>
  );
}
