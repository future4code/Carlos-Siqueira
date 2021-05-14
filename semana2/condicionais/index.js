const habilitado = Number(prompt("Qual a sua idade?"))

if(habilitado > 18) {
  console.log("Você pode dirigir")
	 } else console.log("Você nao pode dirigir")


     const turno = prompt("Qual o seu turno?")


     // exercicio 2


    //  if(turno ===`M`){
    //      console.log("Bom dia!")
    //  } else if(turno === 'V'){
    //      console.log('Boa tarde!')
    //  } else if(turno === 'N'){
    //      console.log('Boa Noite!')
    //  }

    switch (turno) {
        case "M":
            console.log("Bom dia!")
            break;
            case "V":
                console.log('Boa tarde!')
            break;
            case "N":
                console.log('Boa Noite!')

    }

// Exercicio 3


    const genero = prompt("Qual o Genero do filme?")
    const valor = Number(prompt("Quanto custa o ingresso"))

    if(genero == 'fantasia' && valor < 15){
        console.log(`bom filme `)
    } else console.log('Escolha outro filme :(')
