/** Central config for SEO, Schema.org, and contact (single source of truth). */
export const siteConfig = {
  name: "Maurizio Compagnone — Portfolio",
  url: "https://mcompagnone.netlify.app",
  ogImage: "https://mcompagnone.netlify.app/opengraph-preview.png",
  contact: {
    email: "compagnone.maurizio290@gmail.com",
    phoneE164: "+393290147907",
    phoneDisplay: "+39 329 014 7907",
  },
  location: {
    locality: "Castelfiorentino",
    region: "Toscana",
    regionIso: "IT-52",
    country: "IT",
    /** Approximate center of Castelfiorentino for geo meta */
    geoPosition: "43.6063;10.9691",
  },
  serviceArea: {
    cities: ["Castelfiorentino", "Montaione", "Gambassi Terme", "Empoli", "Certaldo", "Poggibonsi"] as const,
    area: "Valdelsa",
  },
  links: {
    github: "https://github.com/TheNotoriousCompa",
    linkedin: "https://www.linkedin.com/in/maurizio-compagnone-5a6937222/",
    instagram: "https://www.instagram.com/thenotorious_compa02/",
    facebook: "https://www.facebook.com/luca.fray",
    messenger: "https://m.me/luca.fray",
    discord: "https://discord.com/users/compagnone",
  },
} as const;
