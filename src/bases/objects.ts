export const pokemonIds: Array<number> =[1,20,30,10];



interface Pokemon {
    id: number,
    name: string,
    age?: number
}

export const pikachu: Pokemon = {
    id: 1,
    name: 'Pikachu'
}