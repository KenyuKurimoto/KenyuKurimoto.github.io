import type { Experience } from "@/data/types";
import type { UiStrings } from "@/data/ui";
import ProjectEntry from "./ProjectEntry";
import ProjectIndex from "./ProjectIndex";
import Reveal from "./Reveal";

export default function Work({ experiences, ui }: { experiences: Experience[]; ui: UiStrings }) {
  return (
    <div className="mt-14 md:mt-20">
      {experiences.map((exp) => (
        <div key={exp.company}>
          <Reveal>
            <div className="grid grid-cols-1 gap-x-14 border-t border-line pt-7 lg:grid-cols-12">
              <p className="eyebrow lg:col-span-4">{exp.period}</p>
              <div className="mt-5 lg:col-span-8 lg:mt-0">
                <h3 className="text-[clamp(1.5rem,3.2vw,2.2rem)] leading-[1.3]">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet !text-ink hover:!text-navy"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <p className="mt-3 font-sans text-[11px] uppercase tracking-eyebrow text-muted">
                  {exp.role}
                </p>
                {exp.overview && (
                  <p className="ja-body text-pretty mt-7 max-w-measure text-[14.5px] leading-[2] text-body md:text-[15.5px]">
                    {exp.overview}
                  </p>
                )}
              </div>
            </div>
          </Reveal>

          {exp.projects && exp.projects.length > 0 && (
            <>
              <ProjectIndex projects={exp.projects} />
              <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
                {exp.projects.map((project, i) => (
                  <ProjectEntry key={project.name} project={project} index={i + 1} ui={ui} />
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
