import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  name: string;
  nameEn: string;
  title: string;
  avatar?: string;
  currentLang: "ja" | "en";
}

export default function Hero({ name, nameEn, title, avatar, currentLang }: HeroProps) {
  const toggleLang = currentLang === "ja" ? "en" : "ja";
  const toggleLabel = currentLang === "ja" ? "EN" : "日本語";

  return (
    <header className="relative bg-gradient-to-br from-blue via-[#1d4ed8] to-[#0891b2] text-white py-16 md:py-20 overflow-hidden">
      {/* 装飾的な背景円 */}
      <div className="absolute top-[-60px] right-[-80px] w-80 h-80 bg-white/5 rounded-full" />
      <div className="absolute bottom-[-80px] left-[-50px] w-64 h-64 bg-white/5 rounded-full" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* アバター */}
          <div className="flex-shrink-0 w-24 h-24 rounded-full bg-white/20 border-3 border-white/50 overflow-hidden flex items-center justify-center text-5xl backdrop-blur-sm">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              "👤"
            )}
          </div>

          {/* テキスト情報 */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{name}</h1>
            <p className="text-base opacity-75 mt-1 tracking-wide">{nameEn}</p>
            <div className="inline-block mt-3 bg-white/15 border border-white/30 rounded-full px-4 py-1 text-sm font-medium tracking-wide backdrop-blur-sm">
              {title}
            </div>
          </div>
        </div>

        {/* 言語切り替えボタン */}
        <div className="flex justify-center md:justify-end mt-4">
          <Link
            href={`/${toggleLang}`}
            className="bg-transparent border-2 border-white/60 rounded-full px-4 py-1 text-xs font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity"
          >
            {toggleLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
