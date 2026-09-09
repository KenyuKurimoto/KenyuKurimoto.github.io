import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  /** Set for the last section so it doesn't double up on the footer rule. */
  className?: string;
}

export default function Section({
  id,
  index,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`shell scroll-mt-24 py-20 md:py-32 ${className}`}>
      <Reveal>
        <div className="grid grid-cols-1 items-baseline gap-x-14 border-t border-line pt-7 lg:grid-cols-12">
          <div className="flex items-baseline gap-4 lg:col-span-4">
            <span className="font-sans text-[10px] tracking-eyebrow text-sand">{index}</span>
            <p className="eyebrow">{eyebrow}</p>
          </div>
          <h2 className="mt-5 text-[clamp(1.7rem,4.2vw,2.9rem)] leading-[1.24] lg:col-span-8 lg:mt-0">
            {title}
          </h2>
        </div>
      </Reveal>

      {children}
    </section>
  );
}
