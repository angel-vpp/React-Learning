import { heroes as misSuperheroes, Owner, type Hero } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
    const hero = misSuperheroes.find((hero) => {
        return hero.id === id;
    });
    /*
    if(!hero){
        throw new Error(`No existe un heroe con el id ${id}`);
    }
    */
    return hero;
}

console.log(getHeroById(3));

//
//Tarea Imp-Exp
//

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    /*
    const heroesList: Hero[] = [];
    for(let i = 0; i < misSuperheroes.length; i++){
        if(misSuperheroes[i].owner === owner) {heroesList.push(misSuperheroes[i]);}
    }
    */
    const heroesByOwner = misSuperheroes.filter((hero) => hero.owner === owner)
    return heroesByOwner;
}
