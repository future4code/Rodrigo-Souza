// Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

a = 10
b = 10

console.log(b) //vai imprimir o valor de b que é 10

b = 5 // o valor de b passa a ser 5 e não 10
console.log(a, b) // vai imprimir o valor de a e b, 10 e 5 respectivamente.


// Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

a = 10
b = 20
c = a // c está sendo atribuido com a, que tem o valor de 10
b = c // b tem o valor de 10, mas passa a valer o mesmo que c, que é 10
a = b // a tem o valor de 10 e b também tem o valor de 10, mostrando que é uma afirmação booleana, verdadeira(true)

console.log(a, b, c) // vai imprimir o valor de a,b e c, todos eles tem o valor de 10!






// Exercícios de escrita de código**

// 1. Construa um programa, seguindo os seguintes passos:



// a) Declare uma variável para armazenar um nome, sem atribuir um valor.

let nome1

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let idade1

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.


// console.log(typeof nome, idade)

console.log(typeof nome1)
console.log(typeof idade1)

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.


/* RESPOSTA: as 2 variavéis são do tipo undefined, pois não foi atribuido nenhum valor para ambas, ou 
pode ter sido uma consequência (esquecimento na hora de atribuir um valor a variável) 
ou foi feito de propósito (que é o caso) */


// d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

let nome2 = prompt("Qual é o seu nome?")
let idade2 = prompt("Qual é a sua idade?")
console.log("Seu nome é", nome2)
console.log("Você tem", idade2, "anos")

// e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(typeof nome2)
console.log(typeof idade2)

/* RESPOSTA: o tipo da variável nome é string por ser texto, e o idade também é um texto, pelo motivo que
o prompt é uma caixa de texto, então sempre que escrevermos nele, vai ser gerado uma variável tipo string,
mesmo no caso de ser um número(idade) */


// f) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

console.log("Olá", nome2, ", você tem", idade2, "anos")


/* Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). 
Imprima-as com as respostas no console da seguinte forma: */

const nome = prompt("Qual é o seu nome?")
console.log("Resposta:", nome)

let idade = prompt("Qual é a sua idade")
console.log("Resposta:", idade)

let altura = prompt("Qual é a sua altura?")
console.log("Resposta:", altura)

let peso = prompt("Qual é o seu peso?")
console.log("Resposta:", peso)

let endereco = prompt("Qual é o seu endereço?")
console.log("Resposta:", endereco)

let time = prompt("Você torce para qual time de futebol?")
console.log("Resposta:", time)


/* Faça um programa que contenha um array com 5 das suas comidas preferidas, 
armazenado em uma variável. Em seguida, siga os passos:
a) Imprima na tela o array completo*/

let comidasPreferidas = ["lasanha", "estrogonofe", "pizza", "batata frita", "comida japonesa"]
console.log(comidasPreferidas)

/* b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida 
por cada uma das comidas, **uma embaixo da outra**. */

console.log("Essas são as minhas comidas preferidas!")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

/* c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a 
segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista */

let comidas = prompt("Qual é a sua comida preferida?")
let comidasPreferidas2 = ["lasanha", comidas, "pizza", "batata frita", "comida japonesa"]
console.log(comidasPreferidas2)

/* Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável.
 Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos: */

let perguntas = ["Você está usando uma camisa preta?", "Você está com tênis calçado, neste exato momento?", "Você está usando uma calça jeans?"]

let respostas = [true, false, true]
console.log (perguntas[0], respostas[0])










