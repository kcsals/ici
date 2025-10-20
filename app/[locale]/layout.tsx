import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n";
import { i18n } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const t = getDictionary(params.locale);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar t={t} locale={params.locale} />
      <main className="flex-1 container-max py-10">{children}</main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}
