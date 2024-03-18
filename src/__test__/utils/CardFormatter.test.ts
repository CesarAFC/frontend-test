import { CardFormatter } from '../../utils/utils';

test('formats card number correctly', () => {
  const formattedCard = CardFormatter('1234567890123456');
  expect(formattedCard).toBe('1234 5678 9012 3456');
});