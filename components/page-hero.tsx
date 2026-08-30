export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <header className="page-hero">
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </header>
  );
}
