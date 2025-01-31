import es from '@/locales/es';
import en from '@/locales/en';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'es',

    messages: {
        en,
        es,
    }
  }))