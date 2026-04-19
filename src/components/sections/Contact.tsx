'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Facebook, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { siteConfig } from "@/lib/site-config";
import emailjs from '@emailjs/browser';
import { cn } from '@/lib/utils';

export const Contact = ({ dict }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.subject,
        message: formData.message,
        to_email: 'compagnone.maurizio290@gmail.com',
      };

      await emailjs.send(
        'service_iaoxq8v',
        'template_dmth4s8',
        templateParams,
        'cuCgMHQQHi0sD17QU'
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const cardClassName = "bg-black/40 p-6 md:p-8 rounded-xl border border-white/10 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] transform-gpu will-change-transform h-full";
  const inputClassName = "w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none transition-all hover:border-emerald-500/40 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:shadow-[0_0_25px_rgba(16,185,129,0.1)] placeholder:text-neutral-500 backdrop-blur-sm";

  return (
    <section id="contacts" className="py-12 md:py-24 px-4 sm:px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="text-emerald-400">#</span> {dict.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <CardSpotlight className={cardClassName}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 relative z-20">{dict.infoTitle}</h3>

            <div className="space-y-6 relative z-20">
              <div className="flex items-start">
                <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-neutral-400 text-sm font-medium mb-1 uppercase tracking-wider">Email</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-white hover:text-emerald-400 transition-colors text-lg"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-neutral-400 text-sm font-medium mb-1 uppercase tracking-wider">Telefono</h4>
                  <a
                    href={`tel:${siteConfig.contact.phoneE164}`}
                    className="text-white hover:text-emerald-400 transition-colors text-lg"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-neutral-400 text-sm font-medium mb-1 uppercase tracking-wider">Posizione</h4>
                  <p className="text-white text-lg">{siteConfig.location.locality}, {siteConfig.location.region}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 relative z-20">
              <h4 className="text-neutral-400 text-sm font-medium mb-6 uppercase tracking-wider text-center">{dict.social}</h4>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { href: siteConfig.links.github, icon: <Github size={24} />, label: "GitHub" },
                  { href: siteConfig.links.linkedin, icon: <Linkedin size={24} />, label: "LinkedIn" },
                  { href: siteConfig.links.instagram, icon: <Instagram size={24} />, label: "Instagram" },
                  { href: siteConfig.links.facebook, icon: <Facebook size={24} />, label: "Facebook" },
                  { href: siteConfig.links.messenger, icon: <MessageSquare size={24} />, label: "Messenger" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 p-3 rounded-xl text-emerald-400 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </CardSpotlight>

          {/* Contact Form */}
          <CardSpotlight className={cardClassName}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-left relative z-20">{dict.formTitle}</h3>
            <form className="space-y-5 relative z-20" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="contact-name" className="block text-left text-sm font-medium text-neutral-400 ml-1">{dict.labels.name}</label>
                <input
                  type="text"
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={inputClassName}
                  placeholder={dict.placeholders.name}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-left text-sm font-medium text-neutral-400 ml-1">{dict.labels.email}</label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={inputClassName}
                    placeholder={dict.placeholders.email}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="block text-left text-sm font-medium text-neutral-400 ml-1">{dict.labels.phone}</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={inputClassName}
                    placeholder={dict.placeholders.phone}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-subject" className="block text-left text-sm font-medium text-neutral-400 ml-1">{dict.labels.subject}</label>
                <input
                  type="text"
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className={inputClassName}
                  placeholder={dict.placeholders.subject}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="block text-left text-sm font-medium text-neutral-400 ml-1">{dict.labels.message}</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={inputClassName + " resize-none"}
                  placeholder={dict.placeholders.message}
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={cn(
                    "w-full px-6 py-4 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2",
                    status === 'success' ? "bg-emerald-600 cursor-default" : "bg-emerald-500 hover:bg-emerald-600 hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.3)]",
                    status === 'loading' ? "opacity-70" : ""
                  )}
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  )}
                  <span>
                    {status === 'loading' ? (dict.locale === 'it' ? 'Invio...' : 'Sending...') : 
                     status === 'success' ? (dict.locale === 'it' ? 'Inviato' : 'Sent') : 
                     dict.labels.send}
                  </span>
                </button>

                {status === 'error' && (
                  <p className="mt-2 text-center text-red-400 text-sm flex items-center justify-center gap-2">
                    <AlertCircle size={14} />
                    {dict.locale === 'it' ? 'Errore nell\'invio. Riprova.' : 'Error sending message. Try again.'}
                  </p>
                )}
              </div>
            </form>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
