import Image from "next/image";
import Link from "next/link";

export function DonationCampaign() {
  return (
    <article className="donation-campaign">
      <div className="donation-campaign-image">
        <Image
          src="/assets/img/donation/donation2-1.png"
          alt="A smiling child supported by IRAID"
          fill
          sizes="(max-width: 820px) 88vw, 180px"
        />
      </div>
      <div className="donation-campaign-content">
        <h3>Support IRAID&apos;s Community Programs</h3>
        <p>
          Help strengthen rural and peri-urban communities through capacity
          building, skills acquisition, agriculture, and enterprise support.
        </p>
        <Link className="donation-campaign-button" href="/contact">
          Donate Now <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
