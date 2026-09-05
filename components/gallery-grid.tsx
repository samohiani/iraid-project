"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export type ProjectStatus = "ongoing" | "completed";
export type GalleryItem = {
  kind: "image" | "video";
  category: string;
  src: string;
  title: string;
  status: ProjectStatus;
};

function imageUrl(src: string, width: number) {
  if (!src.startsWith("https://cdn.sanity.io/images/")) return src;
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}auto=format&fit=max&w=${width}`;
}

export function GalleryGrid({ items }: { items: readonly GalleryItem[] }) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<"all" | ProjectStatus>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [mediaReady, setMediaReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(items.map((item) => item.category))).sort((left, right) =>
      left.localeCompare(right),
    ),
  ];
  const statusCounts = {
    all: items.length,
    ongoing: items.filter((item) => item.status === "ongoing").length,
    completed: items.filter((item) => item.status === "completed").length,
  };
  const visible = useMemo(() => items.filter((item) =>
    (categoryFilter === "All" || item.category === categoryFilter) &&
    (statusFilter === "all" || item.status === statusFilter),
  ), [categoryFilter, items, statusFilter]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        const currentIndex = visible.findIndex((item) => item.src === selected.src);
        const offset = event.key === "ArrowLeft" ? -1 : 1;
        const nextIndex = (currentIndex + offset + visible.length) % visible.length;
        if (visible[nextIndex]) {
          setMediaReady(false);
          setSelected(visible[nextIndex]);
        }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKeyDown); };
  }, [selected, visible]);

  const selectedIndex = selected ? visible.findIndex((item) => item.src === selected.src) : -1;
  const goTo = (offset: number) => {
    if (selectedIndex < 0) return;
    const nextIndex = (selectedIndex + offset + visible.length) % visible.length;
    if (visible[nextIndex]) {
      setMediaReady(false);
      setSelected(visible[nextIndex]);
    }
  };

  const openItem = (item: GalleryItem) => {
    setMediaReady(false);
    setSelected(item);
  };

  useEffect(() => {
    if (!selected || selectedIndex < 0 || visible.length < 2) return;

    const adjacentItems = [
      visible[(selectedIndex - 1 + visible.length) % visible.length],
      visible[(selectedIndex + 1) % visible.length],
    ];

    adjacentItems.forEach((item) => {
      if (item?.kind !== "image") return;
      const preload = new window.Image();
      preload.src = imageUrl(item.src, 1920);
    });
  }, [selected, selectedIndex, visible]);

  return (
    <>
      <div className="gallery-toolbar">
        <div className="gallery-status-filters" role="group" aria-label="Project status">
          {(["all", "ongoing", "completed"] as const).map((status) => (
            <button key={status} type="button" onClick={() => setStatusFilter(status)} className={statusFilter === status ? "active" : ""} aria-pressed={statusFilter === status}>
              <span className={`status-dot status-dot--${status}`} aria-hidden="true" />
              {status === "all" ? "All work" : status === "ongoing" ? "Ongoing" : "Completed"}
              <strong>{statusCounts[status]}</strong>
            </button>
          ))}
        </div>
      </div>
      <div className="gallery-category-row">
        <div className="gallery-category-heading">
          <p className="gallery-filter-label">Browse by programme</p>
          <p className="gallery-count"><strong>{visible.length}</strong> {visible.length === 1 ? "item" : "items"}</p>
        </div>
        <div className="filter-row" role="group" aria-label="Gallery categories">
          {categories.map((name) => <button key={name} type="button" onClick={() => setCategoryFilter(name)} className={categoryFilter === name ? "active" : ""} aria-pressed={categoryFilter === name}>{name}</button>)}
        </div>
      </div>
      <div className="gallery-grid">
        {visible.map((item) => (
          <button type="button" className="gallery-tile" key={`${item.kind}-${item.src}`} onClick={() => openItem(item)} aria-label={`View ${item.title}`}>
            {item.kind === "video" ? (
              <video src={item.src} muted playsInline preload="metadata" aria-label={item.title} />
            ) : (
              <Image src={imageUrl(item.src, 900)} alt={item.title} fill unoptimized sizes="(max-width: 620px) 50vw, (max-width: 900px) 33vw, 25vw" />
            )}
            <span><small>{item.category}</small><b className={`gallery-status gallery-status--${item.status}`}>{item.status === "ongoing" ? "Ongoing" : "Completed"}</b><strong>{item.title}</strong></span>
            {item.kind === "video" && <i className="gallery-play" aria-hidden="true">▶</i>}
          </button>
        ))}
      </div>
      {!visible.length && <p className="gallery-empty">No projects are available right now. Please check back shortly.</p>}
      {mounted && selected && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close preview">×</button>
          {visible.length > 1 && <button type="button" className="lightbox-arrow lightbox-arrow--previous" onClick={(event) => { event.stopPropagation(); goTo(-1); }} aria-label="Previous item">←</button>}
          <div className={`lightbox-image${mediaReady ? " is-ready" : ""}`} onClick={(event) => event.stopPropagation()}>
            {!mediaReady && <div className="lightbox-loading" role="status"><span className="sr-only">Loading preview</span></div>}
            {selected.kind === "video" ? (
              <video key={selected.src} src={selected.src} controls autoPlay playsInline preload="metadata" aria-label={selected.title} onLoadedData={() => setMediaReady(true)} onError={() => setMediaReady(true)} />
            ) : (
              <Image key={selected.src} src={imageUrl(selected.src, 1920)} alt={selected.title} fill unoptimized sizes="90vw" onLoad={() => setMediaReady(true)} onError={() => setMediaReady(true)} />
            )}
          </div>
          {visible.length > 1 && <button type="button" className="lightbox-arrow lightbox-arrow--next" onClick={(event) => { event.stopPropagation(); goTo(1); }} aria-label="Next item">→</button>}
          <div className={`lightbox-caption${mediaReady ? " is-ready" : ""}`} aria-live="polite"><p>{selected.title}</p><span>{selected.category} · {selected.status === "ongoing" ? "Ongoing" : "Completed"} · {selectedIndex + 1} of {visible.length}</span></div>
        </div>,
        document.body,
      )}
    </>
  );
}
