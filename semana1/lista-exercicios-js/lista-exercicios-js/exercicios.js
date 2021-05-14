// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   let altura = prompt('Digite uma altura do retangulo!')
   let largura = prompt('Digite uma largura do retangulo!')
   console.log(altura*largura)



   // implemente sua lógica aqui
}

//Exercício 2

function imprimeIdade() {
   let ano = prompt('Digite o ano atual')
   let nascimento = prompt('Digite seu ano de nascimento')

   console.log(ano-nascimento)


   // implemente sua lógica aqui
}

//Exercício 3

function calculaIMC(peso, altura) {
return peso / (altura*altura)

   // implemente sua lógica aqui

}

//Exercício 4

function imprimeInformacoesUsuario() {
   let nome = prompt('Digite seu nome')
   let idade = prompt('Digite sua idade')
   let email = prompt('Digite seu email')

   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
   // implemente sua lógica aqui

}

//Exercício 5

function imprimeTresCoresFavoritas() {

   let cor1 = prompt('Digite sua cor favorita')
   let cor2 = prompt('Digite outra cor favorita')
   let cor3 = prompt('Digite outra cor favorita')

   let  cores = [cor1,cor2,cor3]

   console.log(cores)


   // implemente sua lógica aqui
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
return string.toUpperCase()

   // implemente sua lógica aqui
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
return Math.round(custo/valorIngresso)

   // implemente sua lógica aqui
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
   return (string1.length  == string2.length)
  // implemente sua lógica aqui
}

// Exercício 9

function retornaPrimeiroElemento(array) {

   return array[0]
   // implemente sua lógica aqui
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   return array[array.length-1]

}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
let primeiro = array[0]
array[0] = array[array.length-1]
array[array.length-1] = primeiro
return array
   // implemente sua lógica aqui
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui

   return string1.toUpperCase()  == string2.toUpperCase()
}

// Exercício 13

function checaRenovacaoRG() {
   let ano = prompt('Digite o ano atual')
   let nascimento = prompt('Digite o ano do nascimento')
   let emissao = prompt('Digite o ano da emissao da identidade')
   if(ano-nascimento<=20){
      if(ano-emissao>=5){
         console.log(true)
      } else {console.log(false)}
   } else if(ano-nascimento<=50){
      if(ano-emissao>=10){
         console.log(true)
      } else {console.log(false)}
   } else if(ano-emissao>=15){
      console.log(true)
   } else {console.log(false)}
   // implemente sua lógica aqui
}


// Exercício 14

function checaAnoBissexto(ano) {

   if(ano%400 == 0){
      return true
   } else if(ano%100 == 0){
      return false
   } else if (ano%4 == 0){
      return true
   } else return false
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu() {

   let idade = prompt('Você tem mais de 18 anos?')
   let medio = prompt('Você possui ensino médio completo?')
   let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
function podeOuNao(){
   if (idade == `sim` &&medio == `sim` && disponibilidade ==  `sim`){
      return true
   } else  {
      return false
   }
}

   console.log(podeOuNao())

   // implemente sua lógica aqui
}