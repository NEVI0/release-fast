type Locale = 'en' | 'pt';

type Display = 'DD of MM of YYYY' | 'MMMM DD, YYYY';

const SHORT_MONTHS = [
  'Jan.',
  'Fev.',
  'Mar.',
  'Abr.',
  'Mai.',
  'Jun.',
  'Jul.',
  'Ago.',
  'Set.',
  'Out.',
  'Nov.',
  'Dez.',
];

const FULL_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DISPLAY_BY_LOCALE: Record<Locale, Display> = {
  en: 'MMMM DD, YYYY',
  pt: 'DD of MM of YYYY',
};

export default function formatDate(date: Date | string, locale: Locale = 'en') {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    // Check if the date is valid
    if (isNaN(dateObj.getTime())) {
      return 'Invalid date...';
    }

    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();
    const shortYear = year.toString().slice(-2);
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');

    const display = DISPLAY_BY_LOCALE[locale];

    if (display === 'DD of MM of YYYY') {
      const monthName = SHORT_MONTHS[dateObj.getMonth()];
      return `${day} de ${monthName} de ${year}`;
    }

    if (display === 'MMMM DD, YYYY') {
      const monthName = FULL_MONTHS[dateObj.getMonth()];
      return `${monthName} ${day}, ${year}`;
    }

    return `${day}/${month}/${shortYear} ${hours}h${minutes}`;
  } catch (error) {
    return 'Invalid date...';
  }
}
