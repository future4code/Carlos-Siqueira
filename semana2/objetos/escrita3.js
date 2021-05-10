var carrinho = []

let banana = {
    nome: `banana`,
    disponibilidade : true ,
}

let uva = {
    nome: `uva`,
    disponibilidade : true ,
}

let laranja = {
    nome: `laranja`,
    disponibilidade : true ,
}

function coloca(fruta){
    carrinho.push(fruta)
}

coloca(banana)

coloca(uva)

coloca(laranja)

console.log(carrinho)