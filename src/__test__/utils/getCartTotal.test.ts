import { getCartTotal } from '../../utils/utils';

test('calculates total amount from cart', () => {
  const cartItems = [
    { price: 10, quantity: 2 },
    { price: 20, quantity: 1 },
  ];
  expect(getCartTotal(cartItems)).toBe(40);
});