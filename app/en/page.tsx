import { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import { profileEn } from "@/data/profile.en";

export const metadata: Metadata = {
  title: "Ken'yu Kurimoto | Software Engineer - Portfolio",
  description:
    "Portfolio and resume of Ken'yu Kurimoto, a software engineer specializing in robotics, ROS, AI, and system integration.",
  openGraph: {
    title: "Ken'yu Kurimoto | Software Engineer - Portfolio",
    description:
      "Portfolio and resume of a software engineer specializing in robotics, ROS, AI, and system integration.",
    type: "website",
    locale: "en_US",
  },
};

export default function EnPage() {
  return (
    <>
      <Hero
        name={profileEn.name}
        nameEn={profileEn.nameEn}
        title={profileEn.title}
        avatar={profileEn.avatar}
        currentLang="en"
      />

      <main className="py-14 bg-bg">
        <div className="container-custom">
          <Section id="summary" title="Summary" icon="👤" iconColor="blue">
            <Summary paragraphs={profileEn.summary} />
          </Section>

          <Section id="skills" title="Skills" icon="⚡" iconColor="mint">
            <Skills skills={profileEn.skills} />
          </Section>

          <Section id="experience" title="Experience" icon="💼" iconColor="blue">
            <Experience experiences={profileEn.experience} lang="en" />
          </Section>

          <Section id="education" title="Education" icon="🎓" iconColor="amber">
            <Education education={profileEn.education} />
          </Section>

          <Section id="certifications" title="Certifications" icon="🏆" iconColor="amber">
            <Certifications certifications={profileEn.certifications} />
          </Section>
        </div>
      </main>

      <footer className="bg-card border-t border-border py-7 text-center text-xs text-muted">
        <div className="container-custom">
          <p>Last updated: {profileEn.lastUpdated}</p>
        </div>
      </footer>
    </>
  );
}
