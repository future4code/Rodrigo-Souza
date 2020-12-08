//EXERCÍCIO 1
//O que o código abaixo está fazendo? Qual o resultado impresso no console?
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// antes de entrar no for, o valor é 0 e dentro do for é criado a variável i com o valor de 0, sendo menor que cinco, e fazendo loop sempre acresentando ele mesmo(valor) até chegar a um número(i) maior que 4, e no caso
// o valor seria 10, com o i parando no 4

//EXERCÍCIO 2
//Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
          console.log(numero)
      }
  }

//a. O que vai ser impresso no console?
// vai ser impresso os números maiores de 18 da const lista, mas não um ao lado do outro, e sim um em cada linha

//19
//21
//23
//25
//27
//30

//b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

//não há como fazer este exercício com o for.. of..
//usei somente o for

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]


for(let i = 0; i < lista.length; i++) {
    console.log("Indice:" ,i,"->", lista[i])
}

//EXERCICIO 3

//Nas perguntas abaixo, considere que você tenha acesso a um array  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.
//a. Escreva um programa que: Imprima cada um dos valores do array original.

arrayOriginal = [1, 2, 3, 4, 5]
for (let valor of arrayOriginal) {
    if ( valor <= 5) {
        console.log(valor)
    }
}

// b. Escreva um programa que: - Imprima cada um dos valores do array original divididos por 10

arrayOriginal = [1, 2, 3, 4, 5]
for (let valor of arrayOriginal) {
    valor = valor / 10
    if ( valor <= 5) {
        console.log(valor)
    }
}

// c. Escreva um programa que: - Crie um novo array contendo, somente, os números pares do array original. - - Imprima esse novo array

arrayOriginal = [1, 2, 3, 4, 5]
for (let valor of arrayOriginal) {
    
    if ( valor < arrayOriginal.length && valor % 2 == 0) {
        let novoArray = []
        novoArray.push(valor)
        console.log(novoArray)

    }
}

//d. Escreva um programa que: Crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero" -- Imprima este novo array

let palavras = ["O", "elemento", "do", "índex", "é", ":", "numero"]
console.log(palavras)

//e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

const arrayOriginal = [80, 30, 100, 800, 400, 222, 300, 412]
let valorMaximo = 0
let valorMinimo = 999

for (const num of arrayOriginal) {
    if (num > valorMaximo) {
        valorMaximo = num
    }

    if (num < valorMinimo) {
        valorMinimo = num
    }

}

console.log ("O maior número é :", valorMaximo, "e o menor é ", valorMinimo)



//DESAFIO1
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

// ele vai imprimir quatro linhas e cada linha vai ser acrescentado +1 zero

//DESAFIO 2
//Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
//Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa 
//difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

let primeiro = Number(prompt("VAMOS JOGAR!!! Digite um número:"))
let segundo = Number(prompt("Advinhe o número que eu escrevi:"))

while (primeiro !== segundo) {
    if (primeiro > segundo) {
        console.log("Você errou, mas foi quase! Aqui vai uma dica.. é um número maior do que você digitou!")
        segundo = prompt("Advinhe novamente, com um outro número:")
    }

    else if (primeiro < segundo) {
        console.log("Você errou, mas foi quase! Aqui vai uma dica.. é um número menor do que você digitou!")
        segundo = prompt("Advinhe novamente, com um outro número:")
    }

} console.log("BOAAA! Você acertou!")


//DESAFIO3
// Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. 
// Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. 
// Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear 
// um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
// Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe 
// comentários no seu código sobre esta reflexão.
// Abaixo, há uma referência que explica como sortear um número em Javascript


 let numeroRandom = Math.floor(Math.random()*100)+1;
 let bico = Number(prompt("Digite um número de 1 a 100, e veja se você consegue advinhar o mesmo número que eu pensei!"))
//  alert(numeroRandom) -> se roubar vai tomar pedrada!
 while (numeroRandom !== bico) {
    if (numeroRandom > bico) {
        console.log("Você errou, mas foi quase! Aqui vai uma dica.. é um número maior do que você digitou!")
        bico = prompt("Advinhe novamente, com um outro número:")
    }

    else if (numeroRandom < bico) {
        console.log("Você errou, mas foi quase! Aqui vai uma dica.. é um número menor do que você digitou!")
        bico = prompt("Advinhe novamente, com um outro número:")
    }

 } console.log("BOAAA! Você acertou!")
