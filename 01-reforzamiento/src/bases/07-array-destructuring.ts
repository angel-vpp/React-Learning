
const characterNames = ['Goku','Vegeta','Trunks']


const [,p2] = characterNames;

console.log({p2});

//as const si las posiciones de string/number serán simepre las mismas y se queda como readonly
const returnsArrayFn = () => {
    return['ABC', 123] as const;
}

const [letters,  numbers] = returnsArrayFn();

console.log(letters + 'D', numbers + 100);

//
//Tarea Desestructuración
//

const useState = (name: string) => {
    return [name, (name: string) => {console.log(name)}] as const
}

const [name, setName] = useState('Goku');
console.log(name);    
setName('Vegeta');