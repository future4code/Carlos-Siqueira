const pessoa = {
    nome: "Pedro", 
    apelidos: ["Ped", "Pedrinho", "Pedrao"]
 }
 
function imprime(obj){
    console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`)
}


const ser = {...pessoa, apelidos: [`pedroca`,`peter`, `Pi`]}

imprime(ser)