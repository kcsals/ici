import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export default function Services({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue py-2">
        {t.services.title}
      </h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((s: any) => (
          <div key={s.key} className="card p-4">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
