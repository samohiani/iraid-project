import Link from "next/link";

export function CallToActionSection({
  className = "home-cta",
  eyebrow,
  title,
  body,
  actionLabel,
}: {
  className?: string;
  eyebrow: string;
  title: string;
  body: string;
  actionLabel: string;
}) {
  return (
    <section className={className}>
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <Link className="primary-button light-button" href="/contact">
        {actionLabel} <span>↗</span>
      </Link>
    </section>
  );
}
