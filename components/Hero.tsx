import type { Hero as HeroType, Metric } from "@/data/types";

interface HeroProps {
  hero: HeroType;
  metrics: Metric[];
}

export default function Hero({ hero, metrics }: HeroProps) {
  return (
    <section className="relative pt-[104px] md:pt-[168px]">
      <div className="shell">
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-sand md:w-12" />
          <p className="eyebrow">{hero.eyebrow}</p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-x-14 md:mt-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h1 className="text-[clamp(2.6rem,8.5vw,5.4rem)] leading-[1.06] tracking-[-0.02em]">
              {hero.name}
            </h1>
            <p className="mt-6 font-sans text-[11px] uppercase tracking-eyebrow text-muted">
              {hero.nameLatin}
            </p>
          </div>

          <div className="mt-11 lg:col-span-5 lg:mt-0 lg:pb-2">
            <span className="mb-6 block h-px w-full bg-line" />
            <p className="font-display text-[19px] leading-[1.6] text-ink md:text-[21px]">
              {hero.role}
            </p>
            <p className="ja-body mt-5 max-w-measure text-[14.5px] leading-[1.95] text-body md:text-[15px]">
              {hero.lede}
            </p>
          </div>
        </div>
      </div>

      {/* 16:9 full-bleed plate */}
      <figure className="mt-14 md:mt-24">
        <div className="relative aspect-video w-full overflow-hidden bg-mist">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.image}
            alt={hero.imageCaption}
            className="hero-image absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>
        <figcaption className="shell mt-4 flex justify-end">
          <span className="ja-body max-w-[46ch] text-right font-sans text-[11.5px] leading-relaxed text-muted">
            {hero.imageCaption}
          </span>
        </figcaption>
      </figure>

      {/* numbers band */}
      <div className="shell mt-16 md:mt-24">
        <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="border-b border-line px-1 py-7 md:border-b-0 md:py-9 md:pl-6 md:pr-4 md:first:pl-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-line"
            >
              <dt className="font-display text-[38px] leading-none text-ink md:text-[46px]">
                {metric.value}
              </dt>
              <dd className="mt-3 whitespace-pre-line font-sans text-[11px] leading-[1.7] tracking-wide text-muted">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
