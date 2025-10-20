"use client";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default function Contact({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale: params.locale }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  // Removed mailto link per request

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue py-2">
          {t.contact.title}
        </h1>
        <p className="text-gray-700 mt-2 max-w-3xl">{t.contact.intro}</p>
        <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-brand-blue to-brand-silver" />
      </header>

      <div className="grid gap-8 md:grid-cols-5">
        {/* Left: Form */}
        <section className="md:col-span-3">
          <div className="card p-6">
            <form
              onSubmit={onSubmit}
              className="space-y-4"
              aria-label="Contact form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    {t.contact.name}
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-md border border-brand-silver/40 p-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    {t.contact.company}
                  </label>
                  <input
                    name="company"
                    className="mt-1 w-full rounded-md border border-brand-silver/40 p-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/60"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    {t.contact.email}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-md border border-brand-silver/40 p-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    {t.contact.phone}
                  </label>
                  <input
                    name="phone"
                    className="mt-1 w-full rounded-md border border-brand-silver/40 p-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/60"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800">
                  {t.contact.language}
                </label>
                <select
                  name="preferredLanguage"
                  defaultValue={params.locale}
                  className="mt-1 w-full rounded-md border border-brand-silver/40 p-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/60"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="pt">Português</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800">
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-1 w-full rounded-md border border-brand-silver/40 p-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/60"
                />
              </div>
              <div className="flex items-center gap-4">
                <button type="submit" className="btn-primary">
                  {t.contact.submit}
                </button>
              </div>
              {status === "success" && (
                <p className="text-green-600">{t.contact.success}</p>
              )}
              {status === "error" && (
                <p className="text-red-600">{t.contact.error}</p>
              )}
            </form>
          </div>
        </section>

        {/* Right: Info cards */}
        <aside className="md:col-span-2 space-y-6">
          <div className="rounded-lg border border-brand-silver/40 p-5 bg-gradient-to-br from-brand-blue/5 to-brand-silver/10">
            <h3 className="text-lg font-semibold text-brand-blue">
              {t.nav.caps}
            </h3>
            <p className="text-gray-700 mt-1">{t.caps.intro}</p>
            <a
              href={`/${params.locale}/caps`}
              className="mt-3 inline-block btn-secondary"
            >
              {t.nav.caps}
            </a>
          </div>
          <div className="card p-5">
            <h3 className="text-lg font-semibold text-brand-blue">Languages</h3>
            <p className="text-gray-700 mt-1">{t.global.languagesNote}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-brand-silver/40 px-3 py-1 text-sm bg-white">
                EN
              </span>
              <span className="rounded-full border border-brand-silver/40 px-3 py-1 text-sm bg-white">
                ES
              </span>
              <span className="rounded-full border border-brand-silver/40 px-3 py-1 text-sm bg-white">
                PT
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
