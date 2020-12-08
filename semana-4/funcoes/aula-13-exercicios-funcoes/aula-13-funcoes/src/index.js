// -----------------------------------**Exercícios de interpretação de código**----------------------------------- //

//EXERCÍCIO 1
//Leia o código abaixo:

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a. O que vai ser impresso no console?
// vai ser impresso a variavel*5, lá em baixo a função está sendo chamada com o valor 2 e mais embaixo é chamada novamente com o valor 10, logo vai ser impresso 5*2 e 5*10 = 10 e 50

//b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// não apareceria nada, pois é o console.log que está mostrando o resultado e fazendo a chamada da função

// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------


//EXERCÍCIO 2
//Leia o código abaixo:

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

//a. Explicite quais são as saídas impressas no console

// vai ser impresso só os dois primeiros elementos, que no caso é "Darvas" e "Caio", pois o index é menor que dois, e estamos incrementando do 0 até o 1.

//b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?

// vai ser impresso novamente os dois primeiros elementos, pois o index continua sendo menor que dois, e estamos incrementando do 0 até o 1. A impressão dessa vez irá vir como: "Amanda" e "Caio".


// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------


//EXERCÍCIO 3
//O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

//O código abaixo tem como função pegar uma array e pegar os números dentro desta array e verificar se são números pares, caso afirmativo, ele vai pegar todos esses números pares e multiplicar por eles mesmos e vai ser adicionado o 
// resultado desta multiplicação no final da nova array com o .push (arrayFinal)


// const numerosPares = (array) => {
//     let arrayFinal = [];
  
//     for (let num of array) {
//           if (num % 2 === 0) {
//           arrayFinal.push(num * num)
//           }
//     }
  
//     return arrayFinal;
// }

// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------


//EXERCÍCIO 4
//Escreva as funções explicadas abaixo:

//a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// function apresentaMinhaBio() {
//     console.log("Oi, meu nome é Rodrigo, tenho 25 anos, nascido e criado no Rio de Janeiro, e sou um universitário buscando qualificação na área de programação.")
// }

// apresentaMinhaBio()

//b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade 
//(string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em 
//uma só mensagem com o template:

// function apresentaUsuario() {
//     const nome = "Rodrigo"
//     let idade = 25
//     let cidade = "Rio de Janeiro"
//     let estudante = true
//         if(estudante === true){
//             estudante = "sou"
//         } else if (estudante !== true){
//             estudante = "não sou"
//         }

//     console.log(`Oi, meu nome é ${nome}, tenho ${idade} anos, moro na cidade do ${cidade} e ${estudante} estudante.`)
// }

// apresentaUsuario()

// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------


//EXERCÍCIO 5
//Escreva as funções explicadas abaixo:
//a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas 
//e retorne o resultado. Invoque a função e imprima no console o resultado.

// function somaDoisNumeros(num1, num2) {
//     const soma = num1 + num2
//     return soma
// }

// const resultado = somaDoisNumeros(25,48)
// console.log(resultado)

//b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

// function maiorOuIgual (num1, num2) {
//     if (num1 >= num2 === true) {
//         console.log(true)
//     }
//     else {
//         console.log(false)
//     }
// }

// maiorOuIgual(20, 18)
// maiorOuIgual(20, 22)

//c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. 
//(não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso)

// function recebeString(string) {
//     for(let l = 0; l < 10 ; l++)
//         console.log("Labenu")
// }

// recebeString()

// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------


//EXERCÍCIO 6
//Para os itens a seguir, considere o seguinte array para os seus testes:


// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


//a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

// function manejaArray(meuArray) {
//     for(elemento of meuArray){
//         console.log(elemento)
//     }
//     return meuArray.length
// }

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const tamanhoElemento = manejaArray(array)
// console.log("Temos",tamanhoElemento, "elementos nesta array.")


// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


// function numPares(num) {

//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }

// }

// console.log(numPares(24))


// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele


// let verificaParesArray = (array) => {
//     let qtde = 0;
//     for (const iterator of array) {
//       if (iterator % 2 === 0) {
//         qtde++;
//       }
//     }
//     console.log(`Este array tem ${qtde} números pares.`);
//   }
//   verificaParesArray(array);


// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
  

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// let verificaParesArray = (array) => {
//     let qtde = 0;
//     for (const num of array) {
//       if (num % 2 === 0) {
//         qtde++;
//       }
//       if(num % 2 === 0) {
//         num === true
//         console.log(num, true)
//     }

//     }
//     console.log(`Essa array tem ${qtde} números pares.`);
// }
//   verificaParesArray(array)


// -----------------------------------**DESAFIO**----------------------------------- //

//DESAFIO1
//Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. 
//Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções:

//1.  Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro.


// let subtraiNumeros = (num1, num2) => {
//     return num1 - num2
// }

// console.log(subtraiNumeros(10,20))


//2. Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
//Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimí-lo.


// let somaDoisNumeros = (num1, num2) => {
//     const soma = num1 + num2
//     return soma
// }

// console.log(somaDoisNumeros(10,100))

// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------// -----------------------------------

//DESAFIO2
//Considere o seguinte array e utilize ele para os exercícios:

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

//a. Escreva uma função que receba um array como parâmetro e retorne um array com apenas os números pares e multiplicados por 2.

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// let multiplicaPares = (numeros) => {
//     let qtde = 0;
//     for (let num of numeros) {
//         if (num % 2 === 0) {
//             qtde++;
//             console.log(num, num*2)
//         }
    
// }
// }

// multiplicaPares(numeros)



//b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.

//  const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// function maiorNumero(numeros) {
//     return Math.max.apply(null, numeros)
// }

// console.log(maiorNumero(numeros))


//c. Escreva uma função que receba um array como parâmetro e retorne o **índice** do maior número deste array.

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]


// let maiorIndice = (numeros) => {
//     const indice = numeros.lastindexOf(41)

// }

// console.log(maiorIndice(6))

//d. Escreva uma função que recebe um array como parâmetro e retorne este array invertido.

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// function reversoArray (numeros){
//     if (numeros.length === 0){
//     return []
//     }
//       return [numeros.pop()].concat(reversoArray(numeros))
//     }

//     console.log(reversoArray([0, 8, 23, 16, 10, 15, 41, 12, 13]))