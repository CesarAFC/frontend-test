import { formatCurrency } from '../../utils/utils';

test('formats currency to usd dollar', () => {
  expect(formatCurrency(100)).toBe('$100.00');
  expect(formatCurrency()).toBe(undefined);
});