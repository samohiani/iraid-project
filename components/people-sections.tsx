import Link from "next/link";
import { TestimonialRail } from "@/components/testimonial-rail";
import { TrusteeCarousel } from "@/components/trustee-carousel";

export function TrusteesSection({
  className,
  id,
  body,
  showTeamLink = false,
}: {
  className: string;
  id?: string;
  body?: string;
  showTeamLink?: boolean;
}) {
  return (
    <section className={className} id={id}>
      <div className="center-heading trustee-heading">
        <p className="section-kicker">Our Team</p>
        <h2>Meet The Trustees</h2>
        {body ? <p>{body}</p> : null}
      </div>
      <TrusteeCarousel />
      {showTeamLink ? (
        <div className="about-section-link">
          <Link className="text-link" href="/team">
            Meet the full team →
          </Link>
        </div>
      ) : null}
    </section>
  );
}

export function TestimonialsSection({
  className,
  id,
  title,
}: {
  className: string;
  id?: string;
  title: string;
}) {
  return (
    <section className={className} id={id}>
      <div className="center-heading">
        <p className="section-kicker">Testimonials</p>
        <h2>{title}</h2>
      </div>
      <TestimonialRail />
    </section>
  );
}
