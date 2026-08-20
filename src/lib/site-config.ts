/** Central config for SEO, Schema.org, and contact (single source of truth). */
export const siteConfig = {
  name: "Maurizio Compagnone — Portfolio",
  url: "https://mcompagnone.netlify.app",
  ogImage: "https://mcompagnone.netlify.app/opengraph-preview.png",
  contact: {
    email: "compagnone.maurizio290@gmail.com",
  },
  location: {
    locality: "Castelfiorentino",
    region: "Toscana",
  },
  links: {
    github: "https://github.com/TheNotoriousCompa",
    linkedin: "https://www.linkedin.com/in/maurizio-compagnone-5a6937222/",
  },
} as const;
