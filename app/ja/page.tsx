import { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import { profileJa } from "@/data/profile.ja";

export const metadata: Metadata = {
  title: "栗本健有 | ソフトウェアエンジニア - ポートフォリオ",
  description:
    "栗本健有 (Ken'yu Kurimoto) のポートフォリオ・職務経歴書。ロボティクス・ROS・AI・システム統合の経験を持つソフトウェアエンジニア。",
  openGraph: {
    title: "栗本健有 | ソフトウェアエンジニア - ポートフォリオ",
    description:
      "ロボティクス・ROS・AI・システム統合の経験を持つソフトウェアエンジニアのポートフォリオ・職務経歴書",
    type: "website",
    locale: "ja_JP",
  },
};

export default function JaPage() {
  return (
    <>
      <Hero
        name={profileJa.name}
        nameEn={profileJa.nameEn}
        title={profileJa.title}
        avatar={profileJa.avatar}
        currentLang="ja"
      />

      <main className="py-14 bg-bg">
        <div className="container-custom">
          <Section id="summary" title="自己紹介" icon="👤" iconColor="blue">
            <Summary paragraphs={profileJa.summary} />
          </Section>

          <Section id="skills" title="スキル" icon="⚡" iconColor="mint">
            <Skills skills={profileJa.skills} />
          </Section>

          <Section id="experience" title="職歴" icon="💼" iconColor="blue">
            <Experience experiences={profileJa.experience} lang="ja" />
          </Section>

          <Section id="education" title="学歴" icon="🎓" iconColor="amber">
            <Education education={profileJa.education} />
          </Section>

          <Section id="certifications" title="所持資格・認定" icon="🏆" iconColor="amber">
            <Certifications certifications={profileJa.certifications} />
          </Section>
        </div>
      </main>

      <footer className="bg-card border-t border-border py-7 text-center text-xs text-muted">
        <div className="container-custom">
          <p>Last updated: {profileJa.lastUpdated}</p>
        </div>
      </footer>
    </>
  );
}
