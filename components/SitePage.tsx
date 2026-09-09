import type { ProfileData } from "@/data/types";
import type { UiStrings } from "@/data/ui";
import About from "./About";
// import Contact from "./Contact";  // re-enable with the section below
import Credentials from "./Credentials";
import Expertise from "./Expertise";
import Focus from "./Focus";
import Footer from "./Footer";
import Hero from "./Hero";
import Journey from "./Journey";
import Nav from "./Nav";
import Section from "./Section";
import Work from "./Work";

export default function SitePage({ profile, ui }: { profile: ProfileData; ui: UiStrings }) {
  const { sections } = ui;

  return (
    <div id="top" lang={ui.lang}>
      <Nav nameEn={ui.lang === "ja" ? profile.nameEn : profile.name} ui={ui} />

      <main>
        <Hero hero={profile.hero} metrics={profile.metrics} />

        <Section
          id="about"
          index="01"
          eyebrow={sections.about.eyebrow}
          title={sections.about.title}
        >
          <About
            paragraphs={profile.about}
            avatar={profile.avatar}
            name={profile.name}
            title={profile.title}
          />
        </Section>

        <Section
          id="focus"
          index="02"
          eyebrow={sections.focus.eyebrow}
          title={sections.focus.title}
        >
          <Focus areas={profile.focus} />
        </Section>

        <Section
          id="expertise"
          index="03"
          eyebrow={sections.expertise.eyebrow}
          title={sections.expertise.title}
        >
          <Expertise skills={profile.skills} />
        </Section>

        <Section id="work" index="04" eyebrow={sections.work.eyebrow} title={sections.work.title}>
          <Work experiences={profile.experience} ui={ui} />
        </Section>

        <Section
          id="journey"
          index="05"
          eyebrow={sections.journey.eyebrow}
          title={sections.journey.title}
        >
          <Journey education={profile.education} ui={ui} />
        </Section>

        <Section
          id="credentials"
          index="06"
          eyebrow={sections.credentials.eyebrow}
          title={sections.credentials.title}
        >
          <Credentials certifications={profile.certifications} />
        </Section>

        {/*
          Contact is held back until the LinkedIn URL is ready. To restore it:
          uncomment the import above, this element, and the "contact" entry in
          SECTION_IDS in Nav.tsx, then fill in `contact` in data/profile.*.ts.
        */}
        {/* <Contact contact={profile.contact} ui={ui} /> */}
      </main>

      <Footer nameEn="Ken'yu Kurimoto" lastUpdated={profile.lastUpdated} ui={ui} />
    </div>
  );
}
