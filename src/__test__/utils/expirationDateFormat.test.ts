import { expirationDateFormat } from '../../utils/utils';

test('formats and validates expiration date correctly', () => {
  expect(expirationDateFormat('012025')).toBe('01/2025');
  expect(expirationDateFormat('132025')).toBe('/2025');
  expect(expirationDateFormat('012021')).toBe('01/');
});