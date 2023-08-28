import 'server-only'

interface Dictionary {
    [key: string]: any;
}

const dictionaries: { [key: string]: () => Promise<Dictionary> } = {
    ko: () => import('../../dictionaries/ko.json').then((module) => module.default),
    en: () => import('../../dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => dictionaries[locale]();
