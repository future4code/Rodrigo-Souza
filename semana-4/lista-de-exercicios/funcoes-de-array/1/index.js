//1. Considere um array com o seguinte formato:

let lista = [

    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
]


//a) Faça uma função que retorne um **novo array** só com os adultos 
//(pessoas com idade igual ou superior a 20)

let filtrarQuaseCoroas = lista.filter((lista) => {
    return lista.idade >= 20; // invertido para mostrar no console.log o que é pedido
})

console.log(filtrarQuaseCoroas)


//b) Faça uma função que retorne um **novo array** só com as 
//crianças/adolescentes (pessoas com idade inferior a 20)

let filtrarQuaseBebes = lista.filter((lista) => {
    return lista.idade <= 20; // invertido
})

console.log(filtrarQuaseBebes)
