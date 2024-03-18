import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductInCart';
import { Provider } from "react-redux";
import configureStore from "../store";

const { store } = configureStore();

describe('ProductInCart component', () => {
    const Productprops = {
        id: '1',
        name: 'Product 1',
        price: 100,
        qty: 5,
      }
    beforeEach(() => {
        render(
          <Provider store={store}>
            <ProductCard
              id={Productprops.id}
              name={Productprops.name}
              price={Productprops.price}
              qty={Productprops.qty}
            />
          </Provider>
        );
    })

    test('renders Product cart element with provided props', () => {
        expect(screen.getByText('Product 1')).toBeDefined();
        expect(screen.getByText('$100.00')).toBeDefined();
        expect(screen.getByText('5')).toBeDefined();

        const iconElement = screen.getByLabelText('delete-icon');
        expect(iconElement.tagName).toBe('svg');

    })
})