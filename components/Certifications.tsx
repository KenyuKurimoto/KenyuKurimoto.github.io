import { Certification } from "@/data/types";

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-md p-5 shadow-sm flex items-start gap-3"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber to-orange-500 text-white flex items-center justify-center text-xl">
            🏆
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-navy leading-snug">{cert.name}</h3>
            <p className="text-xs text-muted mt-1">{cert.issuer}</p>
            <p className="text-xs text-muted mt-0.5">{cert.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
