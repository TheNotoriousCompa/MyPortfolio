'use client';

import React, { useState } from 'react';
import { ChevronDown, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';

interface QuoteFormProps {
  dict: any;
  locale: string;
}

export function QuoteForm({ dict, locale }: QuoteFormProps) {
  const q = dict.localWeb.quote;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'landing',
    budget: 'essential',
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const projectTypes = [
    { value: 'landing', label: q.form.projectTypes.landing },
    { value: 'showcase', label: q.form.projectTypes.showcase },
    { value: 'ecommerce', label: q.form.projectTypes.ecommerce },
    { value: 'custom', label: q.form.projectTypes.custom },
    { value: 'full-custom', label: q.form.projectTypes.fullCustom },
  ];

  const budgetOptions = [
    { value: 'essential', label: locale === 'it' ? 'Base (da 250€)' : 'Essential (from 250€)' },
    { value: 'professional', label: locale === 'it' ? 'Professionale (da 500€)' : 'Professional (from 500€)' },
    { value: 'custom', label: locale === 'it' ? 'Su Misura / Altro' : 'Custom / Other' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: `${projectTypes.find(t => t.value === formData.type)?.label} (${budgetOptions.find(b => b.value === formData.budget)?.label})`,
        message: formData.description,
        to_email: 'compagnone.maurizio290@gmail.com',
      };

      await emailjs.send(
        'service_iaoxq8v',
        'template_dmth4s8',
        templateParams,
        'cuCgMHQQHi0sD17QU'
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: 'landing',
        budget: 'essential',
        description: ''
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClassName = "w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none transition-all hover:border-emerald-500/40 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:shadow-[0_0_25px_rgba(16,185,129,0.1)]";

  return (
    <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-neutral-300 ml-1">
            {q.form.name}
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClassName}
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
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClassName}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-neutral-300 ml-1">
            {q.form.phone}
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClassName}
            placeholder="+39 ..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="type" className="text-sm font-medium text-neutral-300 ml-1">
            {q.form.projectType}
          </label>
          <CustomSelect
            options={projectTypes}
            value={formData.type}
            onChange={(val) => setFormData({ ...formData, type: val })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-sm font-medium text-neutral-300 ml-1">
          {q.form.budget}
        </label>
        <CustomSelect
          options={budgetOptions}
          value={formData.budget}
          onChange={(val) => setFormData({ ...formData, budget: val })}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-neutral-300 ml-1">
          {q.form.description}
        </label>
        <textarea
          id="description"
          rows={6}
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className={inputClassName + " resize-none"}
        />
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={cn(
            "group flex w-full items-center justify-center gap-3 rounded-xl py-5 text-lg font-bold text-white transition-all",
            status === 'success' ? "bg-emerald-600 cursor-default" : "bg-emerald-500 hover:bg-emerald-600 hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(16,185,129,0.4)]",
            status === 'loading' ? "opacity-70 cursor-wait" : ""
          )}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              {locale === 'it' ? 'Invio in corso...' : 'Sending...'}
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle2 className="h-5 w-5" />
              {locale === 'it' ? 'Inviato!' : 'Sent!'}
            </>
          ) : (
            <>
              {q.form.submit}
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 text-sm justify-center animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="h-4 w-4" />
            <span>{locale === 'it' ? 'Si è verificato un errore. Riprova più tardi.' : 'An error occurred. Please try again later.'}</span>
          </div>
        )}
      </div>
    </form>
  );
}
