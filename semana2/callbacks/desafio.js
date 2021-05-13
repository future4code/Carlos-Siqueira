const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a)

 let alfaPoke = pokemons.map(el => el.nome).sort()


 //b)

let tipoPoke = pokemons.map(el => el.tipo )
let tiposPoke = tipoPoke.filter(function(el , i) { return tipoPoke.indexOf(el) == i})

console.log(tiposPoke)
