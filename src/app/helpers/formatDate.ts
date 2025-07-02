type Display = 'DD of MMMM of YYYY' | 'DD/MM/YY HHhmm';

const MONTHS = [
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
      const monthName = MONTHS[dateObj.getMonth()];
      return `${day} de ${monthName} de ${year}`;
    }

    return `${day}/${month}/${shortYear} ${hours}h${minutes}`;
  } catch (error) {
    return 'Invalid date...';
  }
}
