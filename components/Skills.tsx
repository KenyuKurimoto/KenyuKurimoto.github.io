import { SkillCategory } from "@/data/types";

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skillCategory, index) => (
        <div key={index} className="bg-card border border-border rounded-md p-5 shadow-sm">
          <h3 className="text-xs font-bold text-blue tracking-wider uppercase mb-3">
            {skillCategory.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillCategory.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-blue-pale text-blue border border-blue-200 rounded-full px-3 py-1 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
