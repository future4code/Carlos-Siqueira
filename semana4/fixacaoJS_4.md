function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let count = 0
    for(let i = 0; i< arrayDeNumeros.length ; i++){
      if(arrayDeNumeros[i]===numeroEscolhido){
        count ++
        console.log(count)
      }
    }
    if(count){
      return "O número " +numeroEscolhido+ " aparece "+ count +"x"
    } else{
      return "Número não encontrado"
    }
  }