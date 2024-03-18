import { luhnValidation } from '../../utils/utils';

test('validates card number using Luhn algorithm', () => {
  expect(luhnValidation('4111 1111 1111 1111')).toBe(true);
  expect(luhnValidation('1234')).toBe(false);
  expect(luhnValidation('abcdhijklmnopqrst')).toBe(false);
});