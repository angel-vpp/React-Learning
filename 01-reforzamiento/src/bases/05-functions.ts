
function greet(name: string): string{
    return `Hola ${name}`;
    //return 333;
}

const greet2 = (name: string): string => {return `Hola ${name}`}

/*
greet = function(){
    return 'Hola Blank';
}
*/

interface User {
    uid: string;
    username: string;
}

function getUser(): User{
    return{
       uid: 'ABC-123',
       username: 'vpp',
    }
}

const getUser2 = () => {
    return{
       uid: 'ABC-123',
       username: 'vpp',
    }
}


const message = greet('Goku');
const message2 = greet2('Vegeta');

const user = getUser();
const user2 = getUser2();

console.log(message, message2);
console.log(user, user2);

//
//
// Segundo Vídeo:
//
//

const greet2Simple = (name: string) => `Hola ${name}`;

const getUser2Simple = () => 
    ({
       uid: 'ABC-123',
       username: 'vpp',
    })


const message2S = greet2Simple('Vegeta');
const user2S = getUser2Simple();

console.log(`${message2S} \n`, user2S);


const myNumbers: number[] = [6,7,8,9,10];

/*
myNumbers.forEach(function(value) {
    console.log({value});
});
*/

myNumbers.forEach((value) => {
    console.log({value});
});

//Forma corta de hacerlo:
myNumbers.forEach(console.log);

//Resultado Forma corta con función de flecha simple
myNumbers.forEach((value, index, array) => 
    console.log(value, index, array)
)