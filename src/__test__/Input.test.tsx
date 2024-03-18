import { render, fireEvent, screen } from '@testing-library/react';
import Input from '../components/Input';

describe('Input component', () => {
    const inputProps = {
        type: 'text',
        placeholder: 'Enter text',
        value: 'Sample text',
        onChange: jest.fn(),
      };
    beforeEach(() => {
        render(<Input {...inputProps} />)
    })

  test('renders input element with provided props', () => {

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeDefined();

    fireEvent.change(inputElement, { target: { value: 'Updated text' } });
    expect(inputProps.onChange).toHaveBeenCalledTimes(1);
  });
});
