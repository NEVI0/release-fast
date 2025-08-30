import { cookies } from 'next/headers';

import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import {
  AVAILABLE_LOCALES,
  COOKIE_LOCALE_KEY,
  DEFAULT_LOCALE,
} from '@domain/constants/locales';

export default getRequestConfig(async () => {
  let locale = DEFAULT_LOCALE;

  const store = await cookies();
  const storaged = store.get(COOKIE_LOCALE_KEY)?.value;

  if (hasLocale(AVAILABLE_LOCALES, storaged)) locale = storaged;

  return {
    locale,
    messages: (await import(`@app/locales/${locale}.json`)).default,
  };
});
