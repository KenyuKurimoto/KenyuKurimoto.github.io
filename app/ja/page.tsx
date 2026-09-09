import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import { profileJa } from "@/data/profile.ja";
import { ja } from "@/data/ui";

export const metadata: Metadata = {
  title: "栗本 健有 | ロボティクス・システムエンジニア",
  description:
    "栗本健有（Ken'yu Kurimoto）のポートフォリオ。ハードウェア設計からROSベースのソフトウェア開発、エレベーター・自動ドア・都市スケールの上位システムとの連携まで、サービスロボットの社会実装に取り組んでいます。",
  alternates: {
    canonical: "/ja/",
    languages: { ja: "/ja/", en: "/en/" },
  },
  openGraph: {
    title: "栗本 健有 | ロボティクス・システムエンジニア",
    description:
      "ロボットを、社会インフラの一部にする。ロボティクス・ROS・AI・システム統合のポートフォリオ。",
    type: "website",
    locale: "ja_JP",
    images: ["/assets/albion_image_with_logo.png"],
  },
};

export default function JaPage() {
  return <SitePage profile={profileJa} ui={ja} />;
}
