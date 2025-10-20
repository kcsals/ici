import HeatMapPlaceholder from "@/components/HeatMapPlaceholder";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export default function GlobalReach({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getDictionary(params.locale);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-brand-blue">{t.global.title}</h1>
      <p className="text-gray-700 max-w-3xl">{t.global.intro}</p>
      <div className="card p-2">
        <HeatMapPlaceholder />
      </div>
      <p className="text-sm text-gray-500">{t.global.mapCaption}</p>
      <p className="text-gray-700">{t.global.languagesNote}</p>
    </div>
  );
}
