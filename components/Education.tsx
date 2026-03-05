import { Education as EducationType } from "@/data/types";

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="flex flex-col gap-3">
      {education.map((edu, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-md p-5 md:p-6 shadow-sm flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center text-lg">
            🎓
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-navy">{edu.school}</h3>
            {edu.degree && <p className="text-sm text-muted mt-1">{edu.degree}</p>}
            <p className="text-xs text-muted mt-1">{edu.period}</p>
            {edu.note && <p className="text-sm text-text mt-2 leading-relaxed">{edu.note}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
