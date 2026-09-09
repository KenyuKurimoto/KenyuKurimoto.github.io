import type { SkillCategory } from "@/data/types";
import Reveal from "./Reveal";

export default function Expertise({ skills }: { skills: SkillCategory[] }) {
  return (
    <div className="mt-14 grid grid-cols-1 gap-x-12 border-t border-line md:mt-20 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((group, i) => (
        <Reveal key={group.category} delay={(i % 3) * 90} className="border-b border-line py-9">
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[10px] tracking-eyebrow text-sand">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[17px] leading-snug md:text-[18px]">{group.category}</h3>
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
            {group.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
