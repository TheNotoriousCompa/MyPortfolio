import 'server-only';

export type Locale = 'en' | 'it';

const dictionaries = {
    en: () => import('../../messages/en.json').then((module) => module.default),
    it: () => import('../../messages/it.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en();
