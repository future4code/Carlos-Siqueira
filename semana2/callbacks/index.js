// exercicio 1 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a
 nomePets = pets.map(pets => pets.nome)
//b)
 salsicha = pets.filter(pets => pets.raca == "Salsicha")
 // c)
mensagemPets = pets.map(pets => pets.mensagem = `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`,)


// exercicio 2 

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
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a)
 nomeProd = produtos.map(p => p.nome)


 //b)
 nomeProd = produtos.map(produtos  => {
  return  [produtos.nome , produtos.preco*0.95]

})

//c)

bebidas = produtos.filter(p => p.categoria == "Bebidas")

//d

ype  = produtos.filter(p => p.nome.includes(`Ypê`))


//e
compre = ype.map(ype =>
  `compre ${ype.nome} por ${ype.preco}`  )

console.log(compre)