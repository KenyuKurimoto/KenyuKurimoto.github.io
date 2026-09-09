export interface SectionCopy {
  /** Small caps label, always latin — it doubles as the nav item. */
  eyebrow: string;
  /** The section's real headline, in the locale's own language. */
  title: string;
}

export interface UiStrings {
  lang: "ja" | "en";
  otherLang: "ja" | "en";
  otherLangLabel: string;
  sections: {
    about: SectionCopy;
    focus: SectionCopy;
    expertise: SectionCopy;
    work: SectionCopy;
    journey: SectionCopy;
    credentials: SectionCopy;
    contact: SectionCopy;
  };
  labels: {
    menu: string;
    close: string;
    role: string;
    stack: string;
    references: string;
    watch: string;
    photoPending: string;
    lastUpdated: string;
    contactLede: string;
    contactTitle: string;
    github: string;
    backToTop: string;
  };
}

export const ja: UiStrings = {
  lang: "ja",
  otherLang: "en",
  otherLangLabel: "English",
  sections: {
    about: { eyebrow: "About", title: "つくる側から、広げる側へ" },
    focus: { eyebrow: "Focus", title: "関心を持っていること" },
    expertise: { eyebrow: "Expertise", title: "手を動かしてきた領域" },
    work: { eyebrow: "Selected Work", title: "主なプロジェクト" },
    journey: { eyebrow: "Journey", title: "これまでの歩み" },
    credentials: { eyebrow: "Credentials", title: "資格・認定" },
    contact: { eyebrow: "Contact", title: "お問い合わせ" },
  },
  labels: {
    menu: "メニュー",
    close: "閉じる",
    role: "担当",
    stack: "技術スタック",
    references: "関連リンク",
    watch: "映像を再生",
    photoPending: "写真",
    lastUpdated: "最終更新",
    contactTitle: "お話ししましょう。",
    contactLede:
      "ロボティクス、生成AI、社会インフラとの連携に関するご相談やお問い合わせは、以下よりお気軽にご連絡ください。",
    github: "GitHub",
    backToTop: "ページ上部へ",
  },
};

export const en: UiStrings = {
  lang: "en",
  otherLang: "ja",
  otherLangLabel: "日本語",
  sections: {
    about: { eyebrow: "About", title: "Beyond building" },
    focus: { eyebrow: "Focus", title: "What holds my attention" },
    expertise: { eyebrow: "Expertise", title: "What I work with" },
    work: { eyebrow: "Selected Work", title: "Projects in the field" },
    journey: { eyebrow: "Journey", title: "The road here" },
    credentials: { eyebrow: "Credentials", title: "Qualifications" },
    contact: { eyebrow: "Contact", title: "Get in touch" },
  },
  labels: {
    menu: "Menu",
    close: "Close",
    role: "Role",
    stack: "Stack",
    references: "References",
    watch: "Play video",
    photoPending: "Photo",
    lastUpdated: "Last updated",
    contactTitle: "Let's talk.",
    contactLede:
      "For conversations about robotics, generative AI, or connecting machines to real-world infrastructure, the door is open.",
    github: "GitHub",
    backToTop: "Back to top",
  },
};
