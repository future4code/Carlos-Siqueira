function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
    let nota = (ex + p1 +p1+ p2+ p2 + p2)/6
    if(nota>=9){
      return 'A'
    } else if(nota>=7.5 && nota <9){
      return 'B'
    } else if(nota>=6 && nota < 7.5){
      return 'C'
    } else if(nota < 6){
    return 'D'
      
    }
    }
    
  console.log(calculaNota(10 ,5 ,6))