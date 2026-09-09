import Reveal from "./Reveal";

interface AboutProps {
  paragraphs: string[];
  avatar?: string;
  name: string;
  title: string;
}

export default function About({ paragraphs, avatar, name, title }: AboutProps) {
  return (
    <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-12 md:mt-20 lg:grid-cols-12">
      {avatar && (
        <Reveal className="lg:col-span-4">
          <figure>
            <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden bg-mist lg:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatar}
                alt={name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
            <figcaption className="mt-4 font-sans text-[11px] uppercase tracking-eyebrow text-muted">
              {name} / {title}
            </figcaption>
          </figure>
        </Reveal>
      )}

      <div className={avatar ? "lg:col-span-7 lg:col-start-6" : "lg:col-span-8 lg:col-start-5"}>
        {paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 90}>
            <p
              className={`ja-body text-pretty max-w-measure ${
                i === 0
                  ? "text-[16px] leading-[2] text-ink/90 md:text-[17.5px]"
                  : "mt-8 text-[14.5px] leading-[2] text-body md:text-[15.5px]"
              }`}
            >
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
