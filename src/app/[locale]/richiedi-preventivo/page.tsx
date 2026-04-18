import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/get-dictionaries";
import { Header } from "@/components/Header";

export default async function RichiediPreventivoPage(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const dict = await getDictionary(locale);
  const q = dict.localWeb.quote;

  const sections = [
    { id: "hero", label: dict.common.sections.home },
    {
      id: "local-web",
      label: dict.common.sections.localWeb,
      href: `/${locale}/sviluppo-web`,
    },
    { id: "projects", label: dict.common.sections.projects },
    { id: "education", label: dict.common.sections.education },
    { id: "about", label: dict.common.sections.about },
    { id: "experience", label: dict.common.sections.experience },
    { id: "contacts", label: dict.common.sections.contacts },
  ];


  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <Header sections={sections} locale={locale} anchorBase={`/${locale}`} />

      <main className="relative z-10 flex-1 px-4 pb-24 pt-28 md:pt-32">
        {/* Background Grid Pattern to match Valdelsa page */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        <div className="mx-auto max-w-4xl relative z-10">
          <Link
            href={`/${locale}/sviluppo-web`}
            className="mb-10 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-sm text-emerald-400 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:text-emerald-300"
          >
            <ArrowLeft className="h-4 w-4" />
            {dict.localWeb.back}
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {q.title}
            </h1>
            <p className="text-xl text-neutral-400">
              {q.subtitle}
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md p-8 md:p-12">



            {/* Simple glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -mr-32 -mt-32" />

            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-300 ml-1">
                    {q.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none transition-all hover:border-emerald-500/30 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50"

                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-300 ml-1">
                    {q.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none transition-all hover:border-emerald-500/30 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50"

                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-neutral-300 ml-1">
                    {q.form.projectType}
                  </label>
                  <select
                    id="type"
                    className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none transition-all hover:border-emerald-500/30 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 appearance-none appearance-none-custom"

                  >
                    <option value="landing">{q.form.projectTypes.landing}</option>
                    <option value="showcase">{q.form.projectTypes.showcase}</option>
                    <option value="ecommerce">{q.form.projectTypes.ecommerce}</option>
                    <option value="custom">{q.form.projectTypes.custom}</option>
                    <option value="full-custom">{q.form.projectTypes.fullCustom}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-neutral-300 ml-1">
                    {q.form.budget}
                  </label>
                  <select
                    id="budget"
                    className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none transition-all focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 appearance-none appearance-none-custom"
                  >
                    <option value="low">&lt; 500€</option>
                    <option value="mid">500€ - 1.500€</option>
                    <option value="high">&gt; 1.500€</option>
                    <option value="custom">Su misura</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-neutral-300 ml-1">
                  {q.form.description}
                </label>
                <textarea
                  id="description"
                  rows={6}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none transition-all hover:border-emerald-500/30 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 resize-none"

                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 py-5 text-lg font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-600 hover:scale-[1.01] active:scale-[0.99]"
              >
                {q.form.submit}
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

          <div className="mt-12 text-center text-sm text-neutral-500">
            <p>Riceverai una risposta dettagliata entro 24/48 ore lavorative.</p>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .appearance-none-custom {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.5em;
        }
      `}} />
    </div>
  );
}
