"use client";

import { useState } from "react";

interface PhotoFrameProps {
  src?: string;
  alt: string;
  /** Shown inside the placeholder when no photograph is available yet. */
  fallbackLabel: string;
  fallbackSub?: string;
  ratio?: string;
}

/**
 * Photographs are optional: if a file has not been dropped in yet (or fails to load),
 * the frame degrades to a quiet placeholder rather than a broken image.
 */
export default function PhotoFrame({
  src,
  alt,
  fallbackLabel,
  fallbackSub,
  ratio = "aspect-[3/2]",
}: PhotoFrameProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`${ratio} flex w-full flex-col items-center justify-center gap-2 border border-hairline bg-mist`}
      >
        <span className="font-sans text-[10px] uppercase tracking-eyebrow text-muted/70">
          {fallbackLabel}
        </span>
        {fallbackSub && (
          <span className="font-display text-[15px] text-muted/60">{fallbackSub}</span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${ratio} w-full overflow-hidden bg-mist`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
