import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  body,
  action,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {body && <p className="section-copy">{body}</p>}
      {action && (
        <Link href={action.href} className="text-link">
          {action.label} <span>↗</span>
        </Link>
      )}
    </div>
  );
}
