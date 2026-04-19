import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/get-dictionaries";
import { Header } from "@/components/Header";
import { QuoteForm } from "@/components/ui/QuoteForm";
import Footer from "@/components/Footer";

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
            className="mb-10 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-sm text-emerald-400 backdrop-blur-md transition-colors hover:border-emerald-500/40 hover:text-emerald-300"
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
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -mr-32 -mt-32" />
            
            <QuoteForm dict={dict} locale={locale} />
          </div>

          <div className="mt-12 text-center text-sm text-neutral-500">
            <p>{locale === 'it' ? 'Riceverai una risposta dettagliata entro 24/48 ore lavorative.' : 'You will receive a detailed response within 24/48 working hours.'}</p>
          </div>
        </div>
      </main>
      <Footer locale={locale} showContact={false} />
    </div>
  );
}
