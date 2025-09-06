import { Locale, SessionProvider } from '@domain/entities';

const LANGUAGE_BY_LOCALE: Record<Locale, string> = {
  en: 'English',
  pt: 'Brazillian Portuguese',
};

const PROVIDER_NAME: Record<SessionProvider, string> = {
  github: 'GitHub',
  gitlab: 'GitLab',
};

export default function getAiPrompt(
  diff: string,
  provider: SessionProvider,
  locale: Locale
) {
  return `
  Your personality:
  - You are an artificial intelligence responsible for analizing differences in a ${PROVIDER_NAME[provider]} repository.

  Git diff:
  - ${diff};
  
  Your mission:
  - Generate a short change log and a full change log about it for the final user of the projetc analized, and ONLY return it as an array containing the two description as elements to me so I can set my internal variables easily.

  Rules:
  - The first array element (the short description) must be a simple string;
  - The second array element (the full description) can be generated as a string with markdown characters;
  - Generate the two description in ${LANGUAGE_BY_LOCALE[locale]};
  `;
}
