type CurrencyType = 'BRL' | 'USD' | 'EUR' | string;

const FORMAT_BY_CURRENCY: Record<CurrencyType, string> = {
  BRL: 'pt-BR',
  USD: 'en-US',
  EUR: 'eur',
};

export default function formatToCurrency(
  value: number,
  currency: CurrencyType = 'USD'
) {
  return new Intl.NumberFormat(FORMAT_BY_CURRENCY[currency], {
    style: 'currency',
    currency,
  }).format(value);
}
