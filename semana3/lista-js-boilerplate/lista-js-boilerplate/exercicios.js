//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  
let invert = []  
for(let i = 0;i<array.length;i++){
invert[i] = array[array.length-1-i]

}

return invert

}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   //console.log(array)
   let p2 = array.filter(function(el){
      if(el%2==0){
         return el
      }
   })

   let pel2 = p2.map(function(el){
      return el* el 
   })
//console.log(pel2)
   return pel2
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui

   let p2 = array.filter(function(el){
      if(el%2==0){
         return el
      }
   })
   return p2
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
let maior = 0
   for(let i= 0; i<array.length;i++){
if(maior<array[i]){
   maior = array[i]
}

   }
   return maior
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
return array.length

}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui

   const respostas = [false,false,true,true,true]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
let pares = []
   for(let i = 0; i<n*2 ; i++){
if(i%2==0){
   pares.push(i)
}
   }
   //console.log(pares)
   return pares
   // implemente sua lógica aqui
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica 
if(a == c && a == b && b==c ){
   return `Equilátero`
} else if(a!=b&&a!=c&&b!=c){ 
   return 'Escaleno'
}else if(a==b&&a!=c||a==c&&a!=b||b==c&&b!=a){
   return 'Isósceles'
}
}



// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}