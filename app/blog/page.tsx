import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Stories & insights",
  description: "Field notes, community stories and updates from IRAID.",
};

export default function BlogPage() {
  const [featuredStory, ...otherStories] = stories;

  return (
    <>
      <section className="blog-hero" aria-labelledby="blog-page-title">
        <div className="blog-hero-copy">
          <p className="section-kicker">From the field</p>
          <h1 id="blog-page-title">
            Stories that make <em>impact</em> visible.
          </h1>
          <p>
            A closer look at the people, ideas and practical work helping rural
            communities build stronger futures.
          </p>
          <div className="blog-hero-actions">
            <a className="primary-button" href="#latest-stories">
              Explore the stories <span>↓</span>
            </a>
            <span className="blog-hero-note">Real work. Shared openly.</span>
          </div>
        </div>
        <div className="blog-hero-panel" aria-label="IRAID story highlights">
          <div className="blog-hero-panel-orbit" aria-hidden="true" />
          <p className="blog-hero-panel-label">IRAID journal / 2025</p>
          <div className="blog-hero-panel-mark">↗</div>
          <div className="blog-hero-panel-copy">
            <strong>People first.</strong>
            <span>Progress that lasts.</span>
          </div>
          <div className="blog-hero-panel-footer">
            <span>04</span>
            <span>stories to explore</span>
          </div>
        </div>
      </section>

      <section className="inner-section blog-listing" id="latest-stories">
        <div className="blog-section-heading">
          <div>
            <p className="section-kicker">Latest from IRAID</p>
            <h2>Stories worth sharing</h2>
          </div>
          <p>
            Read the updates behind our programmes and discover the many ways
            communities are creating change.
          </p>
        </div>

        <div className="blog-layout">
          <div className="blog-feed">
            <article className="blog-feature-card">
              <Link
                href={`/blog/${featuredStory.slug}`}
                className="blog-feature-media"
                aria-label={`Read ${featuredStory.title}`}
              >
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
                <span className="blog-feature-badge">Featured story</span>
                <span className="blog-image-arrow" aria-hidden="true">↗</span>
              </Link>
              <div className="blog-feature-content">
                <StoryMeta story={featuredStory} />
                <h2>
                  <Link href={`/blog/${featuredStory.slug}`}>
                    {featuredStory.title}
                  </Link>
                </h2>
                <p>{featuredStory.excerpt}</p>
                <Link className="story-read-more" href={`/blog/${featuredStory.slug}`}>
                  Read the story <span>↗</span>
                </Link>
              </div>
            </article>

            <div className="blog-secondary-grid">
              {otherStories.map((story) => (
                <article className="blog-story-card" key={story.slug}>
                  <Link
                    href={`/blog/${story.slug}`}
                    className="blog-story-media"
                    aria-label={`Read ${story.title}`}
                  >
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      sizes="(max-width: 620px) 100vw, 30vw"
                    />
                    <span className="blog-image-arrow" aria-hidden="true">↗</span>
                  </Link>
                  <div className="blog-story-content">
                    <StoryMeta story={story} />
                    <h3>
                      <Link href={`/blog/${story.slug}`}>{story.title}</Link>
                    </h3>
                    <p>{story.excerpt}</p>
                    <Link className="story-read-more" href={`/blog/${story.slug}`}>
                      Read more <span>↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="blog-sidebar" aria-label="Blog navigation">
            <div className="blog-sidebar-card blog-sidebar-intro">
              <p className="section-kicker">Stay close to the work</p>
              <h2>Good change deserves a wider circle.</h2>
              <p>
                Follow the ideas and community-led projects shaping a more
                resilient future across Abia State.
              </p>
              <Link className="primary-button" href="/contact">
                Work with IRAID <span>↗</span>
              </Link>
            </div>

            <div className="blog-sidebar-card">
              <p className="blog-sidebar-label">Browse by focus</p>
              <div className="blog-tags">
                {["Community", "Family health", "Education", "Livelihoods"].map(
                  (tag) => <span key={tag}>{tag}</span>,
                )}
              </div>
            </div>

            <div className="blog-sidebar-card blog-recent-card">
              <p className="blog-sidebar-label">More to read</p>
              {stories.slice(1, 4).map((story, index) => (
                <Link className="blog-recent-item" href={`/blog/${story.slug}`} key={story.slug}>
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{story.title}</strong>
                    <small>{story.category}</small>
                  </div>
                  <b aria-hidden="true">↗</b>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function StoryMeta({ story }: { story: (typeof stories)[number] }) {
  return (
    <div className="story-meta">
      <span>{story.category}</span>
      <span>{story.dateLabel}</span>
      <span>{story.readTime}</span>
    </div>
  );
}
