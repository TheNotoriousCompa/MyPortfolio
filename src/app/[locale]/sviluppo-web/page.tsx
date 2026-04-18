import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, type Locale } from "@/lib/get-dictionaries";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const lw = dict.localWeb;

  const title =
    lw?.metaTitle ?? "Web Developer Valdelsa | Maurizio Compagnone";
  const description =
    lw?.metaDescription ??
    "Sviluppo web in Valdelsa: Castelfiorentino, Gambassi Terme e dintorni.";

  return {
    title,
    description,
    keywords: [
      "Sviluppatore Web Castelfiorentino",
      "Sviluppatore Web Gambassi Terme",
      "Siti web Valdelsa",
      "Web development Valdelsa",
      "Maurizio Compagnone",
    ],
    alternates: {
      canonical: `https://mcompagnone.netlify.app/${locale}/sviluppo-web`,
      languages: {
        it: "https://mcompagnone.netlify.app/it/sviluppo-web",
        en: "https://mcompagnone.netlify.app/en/sviluppo-web",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "it" ? "it_IT" : "en_US",
      url: `https://mcompagnone.netlify.app/${locale}/sviluppo-web`,
    },
  };
}

export default async function SviluppoWebPage(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const dict = await getDictionary(locale);
  const lw = dict.localWeb;

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

  const services = lw?.services ?? [];

  return (
    <div className="flex min-h-screen flex-col">
      <Header sections={sections} locale={locale} anchorBase={`/${locale}`} />
      <main className="relative z-10 flex-1 px-4 pb-16 pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/${locale}`}
            className="mb-10 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-sm text-emerald-400 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:text-emerald-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {lw?.back ?? "Home"}
          </Link>

          <header className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              {lw?.h1 ?? "Sviluppo web in Valdelsa"}
            </h1>
            <p className="text-xl leading-relaxed text-neutral-400">
              {lw?.intro}
            </p>
          </header>

          <div className="relative mt-8 min-h-[500px] w-full rounded-3xl border border-white/5 bg-black/60 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* Column 1: Services */}
              <div className="p-8 md:p-10 flex flex-col group transition-all duration-500 border-b md:border-b-0 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-10">
                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <ArrowUpRight className="text-neutral-600 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">
                  {lw?.servicesTitle}
                </h2>

                <ul className="space-y-4">
                  {services.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-400 group-hover:text-neutral-200 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <p className="text-sm font-mono text-emerald-500/50 uppercase tracking-widest">01 / Solutions</p>
                </div>
              </div>

              {/* Column 2: Local Focus */}
              <div className="p-8 md:p-10 flex flex-col group transition-all duration-500 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-10">
                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="m2 2 20 20"></path><path d="M7 8V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"></path><path d="M3 21h7"></path><path d="M3 10h1"></path><path d="M15 21h1"></path><path d="M21 3h1"></path><path d="M3 7h1"></path><path d="M7 21h1"></path></svg>
                  </div>
                  <ArrowUpRight className="text-neutral-600 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">
                  {lw?.localTitle}
                </h2>

                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {lw?.localBody}
                </p>

                <div className="mt-auto pt-10">
                  <p className="text-sm font-mono text-emerald-500/50 uppercase tracking-widest">02 / Territory</p>
                </div>
              </div>

              {/* Column 3: Collaborations */}
              <div className="p-8 md:p-10 flex flex-col group transition-all duration-500 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-10">
                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <ArrowUpRight className="text-neutral-600 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">
                  {lw?.projectsLocalTitle}
                </h2>

                <div className="space-y-3">
                  {[
                    { name: "Frentauto Group", url: "https://www.gruppofrentauto.com/" },
                    { name: "AutoWWW", url: "https://www.autowww.it/" },
                    { name: "Centro Helios", url: "https://www.centrohelios.com/" },
                    { name: "Borsoi", url: "https://www.borsoi.net/" }
                  ].map((proj) => (
                    <a
                      key={proj.name}
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all group/item"
                    >
                      <span className="text-neutral-300 group-hover/item:text-white transition-colors">{proj.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover/item:text-emerald-400 transition-all opacity-0 group-hover/item:opacity-100" />
                    </a>
                  ))}
                  
                  <Link
                    href={`/${locale}#projects`}
                    className="flex items-center justify-center gap-2 mt-4 p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-mono text-sm hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all group/projects"
                  >
                    <span>{locale === 'it' ? 'Vedi tutti i miei progetti' : 'See all my projects'}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/projects:translate-x-0.5 group-hover/projects:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <p className="text-xs text-neutral-500 italic leading-snug">
                    Collaborazioni consolidate con realtà leader nel proprio settore.
                  </p>
                </div>

                <div className="mt-auto pt-10">
                  <p className="text-sm font-mono text-emerald-500/50 uppercase tracking-widest">03 / Partners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <section className="mt-24" id="pricing">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {lw?.pricing?.title}
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                {lw?.pricing?.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  plan: lw?.pricing?.plans?.essential, 
                  highlight: false,
                  id: "essential"
                },
                { 
                   plan: lw?.pricing?.plans?.professional, 
                   highlight: true,
                   id: "professional"
                },
                { 
                   plan: lw?.pricing?.plans?.custom, 
                   highlight: false,
                   id: "custom"
                }
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ].map((item: any, idx) => (
                <div 
                  key={idx}
                  className="relative flex flex-col p-8 rounded-3xl border border-white/5 bg-black/40 transition-all duration-500 hover:border-emerald-500/20"
                >
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{item.plan?.name}</h3>
                    <p className="text-sm text-neutral-400 mb-6 font-medium">{item.plan?.target}</p>
                    
                    {!item.plan?.ctaOnly && (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white tracking-tight">
                          €{item.plan?.price}
                        </span>
                      </div>
                    )}
                  </div>

                  {item.plan?.ctaOnly ? (
                    <div className="flex flex-col h-full">
                      <div className="mt-auto">
                        <Link
                          href={`/${locale}/richiedi-preventivo`}
                          className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500/10 px-6 py-4 text-center font-bold text-emerald-400 border border-emerald-500/20 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/40"
                        >
                          {locale === 'it' ? 'Richiedi Informazioni' : 'Request Info'}
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-4 flex-grow">
                      {item.plan?.features?.map((feature: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-neutral-300">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href={`/${locale}/richiedi-preventivo`}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-10 py-5 text-center text-lg font-bold text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
              >
                {dict.localWeb.quote.title}
              </Link>
            </div>

            {/* Maintenance & Evolution Note */}
            {lw?.pricing?.maintenance && (
              <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <h4 className="text-white font-bold mb-2">{lw.pricing.maintenance.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {lw.pricing.maintenance.label}
                </p>
              </div>
            )}
          </section>

          <section
            className="mt-24 rounded-3xl border border-emerald-500/20 bg-black/60 p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl"
            aria-labelledby="cta-heading"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32" />

            <div className="relative z-10 max-w-2xl">
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {lw?.ctaTitle}
              </h2>
              <p className="text-lg text-neutral-400 mb-8">{lw?.ctaBody}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={`/${locale}#contacts`}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-center font-mono text-base font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {lw?.ctaPrimary}
                </Link>
                <Link
                  href={`/${locale}#projects`}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center font-mono text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  {lw?.ctaSecondary}
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-neutral-500">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
