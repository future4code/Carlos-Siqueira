// EXERCÍCIO 01
// const nomeDoProduto = prompt("Insira o nome do produto")
// let precoDoProduto = Number(prompt("Insira o preço do produto"))
// precoDoProduto = precoDoProduto - 1

// console.log(`O produto ${nomeDoProduto} custa R$${precoDoProduto}`)
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 02
// const num1 = Number(prompt("Insira o primeiro número"))
// const num2 = Number(prompt("Insira o segundo número"))

// console.log(`Seus números são: num1 = ${num1} e num2 = ${num2}`)
// console.log("Soma:", num1 + num2)
// console.log("Subtração:", num1 - num2)
// console.log("Multiplicação:", num1 * num2)
// console.log("Divisão:", num1 / num2)
// console.log("Resto da Divisão:", num1 % num2)
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 03
// const numeroSorteado = Math.floor(Math.random() * 10) + 1
// const numeroRecebido = Number(prompt("Insira um número de 1 a 10"))

// console.log(`O número sorteado foi: ${numeroSorteado}`)

// if (numeroRecebido === numeroSorteado){
//     console.log("Seu número é igual ao número sorteado!")
// } else if (numeroRecebido > numeroSorteado){
//     console.log("Seu número é maior do que o número sorteado!")
// } else {
//     console.log("Seu número é menor do que o número sorteado!")
// }
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 04
// const idade = Number(prompt("Digite sua idade"))
// const altura = Number(prompt("Digite sua altura em centímetros"))
// const temProblemaCardiaco = prompt("Você tem algum problema cardíado? S/N")

// if (idade >= 18 && altura >= 160 && temProblemaCardiaco === "N") {
//     console.log("Pode entrar")
// } else {
//     console.log("Não pode entrar")
// }
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 05
// const frase = "  Hoje eu vou comer cenoura ebaaa  "

// console.log(frase, frase.length)
// console.log(frase.trim(), frase.length)
// console.log(frase.toLowerCase())
// console.log("Tem a palavra comer?", frase.includes("comer"))
// console.log("Tem a palavra batata?", frase.includes("batata"))

// const novaFrase = frase.replaceAll("cenoura", "batata")
// console.log(novaFrase)
// console.log("Tem a palavra comer?", novaFrase.includes("comer"))
// console.log("Tem a palavra batata?", novaFrase.includes("batata"))
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 06
// const listaDeCompras = ["batata", "cenoura", "beterraba"]

// console.log(listaDeCompras[1])
// console.log("Tamanho da lista:", listaDeCompras.length)
// listaDeCompras.push("Mandioca")
// console.log(listaDeCompras)
// console.log("Tem cenoura?", listaDeCompras.includes("cenoura"))

// listaDeCompras.splice(1, 1)
// console.log(listaDeCompras)
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 07
// const array = [6, 7, 8, 9, 10]

// function divideDois1 (arrayDeNumeros) {
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
//     return arrayDeNumeros
// }

// let divideDois2 = function (arrayDeNumeros) {
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
//     return arrayDeNumeros
// }

// let divideDois3 = (arrayDeNumeros) => {
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
//     return arrayDeNumeros
// }


// console.log(divideDois1(array))
// console.log(divideDois2(array))
// console.log(divideDois3(array))
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 08

// const pessoa = {
//     nome: "Letícia",
//     idade: 27,
//     generoMusical: "Rock"
// }

// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

// const outraPessoa = {
//     ...pessoa,
//     nome: "Amanda"
// }

// console.log(outraPessoa)
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 09
// const numero = Number(prompt("Digite um número"))

// if (numero % 2 === 0){
//     console.log("É par")
// } else {
//     console.log("É ímpar")
// }
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 10
// const bichinho = prompt("Digite um bichinho")

// if (bichinho === "cachorro"){
//     console.log("Au au")
// } else if (bichinho === "gato"){
//     console.log("Miau")
// } else if (bichinho === "vaca"){
//     console.log("Muuuu")
// } else {
//     console.log("Barulho não encontrado")
// }

// switch(bichinho){
//     case "cachorro":
//         console.log("Au au")
//         break;
//     case "gato":
//         console.log("Miau")
//         break;
//     case "vaca":
//         console.log("Muuuu")
//         break;
//     default:
//         console.log("Barulho não encontrado")
//         break
// }

//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 11
// const numeros = [11, 15, 18, 14, 120, 13, 100]

// let maior = -Infinity

// let i = 0
// while(i < numeros.length) {
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
//     i++
// }

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
// }

// numero = numeros[i]
// for (let numero of numeros){
//     if(numero > maior){
//         maior = numero
//     }
// }

// console.log(`O maior número é ${maior}`)

//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 12
// const prof = {
//     nome: "Letícia Chijo",
//     idade: 27,
//     aulasFront: true,
//     aulasBack: false,
//     jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
//     contaPiada: () => console.log("É pave ou pacume?"),
//     pet: {
//         nome: "Polly",
//         especie: "cachorrinha",
//         raca: "Lhasa Apso",
//         snacksFavoritos: ["biscoito", "maçã", "frango"]
//     }
//  }

//  const verificaAula = (aula) => {
//     if (aula) {
//         return "Dou"
//     } else {
//         return "Não dou"
//     }
//  }

//  const aulasBack = verificaAula(prof.aulasBack)
//  const aulasFront = verificaAula(prof.aulasFront)

//  const jogos = []


//  for(let i = 1; i <= prof.jogosFavoritos.length; i++){
//      jogos.push(`${i}) ${prof.jogosFavoritos[i-1]}`)
//  }

//  console.log(jogos)

//  const frase = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
//  ${aulasFront} aulas de front e ${aulasBack} aulas de back.
//  Meus jogos favoritos são: ${jogos}
//  Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}
//  `
// console.log(frase)
// prof.contaPiada()
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 13
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]

 const produtosComDesconto = produtos.map((prod)=>{
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}
 })

 console.log(produtosComDesconto)

 const hortifruti = produtos.filter((prod) => {
    return prod.categoria === "Hortifruti"
 })

 console.log(hortifruti)

 const hortifrutiComDesconto = produtos
 .filter((prod) => {
    return prod.categoria === "Hortifruti"
 }).map((prod)=>{
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}
 })

 console.log(hortifrutiComDesconto)
