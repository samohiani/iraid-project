import Image from "next/image";
import { process } from "@/data/site-content";

export function DonationProcessSection({
  className,
  id,
  description,
  showHand = false,
  showNumbers = false,
}: {
  className: string;
  id?: string;
  description?: string;
  showHand?: boolean;
  showNumbers?: boolean;
}) {
  return (
    <section className={className} id={id}>
      {showHand ? (
        <Image
          className="process-hand"
          src="/assets/img/shape/hand-bg-shape2-1.png"
          alt=""
          width={208}
          height={176}
        />
      ) : null}
      <div className="center-heading">
        <p className="section-kicker">Work Process</p>
        <h2>Our Donating Work Process</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="process-grid">
        {process.map(([number, title, text], index) => (
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
              <span className="process-card-icon" aria-hidden="true">
                <Image
                  src={`/assets/img/icon/process-icon1-${index + 1}.svg`}
                  alt=""
                  width={72}
                  height={72}
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
              {showNumbers ? <span className="process-number">{number}</span> : null}
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
