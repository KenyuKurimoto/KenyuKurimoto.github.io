import type { Education } from "@/data/types";
import type { UiStrings } from "@/data/ui";
import PhotoFrame from "./PhotoFrame";
import Reveal from "./Reveal";

export default function Journey({ education, ui }: { education: Education[]; ui: UiStrings }) {
  return (
    <ol className="mt-14 md:mt-20">
      {education.map((entry, i) => (
        <Reveal as="li" key={entry.school} delay={i * 60}>
          <div className="grid grid-cols-1 items-start gap-x-14 gap-y-7 border-t border-line py-10 md:py-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <figure>
                <PhotoFrame
                  src={entry.photo}
                  alt={entry.school}
                  fallbackLabel={ui.labels.photoPending}
                  fallbackSub={entry.period}
                />
                {entry.photoCaption && (
                  <figcaption className="ja-body mt-3 text-[11.5px] leading-relaxed text-muted">
                    {entry.photoCaption}
                  </figcaption>
                )}
              </figure>
            </div>

            <div className="lg:col-span-7">
              <p className="eyebrow">{entry.period}</p>
              <h3 className="text-balance mt-4 text-[clamp(1.15rem,2.5vw,1.65rem)] leading-[1.45]">
                {entry.school}
              </h3>
              {entry.degree && (
                <p className="mt-3 font-sans text-[11px] uppercase tracking-eyebrow text-sand">
                  {entry.degree}
                </p>
              )}
              {entry.note && (
                <p className="ja-body text-pretty mt-6 max-w-measure text-[14px] leading-[2] text-body md:text-[15px]">
                  {entry.note}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
