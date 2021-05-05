
import en from './en.json';
import fr from './fr.json';

export const languages = {
  activeLanguage: 'en',
  languages: [
    {
      langCode: 'en',
      translations: en,
      subTag: 'en',
    },
    {
      langCode: 'fr',
      translations: fr,
      subTag: 'fr',
    },
  ],
};
