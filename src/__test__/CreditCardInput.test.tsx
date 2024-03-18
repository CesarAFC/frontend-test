import { render, screen, fireEvent } from '@testing-library/react';
import CreditCardInput from '../components/CreditCardInput';
import { Provider } from "react-redux";
import configureStore from "../store";

const { store } = configureStore();

describe('CreditCardInput component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <CreditCardInput />
            </Provider>
        );
    })

  test('renders CreditCardInput component with input field and issuer icon', () => {
    expect(screen.getByPlaceholderText('Card number')).toBeDefined()
    expect(screen.getByText('Card number')).toBeDefined()
    const issuerIcon = screen.getByLabelText('issuer-icon');
    expect(issuerIcon.tagName).toBe('SPAN');
  });

  test('dispatches handleForm action on input change', () => {
    const inputField = screen.getByPlaceholderText('Card number');
    fireEvent.change(inputField, { target: { value: '4111111111111111' } });
    expect(inputField.value).toBe('4111 1111 1111 1111');

  });
});
