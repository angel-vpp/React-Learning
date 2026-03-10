import type { CSSProperties } from "react";

const firstName = 'Ángel';
const lastName = 'Vergara';

const favouriteGames = ['Dark Souls', 'Metroid', 'The Binding Of Isaac']
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Spain',
}
//Las constantes se pueden definir fuera de la función y es más eficiente

const myStyles: CSSProperties = {
    backgroundColor: '#7a7a7a',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
}

export const MyAwesomeApp = () => {

    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>

            <p className="mi-clase-favorita">{favouriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    )
}

// export function MyAwesomeApp() {

//     return (
//         <div data-testid="div-app">
//             <h1 data-testid="first-name-title">{firstName}</h1>
//             <h3>{lastName}</h3>

//             <p className="mi-clase-favorita">{favouriteGames.join(', ')}</p>

//             <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

//             <p style={myStyles}>{JSON.stringify(address)}</p>
//         </div>
//     )
// }