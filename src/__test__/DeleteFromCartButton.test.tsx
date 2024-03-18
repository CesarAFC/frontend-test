import { render, screen, fireEvent } from '@testing-library/react';
import DeleteFromCartButton from '../components/DeleteFromCartButton';


describe('delete from cart button', () => {
    const mockHandler = jest.fn()
    beforeEach(() => {
        render(<DeleteFromCartButton onClick={mockHandler} />)
    })

    test('is component rendered', () => {

        const iconElement = screen.getByLabelText('delete-icon');
        expect(iconElement.tagName).toBe('svg');

        const button = iconElement.parentElement
        fireEvent.click(button)
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
})