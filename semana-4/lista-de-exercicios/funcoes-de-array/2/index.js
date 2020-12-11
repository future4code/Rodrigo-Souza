//2. Em todos os itens deste exercício, você terá que escrever uma **função** cuja entrada seja um **array**. Para testes, considere: `const array = [1, 2, 3, 4, 5, 6]`.

const array = [1, 2, 3, 4, 5, 6]

//a) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2. Isto é `[2, 4, 6, 8, 10, 12]`.


// let dobraArray  = array.map(item => item * 2)
// console.log(dobraArray)


//b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. Isto é: `["3", "6", "9", "15", "18"]` 

// let triplicaArray = array.map(item => item *3 + "")
// console.log(triplicaArray)

//c) Escreva uma função que **retorne** um array de strings dizendo: "${número} é par/impar". Isto é: `["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]`

let par = []

let arrayPar = (array) => {
    for (let  numero of array) {
        if (numero % 2 === 0) {
            par.push(`O ${numero} é par`)
        } else {
            par.push(`O ${numero} é ímpar`)
        }
    }
    console.log(par)
}

console.log(arrayPar(array))