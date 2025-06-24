type CurrencyType = 'BRL' | 'USD' | 'EUR';

export default function formatToCurrency(
  value: number,
  currency: CurrencyType = 'BRL'
) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(value);
}
