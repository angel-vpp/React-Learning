interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    }
}

console.log(ironman);

/*
const spiderman = {...ironman};

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.postalCode = 'BBB456';
*/

//const spiderman = structuredClone(ironman);

//spiderman.firstName = 'Peter';
//spiderman.lastName = 'Parker';
//spiderman.age = 22;
//spiderman.address.postalCode = 'BBB456';

//console.log(ironman, spiderman);