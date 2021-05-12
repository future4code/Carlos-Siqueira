// exercicio 1

const quantidadeBichos = Number(prompt("Digite a quantidade pets que voce tem"))

if(quantidadeBichos=== 0){
    console.log("Que pena! Você pode adotar um pet!")
} else console.log("digite o nome dos seus pets um por um terminando em enter")
let bichos =[]
 for(let i = 0; i< quantidadeBichos;i++){
bichos.push(prompt("digite o nome do seu pet"))
}

console.log(bichos)
