import { describe, expect, test, vi } from 'vitest';
import { CustomPagination } from './CustomPagination';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import type { PropsWithChildren } from 'react';

vi.mock('../ui/button', () => ({
    Button: ({ children, ...props }: PropsWithChildren) => (
        <button{...props}>{children}</button>
    )
}))

const renderWithRouter = (
    component: React.ReactElement,
    initialEntries?: string[],
) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            {component}
        </MemoryRouter>
    )
}

describe('CustomPagination', () => {
    test('should render component with default values', () => {
        renderWithRouter(<CustomPagination totalPages={5} />)

        expect(screen.getAllByText('Anteriores')).toBeDefined()
        expect(screen.getAllByText('Siguientes')).toBeDefined()

        expect(screen.getAllByText('1')).toBeDefined()
        expect(screen.getAllByText('2')).toBeDefined()
        expect(screen.getAllByText('3')).toBeDefined()
        expect(screen.getAllByText('4')).toBeDefined()
        expect(screen.getAllByText('5')).toBeDefined()
    })

    test('should disable previous button when page is 1', () => {
        renderWithRouter(<CustomPagination totalPages={5} />)

        const previousButton = screen.getByText('Anteriores')

        expect(previousButton.getAttributeNames()).toContain('disabled')
    })

    test('should disable next button when we are in the last page', () => {
        renderWithRouter(<CustomPagination totalPages={5} />, ['/?page=5'])

        const nextButton = screen.getByText('Siguientes')

        expect(nextButton.getAttributeNames()).toContain('disabled')
    })

    test('should disable button 3 when we are in page 3', () => {
        renderWithRouter(<CustomPagination totalPages={10} />, ['/?page=3'])

        const button2 = screen.getByText('2')
        const button3 = screen.getByText('3')

        expect(button2.getAttribute('variant')).toContain('outline')
        expect(button3.getAttribute('variant')).toContain('default')
    })

    test('should change page when click on number button', () => {
        renderWithRouter(<CustomPagination totalPages={10} />, ['/?page=3'])

        const button2 = screen.getByText('2')
        const button3 = screen.getByText('3')
        expect(button2.getAttribute('variant')).toContain('outline')
        expect(button3.getAttribute('variant')).toContain('default')

        fireEvent.click(button2)

        expect(button2.getAttribute('variant')).toContain('default')
        expect(button3.getAttribute('variant')).toContain('outline')
    })
})