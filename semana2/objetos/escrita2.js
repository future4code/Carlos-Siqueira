const pessoa = {
    nome: "Pedro", 
    idade: 28 ,
    profissao: `programador`
 }

 const pessoa2 = {
    nome: "Joao", 
    idade: 29 ,
    profissao: `engenheiro`
 }


 
function caracteres(obj){

    return [obj.nome,obj.nome.length,obj.idade,obj.profissao,obj.profissao.length]
}



console.log(caracteres(pessoa2))