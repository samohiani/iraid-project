import type { Metadata } from "next";
import { GalleryGrid, type GalleryItem } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { galleryQuery, hasSanityConfig, sanityClient } from "@/lib/sanity";

export const metadata: Metadata = { title: "Gallery" };

// Pick up newly published Sanity projects without requiring a code deployment.
export const revalidate = 60;

type GalleryProject = {
  category: string;
  status?: GalleryItem["status"];
  images?: Array<{ src?: string; alt?: string; caption?: string }>;
  video?: { src?: string; caption?: string };
};

function toGalleryItems(project: GalleryProject): GalleryItem[] {
  const status: GalleryItem["status"] =
    project.status === "ongoing" ? "ongoing" : "completed";
  const images = (project.images ?? []).flatMap((image) =>
    image.src
      ? [{
          kind: "image" as const,
          category: project.category,
          src: image.src,
          title: image.caption || image.alt || project.category,
          status,
        }]
      : [],
  );
  const video = project.video?.src
    ? [{
        kind: "video" as const,
        category: project.category,
        src: project.video.src,
        title: project.video.caption || project.category,
        status,
      }]
    : [];

  return [...images, ...video];
}

export default async function GalleryPage() {
  let projects: GalleryProject[] = [];

  if (hasSanityConfig && sanityClient) {
    try {
      projects = await sanityClient.fetch(galleryQuery);
    } catch (error) {
      console.error("Unable to load gallery content from Sanity", error);
    }
  }

  const managedItems = projects.flatMap(toGalleryItems);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="People, places and progress"
        body="A closer look at the people, places and practical work behind IRAID’s community-led programmes."
      />
      <section className="inner-section gallery-section">
        <div className="gallery-intro">
          <div>
            <p className="section-kicker">See the work</p>
            <h2>Small moments. Lasting change.</h2>
          </div>
          <p>
            From community conversations and skills training to better access
            to water, health and livelihoods, these moments show what progress
            looks like on the ground.
          </p>
        </div>
        <GalleryGrid items={managedItems} />
      </section>
    </>
  );
}
