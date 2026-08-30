"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { galleryItems } from "@/data/site-content";

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<
    (typeof galleryItems)[number] | null
  >(null);
  const filters = [
    "All",
    ...Array.from(new Set(galleryItems.map(([category]) => category))),
  ];
  const visible = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter(([category]) => category === filter),
    [filter],
  );

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        const currentIndex = visible.indexOf(selected);
        const offset = event.key === "ArrowLeft" ? -1 : 1;
        const nextIndex =
          (currentIndex + offset + visible.length) % visible.length;
        setSelected(visible[nextIndex]);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, visible]);

  const selectedIndex = selected ? visible.indexOf(selected) : -1;
  const goTo = (offset: number) => {
    if (selectedIndex < 0) return;
    const nextIndex =
      (selectedIndex + offset + visible.length) % visible.length;
    setSelected(visible[nextIndex]);
  };

  return (
    <>
      <div className="gallery-toolbar">
        <div className="filter-row" role="group" aria-label="Gallery filters">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setFilter(name)}
              className={filter === name ? "active" : ""}
              aria-pressed={filter === name}
            >
              {name}
            </button>
          ))}
        </div>
        <p className="gallery-count">
          <strong>{visible.length}</strong> {visible.length === 1 ? "story" : "stories"}
        </p>
      </div>
      <div className="gallery-grid">
        {visible.map((item) => {
          const [category, src, title] = item;
          const tileIndex = galleryItems.indexOf(item);
          return (
            <button
              type="button"
              className={`gallery-tile tile-${tileIndex % 8}`}
              key={src}
              onClick={() => setSelected(item)}
              aria-label={`View ${title}`}
            >
              <Image
                src={src}
                alt={title}
                fill
                sizes="(max-width: 620px) 100vw, (max-width: 900px) 33vw, 25vw"
              />
              <span>
                <small>{category}</small>
                <strong>{title}</strong>
              </span>
            </button>
          );
        })}
      </div>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected[2]}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow--previous"
            onClick={(event) => {
              event.stopPropagation();
              goTo(-1);
            }}
            aria-label="Previous image"
          >
            ←
          </button>
          <div
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={selected[1]} alt={selected[2]} fill sizes="90vw" />
          </div>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow--next"
            onClick={(event) => {
              event.stopPropagation();
              goTo(1);
            }}
            aria-label="Next image"
          >
            →
          </button>
          <div className="lightbox-caption">
            <p>{selected[2]}</p>
            <span>
              {selected[0]} · {selectedIndex + 1} of {visible.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
