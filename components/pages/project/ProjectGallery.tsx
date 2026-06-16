"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { ProjectImage } from "./project-data";

type ProjectGalleryProps = {
  title: string;
  images: ProjectImage[];
};

export default function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  const openAt = (i: number) => {
    setActive(i);
    setOpen(true);
  };

  // keyboard controls + lock scroll while the lightbox is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  return (
    <>
      <div className="rounded-[28px] bg-[#111] p-4 shadow-[0_25px_40px_-20px_rgba(0,0,0,0.65)] md:p-5">
        <button
          type="button"
          onClick={() => openAt(0)}
          className="group block w-full cursor-zoom-in overflow-hidden rounded-2xl"
          aria-label={`Open ${title} main image`}
        >
          <div className="relative aspect-[16/10]">
            <Image
              src={images[0].src}
              alt={`${title} main showcase`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 56vw"
              priority
            />
          </div>
        </button>

        <div className="mt-3 grid grid-cols-3 gap-2 md:grid-cols-4">
          {images.slice(1).map((img, i) => (
            <button
              type="button"
              key={`${title}-${img.src}`}
              onClick={() => openAt(i + 1)}
              className="group block cursor-zoom-in overflow-hidden rounded-lg"
              aria-label={`Open ${img.label}`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={`${title} - ${img.label}`}
                  fill
                  className="object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(max-width: 768px) 30vw, 16vw"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
        >
          {/* close */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          <figure
            className="relative flex max-h-[88vh] w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[78vh] w-full">
              <Image
                src={images[active].src}
                alt={`${title} - ${images[active].label}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <figcaption className="mt-3 text-sm text-white/80">
              {images[active].label}
              <span className="ml-2 text-white/40">
                {active + 1} / {images.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
