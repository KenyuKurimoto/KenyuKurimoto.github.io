import type { Project } from "@/data/types";
import Reveal from "./Reveal";

/**
 * A contents list for the Work section. The page is long by design, so the seven
 * projects are laid out up front and each row jumps to its entry.
 */
export default function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <Reveal>
      <ol className="mt-12 border-t border-line md:mt-16">
        {projects.map((project, i) => (
          <li key={project.name}>
            <a
              href={`#work-${i + 1}`}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 border-b border-hairline py-4 md:grid-cols-[auto_1fr_auto] md:gap-x-8 md:py-5"
            >
              <span className="font-sans text-[10px] tracking-eyebrow text-sand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="ja-body text-[13.5px] leading-snug text-ink transition-colors duration-300 group-hover:text-navy md:text-[15px]">
                {project.name}
              </span>
              <span className="col-start-2 mt-1 font-sans text-[10.5px] tracking-eyebrow text-muted md:col-start-3 md:mt-0 md:text-right">
                {project.period}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
