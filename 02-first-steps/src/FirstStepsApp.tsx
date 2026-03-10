import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: "Nintendo Switch", quantity: 1 },
    { productName: "Pro Controller", quantity: 5 },
    { productName: "Super Smash Bros Ultimate", quantity: 1 },
    { productName: "Mario Kart World", quantity: 3 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>
            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
            <></>


            {/* <ItemCounter name="Nintendo Switch" quantity={1} />
            <ItemCounter name="Pro Controller" quantity={2} />
            <ItemCounter name="Super Smash Bros Ultimate" quantity={3} />
            <ItemCounter name="Mario Kart World" quantity={1} /> */}
        </>
    )
}
