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


//exercicio 2 

///a)

function imprimeValor(array){
for(let i=0; i<=array.length-1;i++){
console.log(array[i])

}

}

// b 

function imprimeValorDivididoPorDez(array){
    for(let i=0; i<=array.length-1;i++){
    console.log(array[i]/10)
    
    }
    
    }


    //c 

    function imprimeValorPar(array){
        let novoArray = []
        for(let i=0; i<=array.length-1;i++){
            if(array[i]%2 === 0){
        novoArray.push(array[i])
            }
        }
        console.log(novoArray)
        }

//d


function imprimeIndexEValor(array){
    for(let i=0; i<=array.length-1;i++){
    console.log(`O elemento do índex ${i} é: ${array[i]}`)
    
    }
    
    }
    
    //e

    function maiorEMenor(array){
let maior = array[0] 
let menor = array[0]
for(let i=0; i<=array.length-1;i++){
if(array[i]> maior ){
    maior = array[i]
}
if(array[i] < menor){
    menor = array[i]
}
}
console.log(`"O maior número é ${maior} e o menor é ${menor}`)
    }