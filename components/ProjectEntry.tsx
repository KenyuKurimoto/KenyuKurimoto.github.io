import type { MediaItem, Project } from "@/data/types";
import type { UiStrings } from "@/data/ui";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";

function hostLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

interface ProjectEntryProps {
  project: Project;
  index: number;
  ui: UiStrings;
}

export default function ProjectEntry({ project, index, ui }: ProjectEntryProps) {
  const media: MediaItem[] = [
    ...(project.images ?? []),
    ...(project.videos ?? []),
    ...(project.youtube ? [{ url: project.youtube }] : []),
  ];

  const stack = (
    <ul className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <li key={tech} className="tag">
          {tech}
        </li>
      ))}
    </ul>
  );

  return (
    <article id={`work-${index}`} className="scroll-mt-24 border-t border-line pt-9 md:pt-14">
      <div className="grid grid-cols-1 gap-x-14 lg:grid-cols-12">
        {/* rail: number, dates, role, stack */}
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-baseline gap-5">
              <span className="font-display text-[40px] leading-none text-sand md:text-[52px]">
                {String(index).padStart(2, "0")}
              </span>
              <span className="eyebrow">{project.period}</span>
            </div>

            <div className="mt-9 hidden lg:block">
              <p className="eyebrow">{ui.labels.role}</p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-body">{project.role}</p>
              <p className="eyebrow mt-8">{ui.labels.stack}</p>
              <div className="mt-3">{stack}</div>
            </div>
          </div>
        </Reveal>

        {/* body */}
        <div className="mt-6 lg:col-span-8 lg:mt-0">
          <Reveal>
            <h3 className="text-balance text-[clamp(1.35rem,3vw,2.05rem)] leading-[1.38]">
              {project.name}
            </h3>

            {project.summary && (
              <p className="ja-body mt-5 max-w-measure font-display text-[19px] leading-[1.75] text-navy md:text-[22px]">
                {project.summary}
              </p>
            )}

            <p className="ja-body text-pretty mt-7 max-w-measure text-[14.5px] leading-[2] text-body md:text-[15.5px]">
              {project.description}
            </p>

            <div className="mt-8 lg:hidden">
              <p className="eyebrow">
                {ui.labels.role} — {project.role}
              </p>
              <div className="mt-4">{stack}</div>
            </div>
          </Reveal>

          {media.length > 0 && (
            <Reveal>
              <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 md:mt-12">
                {media.map((item, i) => (
                  <figure
                    key={`${item.url}-${i}`}
                    className={
                      media.length % 2 === 1 && i === media.length - 1 ? "sm:col-span-2" : ""
                    }
                  >
                    <MediaFrame item={item} watchLabel={ui.labels.watch} />
                    {item.caption && (
                      <figcaption className="ja-body mt-3 text-[11.5px] leading-relaxed text-muted">
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </Reveal>
          )}

          {project.links && project.links.length > 0 && (
            <Reveal>
              <div className="mt-11 md:mt-14">
                <p className="eyebrow">{ui.labels.references}</p>
                <ul className="mt-4">
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-6 border-t border-hairline py-4 last:border-b"
                      >
                        <span className="ja-body text-[13px] leading-relaxed text-ink transition-colors duration-300 group-hover:text-navy md:text-[13.5px]">
                          {link.label}
                        </span>
                        <span className="flex shrink-0 items-center gap-2 pt-[3px] font-sans text-[10.5px] tracking-wide text-muted">
                          <span className="hidden sm:inline">{hostLabel(link.url)}</span>
                          <svg
                            viewBox="0 0 12 12"
                            className="h-3 w-3 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 9L9 3M9 3H4M9 3v5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </article>
  );
}
