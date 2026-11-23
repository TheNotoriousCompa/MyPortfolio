'use client';

import { Mail, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { siteConfig } from "@/lib/site-config";

const emailParts = ["compagnone.maurizio290", "@gmail", ".com"];

export const Contact = ({ dict, locale }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */; locale: string }) => {
  const openMailto = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${emailParts.join("")}`;
  };

  const socials = [
    { href: siteConfig.links.github, icon: <Github size={22} />, label: "GitHub" },
    { href: siteConfig.links.linkedin, icon: <Linkedin size={22} />, label: "LinkedIn" },
  ];

  return (
    <section id="contacts" className="py-12 md:py-24 px-4 sm:px-5">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 text-center">
          <span className="text-emerald-400">#</span> {dict.title}
        </h2>
        <p className="text-neutral-400 text-center mb-12">{dict.subtitle}</p>

        <CardSpotlight className="bg-black/40 p-8 md:p-12 rounded-xl border border-white/10">
          <div className="relative z-20 flex flex-col items-center gap-8">
            <a
              href="#"
              onClick={openMailto}
              className="group flex flex-col items-center gap-4 text-center"
              aria-label="Scrivimi via email"
            >
              <span className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <Mail size={28} />
              </span>
              <span className="text-lg md:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors break-all">
                {emailParts[0]}
                <span className="inline-block">{emailParts[1]}</span>
                <span className="inline-block">{emailParts[2]}</span>
              </span>
            </a>

            <a
              href="#"
              onClick={openMailto}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
            >
              {locale === 'it' ? 'Scrivimi' : 'Email me'}
              <ArrowUpRight size={18} />
            </a>

            <div className="w-full pt-8 border-t border-white/5 flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <MapPin size={15} className="text-emerald-400" />
                {siteConfig.location.locality}, {siteConfig.location.region}
              </div>
              <div className="flex justify-center gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 p-3 rounded-xl text-emerald-400 hover:text-white hover:bg-emerald-500/20 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};

export default Contact;
