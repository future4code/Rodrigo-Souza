// Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado) // O operador && (e) só devolve true se todos os booleanos forem true! -> false

resultado = bool1 && bool2 && bool3 // -> false
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1) // o último resultado que é o b. teve como resultado false, logo o !resultado vai se tornar true. bool1 || bool1 = true, logo true && true -> true
console.log("c. ", resultado)

console.log("e. ", typeof resultado) // boolean


// Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array) // undefined - variável declarada mas sem valor

array = null
console.log('b. ', array) // null - viarável declarada com o valor null(vazio)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  // 11, lenght conta o número de elementos

let i = 0
console.log('d. ', array[i]) // o i é o elemento 3, pois o 3 é o index0 dessa array.

array[i+1] = 19
console.log('e. ', array) // 4 (3+1), o elemento 4(não é o index) recebe o valor de 19, transformando a array em [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // = 9 (3+6), aqui ele declara uma variável, pede uma soma de 3+6 e pede para imprimir no console só o valor e não a array.

//1.Faça um programa que:

//a. Pergunte a idade do usuário

let idadeSua = prompt("Qual é a sua idade?")
console.log(idadeSua)

//b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let idadeAmigo = prompt("Qual é a idade do seu melhor amigo?")
console.log(idadeAmigo)

//c. Imprima na tela a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)

let resultado1 = (idadeSua > idadeAmigo)
    console.log("Sua idade é maior do que a do seu melhor amigo?", resultado1)

let resultado2 = (idadeSua < idadeAmigo)
    console.log("Sua idade é maior do que a do seu melhor amigo?", resultado2)

//d. Imprima na tela a diferença de idade (não tem problema se sair um número negativo)
let resultado3 = Number(idadeSua - idadeAmigo)
console.log("A diferença de idade sua e do seu melhor amigo é de:" ,resultado3,"anos", "(caso o número esteja negativo, é só ignorar o sinal de menos!)")


//2.Faça um programa que:
//a. Peça ao usuário que insira um número par.

let numPar = prompt("Porfavor, digite um número par:")

//b. Imprima na tela o resto da divisão desse número por 2.

let divisao = numPar / 2
console.log(divisao)

//c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Sempre que você divide um número par por 2 o resultado é sempre um número par inteiro pois o resto(%) dessa divisão é 0

//d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Sempre que você divide um número impar por 2 o resultado é decimal. Pois há um resto na divisão e o console da o resultado em decimal porcausa desse resto da divisão.


//3. Faça um programa, seguindo os passos:
//Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

let listaDeTarefas = []

//b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

let pergunta = prompt("Digite uma tarefa que você precisa realizar hoje:")
listaDeTarefas.push(pergunta)
let pergunta2 = prompt("Digite uma outra tarefa:")
listaDeTarefas.push(pergunta2)
let pergunta3 = prompt("Digite uma última tarefa:")
listaDeTarefas.push(pergunta3)

//c. . Imprima o array na tela

console.log(listaDeTarefas)

//d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 

let indice = prompt("Digite o índice de uma tarefa que você já realizou hoje(0, 1 ou 2):")

//e. Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(indice, 1)

//f. Imprima o array na tela
console.log("Você ainda precisa realizar as seguintes tarefas:" ,listaDeTarefas)


//4. 4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

let nomeDoUsuario = prompt("Digite aqui seu nome:")
let emailDoUsuario = prompt("Digite aqui seu e-mail")
console.log("O e-mail" , emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o)", nomeDoUsuario)

//DESAFIOS EXTRAS

//1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K)
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15 --- (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
console.log((77 -32) *5/9 +273.15, "Kelvin")

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
console.log((80)*9/5 +32, "Fahrenheit")

//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
console.log((30)*9/5 +32, "Fahrenheit") //86
console.log((86-32)*5/9 +273.15,"Kelvin") // ULTIMO ITEM

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
let alterar = prompt("Digite aqui qual temperatura em Graus Celsius você deseja fazer a conversão para Fahrenheit e Kelvin:")
let equacao1 = Number((alterar) *9/5 +32, "Fahrenheit")
let equacao2 = Number((equacao1-32)*5/9 +273.15, "Kelvin")
console.log(equacao1)
console.log(equacao2)

//2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
//Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

//a.  Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
let a = Number(280* 0.05) //14
console.log(a)

//b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
let desconto = (a * 15/100) // 42
let total = (a - desconto)
console.log(total)

//3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. 
//Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). 
//Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:

//a. a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
//20lb equivalem a X kg
let lbxkg = (20/2.2046)
console.log("20lbs equivalem a",lbxkg,"kg")

//b.Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma:
//10.5oz equivalem a X kg
let ozxkg = (10.5/35.274)
console.log("10.5oz equivalem a",ozxkg,"oz")

//c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
//100mi equivalem a X m
let mixm = (100/0.00062137)
console.log("10mi equivalem a",mixm,"m")

//d.  Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
//50ft equivalem a X m

let ftxm = (50/3.2808)
console.log("50ft equivalem a",ftxm,"m")

//e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma:
//103.56gal equivalem a X l

let galxl = (103.56/0.26417)
console.log("103.56gal equivalem a",galxl,"l")

//f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//450 xic equivalem a X l

let xicxl = (450*6/25)
console.log("450xic equivalem a",xicxl,"l")

//g;  Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter.
let questao = prompt("Digite aqui a um número em lbs para converter em Quilogramas:")
let lbxkg2 = Number(questao/2.2046)
console.log(questao,"lbs equivale a",lbxkg2,"kg.")