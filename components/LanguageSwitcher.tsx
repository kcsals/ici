"use client";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

function switchLocalePath(pathname: string, target: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && ["en", "es", "pt"].includes(parts[0])) {
    parts[0] = target;
  } else {
    parts.unshift(target);
  }
  return "/" + parts.join("/");
}

export default function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  return (
    <div className="relative">
      <label className="sr-only">{label}</label>
      <select
        aria-label={label}
        className="border rounded-md p-2 text-sm"
        defaultValue={locale}
        onChange={(e) => {
          const target = e.target.value as Locale;
          const url = switchLocalePath(pathname ?? "/", target);
          window.location.assign(url);
        }}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="pt">PT</option>
      </select>
    </div>
  );
}
