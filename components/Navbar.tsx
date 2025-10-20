"use client";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar({ t, locale }: { t: any; locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav
        aria-label="Main"
        className="container-max flex items-center justify-between py-4"
      >
        <Link
          href={`/${locale}`}
          className="flex items-center gap-4"
          aria-label="The ICI Group home"
        >
          <Image
            src="/images/logo.svg"
            alt="The ICI Group logo"
            width={120}
            height={120}
            priority
          />
          <span className="sr-only">International Cargo Investigations</span>
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <Link href={`/${locale}/about`} className="hover:text-brand-blue">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/services`}
                className="hover:text-brand-blue"
              >
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/caps`} className="hover:text-brand-blue">
                {t.nav.caps}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/training`}
                className="hover:text-brand-blue"
              >
                {t.nav.training}
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <Link href={`/${locale}/contact`} className="btn-primary text-sm">
              {t.nav.contact}
            </Link>
            <LanguageSwitcher locale={locale} label={t.nav.languages} />
          </div>
        </div>
      </nav>
    </header>
  );
}
