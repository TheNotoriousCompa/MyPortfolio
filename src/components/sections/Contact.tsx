'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
} from 'lucide-react';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { SectionHeading } from '@/components/ui/section-heading';
import { siteConfig } from '@/lib/site-config';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error' | 'mailto' | 'copy-error';

const emptyForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const canSendWithEmailJs = Boolean(
  emailJsConfig.serviceId &&
    emailJsConfig.templateId &&
    emailJsConfig.publicKey
);

export const Contact = ({
  dict,
  locale,
}: {
  dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */;
  locale: string;
}) => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);

  const email = siteConfig.contact.email;
  const mailtoHref = `mailto:${email}`;
  const location = `${siteConfig.location.locality}, ${
    locale === 'it' ? 'Toscana' : 'Tuscany'
  }`;

  const socials = [
    { href: siteConfig.links.github, icon: <Github size={20} />, label: 'GitHub' },
    { href: siteConfig.links.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn' },
  ];

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setStatus('idle');
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setStatus('copy-error');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    if (canSendWithEmailJs) {
      try {
        await emailjs.send(
          emailJsConfig.serviceId as string,
          emailJsConfig.templateId as string,
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            to_email: email,
          },
          { publicKey: emailJsConfig.publicKey as string }
        );
        setStatus('success');
        setForm(emptyForm);
      } catch {
        setStatus('error');
      }
      return;
    }

    const subject = form.subject || (locale === 'it' ? 'Contatto dal portfolio' : 'Portfolio contact');
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `${mailtoHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  };

  const statusMessage =
    status === 'sending'
      ? dict.status.sending
      : status === 'success'
        ? dict.status.success
        : status === 'error'
          ? dict.status.error
          : status === 'copy-error'
            ? dict.copyError
            : status === 'mailto'
              ? dict.status.mailto
              : '';

  return (
    <section id="contacts" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHeading title={dict.title} className="mb-4" />
            <p className="max-w-md text-pretty text-base leading-relaxed text-neutral-400">
              {dict.subtitle}
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={mailtoHref}
                className="flex min-h-11 items-center gap-3 rounded-md border border-white/10 px-4 py-3 text-sm text-neutral-200 transition-colors hover:border-emerald-400/40 hover:text-white"
                aria-label={locale === 'it' ? 'Scrivimi via email' : 'Email me'}
              >
                <Mail size={18} className="shrink-0 text-emerald-400" aria-hidden="true" />
                <span className="break-all">{email}</span>
                <ArrowUpRight size={16} className="ml-auto shrink-0 text-neutral-500" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="flex min-h-11 w-full items-center gap-3 rounded-md border border-white/10 px-4 py-3 text-left text-sm text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
              >
                {copied ? (
                  <Check size={18} className="shrink-0 text-emerald-400" aria-hidden="true" />
                ) : (
                  <Copy size={18} className="shrink-0 text-neutral-500" aria-hidden="true" />
                )}
                <span aria-live="polite">{copied ? dict.copied : dict.copyEmail}</span>
              </button>

              <p className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-400">
                <MapPin size={16} className="shrink-0 text-emerald-400" aria-hidden="true" />
                {location}
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/10 text-neutral-400 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <CardSpotlight className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white">{dict.formTitle}</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-neutral-300">
                  {dict.labels.name}
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder={dict.placeholders.name}
                    className="min-h-11 rounded-md border border-white/10 bg-[#08090a] px-3 text-sm text-white placeholder:text-neutral-400 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-neutral-300">
                  {dict.labels.email}
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder={dict.placeholders.email}
                    className="min-h-11 rounded-md border border-white/10 bg-[#08090a] px-3 text-sm text-white placeholder:text-neutral-400 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm text-neutral-300">
                {dict.labels.subject}
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={(event) => updateField('subject', event.target.value)}
                  placeholder={dict.placeholders.subject}
                  className="min-h-11 rounded-md border border-white/10 bg-[#08090a] px-3 text-sm text-white placeholder:text-neutral-400 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-neutral-300">
                {dict.labels.message}
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  placeholder={dict.placeholders.message}
                  className="min-h-32 resize-y rounded-md border border-white/10 bg-[#08090a] px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                />
              </label>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-emerald-400 px-5 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                ) : (
                  <Mail size={16} aria-hidden="true" />
                )}
                {dict.labels.send}
              </button>

              <p
                aria-live="polite"
                className={`min-h-5 text-sm ${
                  status === 'error' || status === 'copy-error'
                    ? 'text-red-300'
                    : status === 'success' || status === 'mailto'
                      ? 'text-emerald-300'
                      : 'text-neutral-500'
                }`}
              >
                {statusMessage}
              </p>

              {!canSendWithEmailJs && (
                <p className="text-xs leading-relaxed text-neutral-400">
                  {dict.mailtoNote}
                </p>
              )}
            </form>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
