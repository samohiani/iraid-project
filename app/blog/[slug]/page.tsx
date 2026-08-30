import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/data/site-content";

type StoryPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  return story
    ? { title: story.title, description: story.excerpt }
    : { title: "Story not found" };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) notFound();

  const relatedStories = stories.filter((item) => item.slug !== story.slug).slice(0, 2);

  return (
    <>
      <header className="story-detail-hero">
        <div className="story-detail-hero-inner">
          <Link className="story-back-link" href="/blog">
            <span>←</span> Back to stories
          </Link>
          <div className="story-detail-heading">
            <div>
              <div className="story-detail-meta">
                <span>{story.category}</span>
                <span>{story.dateLabel}</span>
                <span>{story.readTime}</span>
              </div>
              <h1>{story.title}</h1>
            </div>
            <p>{story.excerpt}</p>
          </div>
        </div>
      </header>

      <main className="story-detail-main">
        <div className="story-detail-cover">
          <Image src={story.image} alt={story.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 1180px" />
        </div>

        <div className="story-detail-layout">
          <aside className="story-detail-aside">
            <span className="story-detail-aside-label">In this story</span>
            <div className="story-detail-aside-rule" />
            <p>Community-led progress, shared openly.</p>
            <Link className="story-share-link" href="/contact">
              Talk to our team <span>↗</span>
            </Link>
          </aside>

          <article className="story-article">
            {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <blockquote>
              <p>“{story.quote}”</p>
              <cite>{story.quoteAttribution}</cite>
            </blockquote>

            <div className="story-detail-gallery">
              {story.gallery.map((image) => (
                <figure key={image.image}>
                  <Image src={image.image} alt={image.alt} fill sizes="(max-width: 620px) 100vw, 38vw" />
                </figure>
              ))}
            </div>

            <p>
              We share these stories because meaningful progress is a shared
              effort. If this work speaks to you, there is a place for you in
              the circle—through partnership, volunteering or practical support.
            </p>

            <div className="story-article-footer">
              <div>
                <span>Share this story</span>
                <a href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <Link className="primary-button" href="/contact">
                Support the work <span>↗</span>
              </Link>
            </div>
          </article>
        </div>
      </main>

      <section className="story-related inner-section" aria-labelledby="related-stories-title">
        <div className="blog-section-heading">
          <div>
            <p className="section-kicker">Keep reading</p>
            <h2 id="related-stories-title">More from the journal</h2>
          </div>
          <Link className="story-read-more" href="/blog">View all stories <span>↗</span></Link>
        </div>
        <div className="related-story-grid">
          {relatedStories.map((relatedStory) => (
            <Link href={`/blog/${relatedStory.slug}`} className="related-story-card" key={relatedStory.slug}>
              <div>
                <Image src={relatedStory.image} alt={relatedStory.imageAlt} fill sizes="(max-width: 620px) 100vw, 40vw" />
              </div>
              <span>{relatedStory.category}</span>
              <h3>{relatedStory.title}</h3>
              <b>Read more ↗</b>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
