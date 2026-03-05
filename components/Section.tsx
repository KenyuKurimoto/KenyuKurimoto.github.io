import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  icon: string;
  iconColor: "blue" | "mint" | "amber";
  children: ReactNode;
}

const iconColorClasses = {
  blue: "bg-blue-pale text-blue",
  mint: "bg-mint-pale text-mint",
  amber: "bg-amber-pale text-amber",
};

export default function Section({ id, title, icon, iconColor, children }: SectionProps) {
  return (
    <section className="mb-16" id={id}>
      <div className="flex items-center gap-3 mb-7">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${iconColorClasses[iconColor]}`}
        >
          {icon}
        </div>
        <h2 className="text-xl font-extrabold text-navy tracking-tight">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>
      {children}
    </section>
  );
}
