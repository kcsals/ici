"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type CarouselProps = {
  images: string[]; // array of filenames or full paths
  basePath?: string; // if provided, will prefix the image names
  alt?: string;
  autoPlay?: boolean;
  intervalMs?: number;
  className?: string;
};

export default function Carousel({
  images,
  basePath = "",
  alt = "Carousel image",
  autoPlay = true,
  intervalMs = 6000,
  className = "",
}: CarouselProps) {
  const items = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || hovered || items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, hovered, items.length, intervalMs]);

  if (!items.length) return null;

  const goPrev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  const goNext = () => setIndex((prev) => (prev + 1) % items.length);

  // Manual swipe and controls removed to ensure auto-only scrolling

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border bg-white/70 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Photo carousel"
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((src, i) => {
          const full = basePath ? `${basePath}/${src}` : src;
          return (
            <div
              key={`${src}-${i}`}
              className="relative w-full flex-shrink-0 h-[28rem] sm:h-[36rem] md:h-[44rem]"
            >
              <Image
                src={full}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                priority={i === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
