"use client";

import { useState } from "react";
import { Experience as ExperienceType } from "@/data/types";
import ProjectItem from "./ProjectItem";

interface ExperienceProps {
  experiences: ExperienceType[];
  lang?: "ja" | "en";
}

export default function Experience({ experiences, lang = "ja" }: ExperienceProps) {
  const [expandedCompany, setExpandedCompany] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-5">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          {/* 会社ヘッダー */}
          <div className="p-6 md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue to-[#0ea5e9] text-white flex items-center justify-center text-xl">
                💼
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-navy leading-snug">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <p className="text-sm text-blue font-semibold mt-1">{exp.role}</p>
                <p className="text-xs text-muted mt-1">{exp.period}</p>
                {exp.overview && (
                  <p className="text-sm text-text leading-relaxed mt-3 md:ml-14">{exp.overview}</p>
                )}
              </div>
            </div>
          </div>

          {/* プロジェクトセクション */}
          {exp.projects && exp.projects.length > 0 && (
            <div className="border-t border-border bg-[#fafcff]">
              <button
                onClick={() => setExpandedCompany(expandedCompany === index ? null : index)}
                className="w-full flex items-center justify-between gap-2 px-6 md:px-7 py-4 text-left text-xs font-bold text-muted uppercase tracking-wide hover:text-blue hover:bg-blue-pale transition-colors"
                aria-expanded={expandedCompany === index}
              >
                <span>
                  {expandedCompany === index
                    ? lang === "en"
                      ? "Hide Main Projects"
                      : "主なプロジェクトを隠す"
                    : lang === "en"
                      ? "Show Main Projects"
                      : "主なプロジェクトを表示"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedCompany === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedCompany === index && (
                <div className="px-6 md:px-7 pb-5 flex flex-col gap-3">
                  {exp.projects.map((project, projectIndex) => (
                    <ProjectItem key={projectIndex} project={project} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
