"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/data/types";

function youtubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1) || null;
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

function youtubeStart(url: string): number | null {
  try {
    const t = new URL(url).searchParams.get("t");
    if (!t) return null;
    const seconds = parseInt(t.replace(/s$/, ""), 10);
    return Number.isFinite(seconds) ? seconds : null;
  } catch {
    return null;
  }
}

/**
 * A single 16:9 media plate. Videos hold off on downloading until they scroll into
 * view, and YouTube embeds stay behind a still frame until the visitor asks for them —
 * a project page with a dozen clips should still be light on a phone.
 */
export default function MediaFrame({ item, watchLabel }: { item: MediaItem; watchLabel: string }) {
  const isVideo = /\.(mp4|webm)$/i.test(item.url);
  const ytId = item.url.includes("youtu") ? youtubeId(item.url) : null;

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [ytPlaying, setYtPlaying] = useState(false);
  const [thumb, setThumb] = useState(
    ytId ? `https://i.ytimg.com/vi/${ytId}/maxresdefault.jpg` : "",
  );

  useEffect(() => {
    if (!isVideo) return;
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVideoSrc(item.url);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVideoSrc(item.url);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVideo, item.url]);

  useEffect(() => {
    if (videoSrc) videoRef.current?.play().catch(() => {});
  }, [videoSrc]);

  const start = ytId ? youtubeStart(item.url) : null;

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden border border-hairline bg-mist"
    >
      {ytId ? (
        ytPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1${
              start ? `&start=${start}` : ""
            }`}
            title={item.caption || "YouTube video"}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setYtPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={watchLabel}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt=""
              loading="lazy"
              decoding="async"
              onError={() => setThumb(`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`)}
              onLoad={(e) => {
                /*
                 * A missing maxresdefault does not 404 into onError — YouTube answers
                 * with a 120x90 grey stand-in that decodes fine. Catch it by size.
                 */
                if (e.currentTarget.naturalWidth < 200) {
                  setThumb(`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`);
                }
              }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-ink/20" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-canvas/70 bg-canvas/15 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-canvas/30">
              <span className="ml-[3px] block h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-canvas" />
            </span>
          </button>
        )
      ) : isVideo ? (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-label={item.caption}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={item.url}
          alt={item.caption || ""}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
