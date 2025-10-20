import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export default function Training({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue py-2">
        {t.training.title}
      </h1>
      <p>{t.training.intro}</p>
      <ul>
        {t.training.bullets.map((b: string, i: number) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
