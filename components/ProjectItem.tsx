"use client";

import { useState } from "react";
import { Project } from "@/data/types";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const [expanded, setExpanded] = useState(false);

  const allMedia = [
    ...(project.images || []),
    ...(project.videos || []),
    ...(project.youtube ? [{ url: project.youtube, caption: "" }] : []),
  ];

  return (
    <div className="border border-border rounded-sm bg-card overflow-hidden hover:shadow-sm transition-shadow">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 p-4 md:p-5 text-left hover:bg-blue-pale transition-colors"
        aria-expanded={expanded}
      >
        <div
          className={`w-7 h-7 rounded-md flex items-center justify-center text-xs flex-shrink-0 transition-colors ${
            expanded ? "bg-blue text-white" : "bg-blue-pale text-blue"
          }`}
        >
          📁
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-navy leading-snug">{project.name}</h4>
          <p className="text-xs text-muted mt-0.5">{project.period}</p>
        </div>
        <svg
          className={`w-4 h-4 text-muted transition-transform flex-shrink-0 ${
            expanded ? "rotate-180 text-blue" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="border-t border-border bg-[#fcfdff] p-4 md:p-5">
          <div className="inline-block bg-mint-pale text-mint border border-mint-300 rounded-full px-3 py-1 text-xs font-bold mb-3">
            {project.role}
          </div>

          <p className="text-sm text-text leading-relaxed mb-4">{project.description}</p>

          {/* 技術タグ */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-700 border border-green-200 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* メディアギャラリー */}
          {allMedia.length > 0 && (
            <div
              className={`grid gap-2.5 mb-4 ${
                allMedia.length === 1
                  ? "grid-cols-1"
                  : allMedia.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {allMedia.map((media, index) => {
                const isVideo = media.url.endsWith(".mp4") || media.url.endsWith(".webm");
                const isYoutube = media.url.includes("youtube.com");

                return (
                  <div
                    key={index}
                    className={`relative aspect-video border border-border rounded-sm overflow-hidden bg-black ${
                      allMedia.length === 3 && index === 2 ? "sm:col-span-2" : ""
                    }`}
                  >
                    {isYoutube ? (
                      <iframe
                        src={media.url.replace("watch?v=", "embed/")}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                      />
                    ) : isVideo ? (
                      <video
                        src={media.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    ) : (
                      <img
                        src={media.url}
                        alt={media.caption || ""}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    )}
                    {media.caption && (
                      <div className="absolute bottom-0 left-0 right-0 text-xs text-white text-center py-1 px-2 bg-gradient-to-t from-black/60 to-transparent">
                        {media.caption}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* リンク */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-col gap-2.5">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 p-2.5 border border-border rounded-sm bg-card hover:shadow-md transition-all text-sm max-w-lg"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-navy text-xs line-clamp-2">{link.label}</div>
                    <div className="text-blue text-xs font-semibold mt-0.5 truncate">
                      {new URL(link.url).hostname}
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 text-muted flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
