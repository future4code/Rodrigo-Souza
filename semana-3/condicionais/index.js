//EXERCÍCIO 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?

// O código está fazendo uma pergunta para o usuário e transformando esta resposta em um tipo number, o código consiste em pegar este número que foi a resposta e testar se é um número par ou número ímpar*, 
// com estas condiçoes o programa imprime no console dois tipos de mensagens diferentes, pois está sendo utilizado uma estrutura de condição - if e else

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//EXERCÍCIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. Para que serve o código acima?

//O código acima, serve para simplificar a consulta de preços das frutas. Você digita a fruta que você quer e o preço vem a seguir.

//b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// Será impresso da seguinte maneira -> "O preço da fruta Maçã é R$2.25"

//c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// Removendo o break do item C, a Pêra vai passar a valer o valor do default que no caso é 5. A mensagem seria -> "O preço da fruta Pêra é R$ 5."

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//EXERCÍCIO 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }
// console.log(mensagem)

//a. O que a primeira linha está fazendo?

// A primeira linha está fazendo uma pergunta ao usuário e transformando a resposta dele em um tipo Number.

//b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// Digitando o número 10 a mensagem no terminal seria -> "Esse número passou no teste". Quando o número for -10, ele só irar mostrar o erro no console e além disso não irá mostrar nada.

//c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim haverá um erro no console. Ele vai dizer que "mensagem" não está definida. O erro está porque a "mensagem" está dentro do bloco/escopo do if e o console.log(mensagem) está fora.
// Isto siginifca que as variavéis criadas no escopo só pertencem a este escopo.


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//EXERCÍCIO 4

//Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// let idade = Number(prompt("Qual é a sua idade?"))

//2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.



//3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."


// if (idade >= 18) {
//     console.log("Você pode dirigir!")
// }

// else {
//     console.log("Você não pode dirigir")
// }


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//EXERCÍCIO 5

//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) 
//ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
// let tempo = prompt("Porfavor digite quem qual turno você estuda! M para manhã, V para período vespertino e N para noite").toLowerCase()

// if (tempo === "m") {
//     console.log("Bom Dia!")

// }
// else if (tempo === "v") {
//     console.log("Boa Tarde!")
// }

// else if (tempo === "n") {
//     console.log("Boa Noite!")
// }

// else {
//     console.log("Digite um valor correspodente ao que se foi pedido!")
// }

 
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//EXERCÍCIO 6

//Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

// let periodo = prompt("Porfavor digite quem qual turno você estuda! M para manhã, V para período vespertino e N para noite").toLowerCase()

// switch(periodo) {
//     case "m":
//         console.log("Bom Dia!")
//         break
//     case "v":
//         console.log("Boa Tarde!")
//         break
//     case "n":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Digite um valor correspodente ao que se foi pedido!")
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//EXERCÍCIO 7

//Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual 
//o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
//Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

//15 reais e fantasia

// const filme = prompt("Qual o gênero do filme que você quer assistir? -Ação, Romance, Fantasia, Comédia e etc... -").toLowerCase()
// const preco = Number(prompt("Quantos R$ você pode usar para comprar o ingresso?"))

// if (filme === "fantasia" && preco < 15 ) {
//       console.log("Bom filme")
// }

// else {
//         console.log("Escolha outro filme :(")
// }


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//DESAFIO1
// Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", pergunte ao 
// usuário, pelo prompt que snack ele vai comprar (pipoca, chocolate, doces, etc) e imprima no 
// console as mensagens "Bom filme!" e "... com [SNACK]", trocando [SNACK] pelo que o usuário colocou no input.


// const filme = prompt("Qual o gênero do filme que você quer assistir? -Ação, Romance, Fantasia, Comédia e etc... -").toLowerCase()
// const preco = Number(prompt("Quantos R$ você pode usar para comprar o ingresso?"))
// const snack = "pipoca, chocolate, doce"

// if (filme === "fantasia" && preco < 15 && snack === snack) {

//     const snack = prompt("Deseja algum Snack antes da sessão começar? Temos pipoca, chocolate e doce como opção.").toLowerCase()
//       console.log("Bom filme com o seu(a)", snack, "!")
// }

// else {
//         console.log("Escolha outro filme :(")

// }

//DESAFIO2
//Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos
// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total 
// que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do 
// programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser dados em dólar (considerar a cotação de U$1,00 = R$4,10)

//DO
SFCategoria1 = 1320
SFCategoria2 = 880
SFCategoria3 = 550
SFCategoria4 = 220

DTCategoria1 = 660
DTCategoria2 = 440
DTCategoria3 = 330
DTCategoria4 = 170

FICategoria1 = 1980
FICategoria2 = 1320
FICategoria3 = 880
FICategoria4 = 330
//DO

//IN
SFCategoriaIN1 = 5412
SFCategoriaIN2 = 3608
SFCategoriaIN3 = 2255
SFCategoriaIN4 = 902

DTCategoriaIN1 = 2706
DTCategoriaIN2 = 1804
DTCategoriaIN3 = 1353
DTCategoriaIN4 = 697

FICategoriaIN1 = 8118
FICategoriaIN2 = 5412
FICategoriaIN3 = 3608
FICategoriaIN4 = 1353
//IN

console.log("---Dados de compra---")

const nomeDoUsuario = prompt("Digite aqui seu Nome completo:")
console.log("Nome do Cliente:", nomeDoUsuario)

const tipoDeJogo = prompt("Qual o tipo de jogo? (IN - internacional ou DO doméstico)") .toUpperCase()
if (tipoDeJogo === "IN" || tipoDeJogo === "DO") {
    console.log("Tipo de Jogo:", tipoDeJogo)
}
else {
    console.log("Tente novamente, você digitou errado, só pode ser IN para jogo internacional ou DO para jogo doméstico")
}

const etapaDoJogo = prompt("Qual a etapa do jogo? (SF - semi-final, DT - decisão de terceiro lugar ou FI - final)") .toUpperCase()
if (etapaDoJogo === "SF" || etapaDoJogo === "DT" || etapaDoJogo === "FI") {
    console.log("Etapa do Jogo:", etapaDoJogo)
}
else {
    console.log("Tente novamente, você digitou errado.. Lembrando que só pode ser SF para semi-final, DT para decis!ao de terceiro lugar ou FI para final!")
}

const categoria = Number(prompt("Qual a categoria? (1, 2, 3 ou 4)"))
if (categoria === 1 || categoria === 2 || categoria === 3 || categoria === 4) {
    console.log("Categoria:", categoria)
}
else {
    console.log("Digite um número valido para Categoria de jogo de 1 a 4")
}

const qtdIngresso = Number(prompt("Quantos ingressos você deseja?")) 
console.log("Quantidade de Ingressos:", qtdIngresso)

console.log("---Valores---")

if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", SFCategoria1, "R$")
    console.log("Valor Total:", SFCategoria1 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2 && qtdIngresso > 1 ) {
    console.log("Valor do Ingresso:", SFCategoria2, "R$")
    console.log("Valor Total:", SFCategoria2 * qtdIngresso, "R$")
}



else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 3 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", SFCategoria3, "R$")
    console.log("Valor Total", SFCategoria3 * qtdIngresso, "R$")
}



else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 4 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", SFCategoria4, "R$")
    console.log("Valor Total", SFCategoria4 * qtdIngresso, "R$")
}


else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 1 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", DTCategoria1, "R$")
    console.log("Valor Total", DTCategoria1 * qtdIngresso, "R$")
}



else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 2 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", DTCategoria2, "R$")
    console.log("Valor Total", DTCategoria2 * qtdIngresso, "R$")
}


else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 3 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", DTCategoria3, "R$")
    console.log("Valor Total", DTCategoria3 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 4 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", DTCategoria4, "R$")
    console.log("Valor Total", DTCategoria4 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 1 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", FICategoria1, "R$")
    console.log("Valor Total", FICategoria1 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 2 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", FICategoria2, "R$")
    console.log("Valor Total", FICategoria2 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 3 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", FICategoria3, "R$")
    console.log("Valor Total", FICategoria3 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 4 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", FICategoria4, "R$")
    console.log("Valor Total", FICategoria4 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 1 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", SFCategoriaIN1, "R$")
    console.log("Valor Total", SFCategoriaIN1 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 2 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", SFCategoriaIN2, "R$")
    console.log("Valor Total", SFCategoriaIN2 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 3 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", SFCategoriaIN3, "R$")
    console.log("Valor Total", SFCategoriaIN3 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 4 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", SFCategoriaIN4, "R$")
    console.log("Valor Total", SFCategoriaIN4 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 1 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", DTCategoriaIN1, "R$")
    console.log("Valor Total", DTCategoriaIN1 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 2 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", DTCategoriaIN2, "R$")
    console.log("Valor Total", DTCategoriaIN2 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 3 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", DTCategoriaIN3, "R$")
    console.log("Valor Total", DTCategoriaIN3 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 4 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", DTCategoriaIN4, "R$")
    console.log("Valor Total", DTCategoriaIN4 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 1 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", FICategoriaIN1, "R$")
    console.log("Valor Total", FICategoriaIN1 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 2 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", FICategoriaIN2, "R$")
    console.log("Valor Total", FICategoriaIN2 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 3 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", FICategoriaIN3, "R$")
    console.log("Valor Total", FICategoriaIN3 * qtdIngresso, "R$")
}

else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 4 && qtdIngresso > 1) {
    console.log("Valor do Ingresso:", FICategoriaIN4, "R$")
    console.log("Valor Total", FICategoriaIN4 * qtdIngresso, "R$")
}


else if (categoria <= 0 || categoria >= 5) {
    console.log("Categoria não definida")
}

else if (qtdIngresso < 1) {
    console.log("Digite um número acima de 0 para continuar com as compras dos ingressos")
}


