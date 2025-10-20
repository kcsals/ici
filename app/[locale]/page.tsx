import Link from "next/link";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import BootsSection from "@/components/BootsSection";
import WelcomeSection from "@/components/WelcomeSection";
import fs from "node:fs";
import path from "node:path";

export default function Home({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  // Discover images placed under public/images/strip at build time
  const stripDir = path.join(process.cwd(), "public", "images", "strip");
  let stripImages: string[] = [];
  try {
    stripImages = fs
      .readdirSync(stripDir)
      .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
      .sort();
  } catch {
    // Folder may not exist; ignore
  }
  return (
    <div className="space-y-12">
      <section className="py-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-brand-blue py-6">
          {t.hero.title}
        </h1>
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-brand-blue to-brand-silver" />
        <div className="mt-4 flex items-center gap-4">
          <Image
            src="/images/Profile.png"
            alt="Curtis Salisbury headshot"
            width={212}
            height={212}
            className="rounded-full border border-brand-silver/50 shadow-sm flex-shrink-0"
            priority
          />
          <div className="flex-1">
            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
        {stripImages.length > 0 && (
          <section
            aria-label="Photo carousel"
            className="mt-4 relative left-1/2 right-1/2 -translate-x-1/2 w-screen"
          >
            <Carousel
              images={stripImages}
              basePath="/images/strip"
              alt="Operational field photo"
              className="rounded-none border-0 bg-transparent"
            />
          </section>
        )}
      </section>

      <BootsSection
        title={t.home.bootsSection.title}
        intro={t.home.bootsSection.intro}
        bullets={t.home.bootsSection.bullets}
        imageSrc="/images/heatMap.png"
      />

      <WelcomeSection
        title={t.home.welcome.title}
        p1={t.home.welcome.p1}
        p2={t.home.welcome.p2}
        capabilitiesTitle={t.home.welcome.capabilitiesTitle}
        capabilities={t.home.welcome.capabilities}
        standardsTitle={t.home.welcome.standardsTitle}
        standards={t.home.welcome.standards}
      />
      <section className="mt-4">
        <div className="rounded-lg border border-brand-silver/40 p-6 bg-gradient-to-r from-brand-blue/5 to-brand-silver/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-brand-blue">
              {t.home.ctaBanner.title}
            </h3>
            <p className="text-gray-700">{t.home.ctaBanner.body}</p>
          </div>
          <Link href={`/${params.locale}/contact`} className="btn-primary">
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}
