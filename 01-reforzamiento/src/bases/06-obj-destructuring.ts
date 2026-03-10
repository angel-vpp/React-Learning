
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

//const name = person.name;
//const age = person.age;
//const key = person.key

const {key, name: ironmanName, age} = person;

console.log(ironmanName, age, key);

interface Hero {
    name: string;
    age: number;
    key:string;
    rank?: string;
}

const useContext = ({key, name, age, rank}: Hero) => {
    return{
        keyName: key,
        user: {
            name,
            age,
        },
        rank,
    }
}

const {
    keyName, 
    rank = 'Sin rango', 
    //user: {name}
    user,
} = useContext(person);

const {name} = user;

console.log(keyName, rank, name);

