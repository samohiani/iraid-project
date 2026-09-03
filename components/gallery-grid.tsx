"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export type ProjectStatus = "ongoing" | "completed";
export type GalleryItem = { category: string; src: string; title: string; status: ProjectStatus };

export function GalleryGrid({ items }: { items: readonly GalleryItem[] }) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<"all" | ProjectStatus>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
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
        if (visible[nextIndex]) setSelected(visible[nextIndex]);
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
    if (visible[nextIndex]) setSelected(visible[nextIndex]);
  };

  return (
    <>
      <div className="gallery-toolbar">
        <div className="gallery-status-filters" role="group" aria-label="Project status">
          {(["all", "ongoing", "completed"] as const).map((status) => (
            <button key={status} type="button" onClick={() => setStatusFilter(status)} className={statusFilter === status ? "active" : ""} aria-pressed={statusFilter === status}>
              <span className={`status-dot status-dot--${status}`} aria-hidden="true" />
              {status === "all" ? "All projects" : status === "ongoing" ? "Ongoing" : "Completed"}
              <strong>{statusCounts[status]}</strong>
            </button>
          ))}
        </div>
      </div>
      <div className="gallery-category-row">
        <p className="gallery-filter-label">Browse by programme</p>
        <div className="filter-row" role="group" aria-label="Gallery categories">
          {categories.map((name) => <button key={name} type="button" onClick={() => setCategoryFilter(name)} className={categoryFilter === name ? "active" : ""} aria-pressed={categoryFilter === name}>{name}</button>)}
        </div>
        <p className="gallery-count"><strong>{visible.length}</strong> {visible.length === 1 ? "project" : "projects"}</p>
      </div>
      <div className="gallery-grid">
        {visible.map((item) => (
          <button type="button" className="gallery-tile" key={item.src} onClick={() => setSelected(item)} aria-label={`View ${item.title}`}>
            <Image src={item.src} alt={item.title} fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 33vw, 25vw" />
            <span><small>{item.category}</small><b className={`gallery-status gallery-status--${item.status}`}>{item.status === "ongoing" ? "Ongoing" : "Completed"}</b><strong>{item.title}</strong></span>
          </button>
        ))}
      </div>
      {mounted && selected && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image">×</button>
          <button type="button" className="lightbox-arrow lightbox-arrow--previous" onClick={(event) => { event.stopPropagation(); goTo(-1); }} aria-label="Previous image">←</button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={selected.src} alt={selected.title} fill sizes="90vw" /></div>
          <button type="button" className="lightbox-arrow lightbox-arrow--next" onClick={(event) => { event.stopPropagation(); goTo(1); }} aria-label="Next image">→</button>
          <div className="lightbox-caption"><p>{selected.title}</p><span>{selected.category} · {selected.status === "ongoing" ? "Ongoing" : "Completed"} · {selectedIndex + 1} of {visible.length}</span></div>
        </div>,
        document.body,
      )}
    </>
  );
}
