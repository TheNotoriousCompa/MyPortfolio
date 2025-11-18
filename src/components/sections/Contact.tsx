'use client';

import { SectionTitle } from '@/components/sections/SectionTitle';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
  };

  return (
    <section id="contacts" className="py-12 md:py-16 px-4 sm:px-5">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-base md:text-lg text-neutral-300 mb-10 max-w-md mx-auto">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll get back to you as soon as possible!
        </p>

        <div className="w-full grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Contact Information */}
          <div className="bg-neutral-900/50 p-5 md:p-6 rounded-xl border border-white/5 text-left h-full">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">Contact Information</h3>

            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a
                    href="mailto:compagnone.maurizio290@gmail.com"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    compagnone.maurizio290@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a
                    href="tel:+393290147907"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    +39 329 014 7907
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-neutral-300">Gambassi Terme, Tuscany, Italy</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/TheNotoriousCompa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors p-2"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/maurizio-compagnone-5a6937222/"
                  className="text-neutral-400 hover:text-white transition-colors p-2"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900/50 p-5 md:p-6 rounded-xl border border-white/5 h-full">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-left">Send me a message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-left text-neutral-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-neutral-800/50 border border-white/10 rounded-lg px-3 py-2 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-left text-neutral-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-neutral-800/50 border border-white/10 rounded-lg px-3 py-2 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-left text-neutral-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-neutral-800/50 border border-white/10 rounded-lg px-3 py-2 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-left text-neutral-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-neutral-800/50 border border-white/10 rounded-lg px-3 py-2 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
