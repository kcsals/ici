import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export default function CAPS({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue py-2">
        {t.caps.title}
      </h1>
      <p>{t.caps.intro}</p>
      <ul>
        {t.caps.bullets.map((b: string, i: number) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
