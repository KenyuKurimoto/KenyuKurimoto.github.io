import type { Certification } from "@/data/types";
import Reveal from "./Reveal";

export default function Credentials({ certifications }: { certifications: Certification[] }) {
  return (
    <ul className="mt-14 border-t border-line md:mt-20">
      {certifications.map((cert, i) => (
        <Reveal as="li" key={cert.name} delay={i * 45}>
          <div className="grid grid-cols-1 items-baseline gap-x-8 border-b border-line py-6 lg:grid-cols-12 lg:py-7">
            <h3 className="text-balance text-[15.5px] leading-snug lg:col-span-6 md:text-[17.5px]">
              {cert.name}
            </h3>
            <p className="mt-2 font-sans text-[12px] leading-relaxed text-muted lg:col-span-4 lg:mt-0">
              {cert.issuer}
            </p>
            <p className="mt-1 font-sans text-[11.5px] tracking-wide text-muted lg:col-span-2 lg:mt-0 lg:text-right">
              {cert.date}
            </p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
