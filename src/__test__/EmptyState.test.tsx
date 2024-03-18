import { render } from '@testing-library/react';
import EmptyState from '../components/EmptyState';

test('renders EmptyState component with default label', () => {
  const component = render(<EmptyState />);

  component.getByText('No data')
  const iconElement = component.getByLabelText('empty-state');
  expect(iconElement.tagName).toBe('svg');
});

test('renders EmptyState component with custom label', () => {
    const customLabel = 'Custom Label';
    const component = render(<EmptyState label={customLabel} />);
    component.getByText(customLabel);
    const iconElement = component.getByLabelText('empty-state');
    expect(iconElement.tagName).toBe('svg');
  });