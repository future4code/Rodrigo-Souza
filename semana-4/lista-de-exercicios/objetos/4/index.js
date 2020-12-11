//4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de `nome`, `idade`, `email` e `endereco`. 
//Crie uma função chamada `anonimizarPessoa`, que deverá retornar um **novo** objeto 
//com as mesmas propriedades, mas com a string `ANÔNIMO` no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.

let eu = {
    nome:"Rodrigo",
    idade: 25,
    email: "rsouzawork95@gmail.com",
    endereco: "Rua Quiroa, RJ"
}

function anonimizarPessoa(eu) {
    let anonima = {
        nome: "ANÔNIMO",
        idade: eu.idade,
        email: eu.email,
        endereco: eu.endereco
    }
    console.log(anonima)
}

console.log(anonimizarPessoa(eu))
console.log(eu)

