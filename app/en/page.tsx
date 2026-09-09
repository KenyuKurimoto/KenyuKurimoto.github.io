import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import { profileEn } from "@/data/profile.en";
import { en } from "@/data/ui";

export const metadata: Metadata = {
  title: "Ken'yu Kurimoto | Robotics Systems Engineer",
  description:
    "Portfolio of Ken'yu Kurimoto. From hardware design and ROS-based software to integration with elevators, automatic doors and city-scale operating systems.",
  alternates: {
    canonical: "/en/",
    languages: { ja: "/ja/", en: "/en/" },
  },
  openGraph: {
    title: "Ken'yu Kurimoto | Robotics Systems Engineer",
    description:
      "Making robots part of the infrastructure. Robotics, ROS, AI and system integration.",
    type: "website",
    locale: "en_US",
    images: ["/assets/albion_image_with_logo.png"],
  },
};

export default function EnPage() {
  return <SitePage profile={profileEn} ui={en} />;
}
