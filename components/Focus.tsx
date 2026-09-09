import type { FocusArea } from "@/data/types";
import Reveal from "./Reveal";

export default function Focus({ areas }: { areas: FocusArea[] }) {
  return (
    <div className="mt-14 grid grid-cols-1 border-t border-line md:mt-20 md:grid-cols-2">
      {areas.map((area, i) => (
        <Reveal
          key={area.index}
          delay={i * 120}
          className={`border-b border-line py-10 md:py-14 ${
            i === 0 ? "md:pr-12 lg:pr-16" : "md:border-l md:border-line md:pl-12 lg:pl-16"
          }`}
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display text-[26px] leading-none text-sand">{area.index}</span>
            <span className="eyebrow">{area.titleEn}</span>
          </div>
          <h3 className="mt-6 text-[clamp(1.35rem,2.6vw,1.85rem)] leading-[1.4]">{area.title}</h3>
          <p className="ja-body text-pretty mt-5 max-w-measure text-[14.5px] leading-[2] text-body md:text-[15px]">
            {area.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
