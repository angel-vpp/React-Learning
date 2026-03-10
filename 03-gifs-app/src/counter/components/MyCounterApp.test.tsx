import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MyCounterApp } from './MyCounterApp'

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />)

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            `Counter: 7`
        )

        expect(screen.getByRole('button', { name: '+1' })).toBeDefined()
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined()
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined()
    })

    test('should increment the counter', () => {
        render(<MyCounterApp />)
        const labelH1 = screen.getByRole('heading', { level: 1 })
        const button = screen.getByRole('button', { name: '+1' })

        fireEvent.click(button)

        expect(labelH1.innerHTML).toContain('Counter: 8')
    })

    test('should decrement the counter', () => {
        render(<MyCounterApp />)
        const labelH1 = screen.getByRole('heading', { level: 1 })
        const button = screen.getByRole('button', { name: '-1' })

        fireEvent.click(button)

        expect(labelH1.innerHTML).toContain('Counter: 6')
    })

    test('should increment the counter', () => {
        render(<MyCounterApp />)
        const labelH1 = screen.getByRole('heading', { level: 1 })
        const buttonAdd = screen.getByRole('button', { name: '+1' })
        const buttonReset = screen.getByRole('button', { name: 'Reset' })

        fireEvent.click(buttonAdd)
        fireEvent.click(buttonAdd)
        fireEvent.click(buttonAdd)

        expect(labelH1.innerHTML).toContain('Counter: 10')

        fireEvent.click(buttonReset)

        expect(labelH1.innerHTML).toContain('Counter: 7')
    })
})