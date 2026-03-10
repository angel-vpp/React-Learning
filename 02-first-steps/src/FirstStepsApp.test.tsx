import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
    return (<div data-testid="ItemCounter" />)
})

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => (
//         <div
//             data-testid="ItemCounter"
//             name={props.name}
//             quantity={props.quantity}
//         />
//     )
// }))


describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks()
    })

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />)

        expect(container).toMatchSnapshot()
    })

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />)

        const itemCounters = screen.getAllByTestId('ItemCounter')

        expect(itemCounters.length).toBe(4)

        screen.debug()
    })

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />)

        expect(mockItemCounter).toHaveBeenCalledTimes(4)
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch',
            quantity: 1
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Mario Kart World',
            quantity: 3
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro Controller',
            quantity: 5
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash Bros Ultimate',
            quantity: 1
        })
    })
})