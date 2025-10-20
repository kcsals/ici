import type { Locale } from "@/i18n/config";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/i18n";

export const metadata = {
  title: "About",
  description:
    "About Curtis Salisbury and The ICI Group — International Cargo Investigations.",
};

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue py-2">
          {t.nav.about}
        </h1>
        <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-brand-blue to-brand-silver" />
      </header>

      <section className="card p-6">
        <div className="flex items-start gap-4">
          <Image
            src="/images/Profile.png"
            alt="Curtis Salisbury headshot"
            width={128}
            height={128}
            className="rounded-full border border-brand-silver/50 shadow-sm flex-shrink-0"
            priority
          />
          <div className="space-y-3 text-gray-800">
            <p>
              Curtis Salisbury is the Principal of The ICI Group — International
              Cargo Investigations, providing cargo theft and supply chain
              security consulting across the Americas.
            </p>
            <p>
              With over three decades of experience in North and Latin America,
              Curtis has developed a unique insight into leading investigations
              and consulting efforts that protect high-value cargo and ensure
              seamless claim handling. For nearly 15 years, he has developed a
              top-tier team in North and Latin America.
            </p>
            <p>
              Through extensive &quot;boots on the ground&quot; experience with
              law enforcement associates in North and Latin America, Curtis’s
              strategies and efforts have yielded proven results. The mission is
              to empower teams to successfully mitigate cargo theft risks and
              ensure efficient claim investigations.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-brand-blue">
          Focus & Services
        </h2>
        <div className="mt-3 card p-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Risk Assessments and Supply Chain Security",
              "High-Value Cargo Theft Investigations (straight & strategic theft)",
              "Loss Site Mitigation and Subrogation Investigations",
              "CAPS — Critical Action Plan and Strategy",
              "Training and Webinars for insurers, corporates, and transitioning investigators",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  ✓
                </span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-xl font-semibold text-brand-blue">
          Regional Expertise
        </h2>
        <p className="mt-2 text-gray-800">{t.about.regionalIntro}</p>
      </section>

      <section>
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
