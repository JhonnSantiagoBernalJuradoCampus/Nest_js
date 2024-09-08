export let name: string = "Santiago";
export const age: number = 19;
export const isValid: boolean = true;

name = "Santiago Bernal";

export const templateString: string = `Esto es un string
multilinea
que puede tener
" comillas dobles
' comillas simples
inyectar valores ${ name }
expresiones ${ 1 + 1 }
numeros ${ age }
boolenaos ${ isValid }
`
console.log(templateString);
