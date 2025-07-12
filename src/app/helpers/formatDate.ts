type Display = 'DD/MM/YY HHhmm' | 'DD of MMMM of YYYY' | 'MMMM DD, YYYY';

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

export default function formatDate(
  date: Date | string,
  display: Display = 'DD/MM/YY HHhmm'
) {
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

    if (display === 'DD of MMMM of YYYY') {
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
