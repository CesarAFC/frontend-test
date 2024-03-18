import { render, fireEvent } from '@testing-library/react';
import PrimaryButton from '../components/PrimaryButton';

test('renders PrimaryButton component with loading icon', () => {
  const children = 'Submit'
  const component = render(<PrimaryButton loading>{children}</PrimaryButton>);
  component.getByText(children)
  const iconElement = component.getByLabelText('loading-icon');
  expect(iconElement.tagName).toBe('svg');
});

test('Clicking button calls event handler once', () => {
    const children = 'Submit';
    const mockHandler = jest.fn()
    const component = render(<PrimaryButton loading onClick={mockHandler}>{children}</PrimaryButton>);
    const button = component.getByText(children)
    fireEvent.click(button)
    // expect(mockHandler.mock.calls).toHaveLength(1)
    expect(mockHandler).toHaveBeenCalledTimes(1)
}) 
