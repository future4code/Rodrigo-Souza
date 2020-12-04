


let primeiraCarta = comprarCarta()
let segundaCarta = comprarCarta()
let terceiraCarta = comprarCarta()
let quartaCarta = comprarCarta()

let resultado1 = primeiraCarta.valor + segundaCarta.valor
let resultado2 = terceiraCarta.valor + quartaCarta.valor


alert("Bem vindo ao jogo do Blackjack da Labenu!")
alert("Um breve resumo do blackjack! \n -> Existem 2 jogadores: o usuário e o computador. \n -> Os jogadores compram cartas do baralho. \n -> O jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. \n -> A pontuação de cada jogador é a soma do valor das suas cartas. \n -> O jogador com a maior pontuação ganha a rodada.")

if(confirm("Quer começar uma nova rodada?")) {
      console.log("Jogador --- Cartas:", primeiraCarta.texto , "e", segundaCarta.texto , " --- Pontuação:", resultado1)
      console.log("Computador --- Cartas:", terceiraCarta.texto , "e", quartaCarta.texto , "--- Pontuação:", resultado2)
   if (resultado1 > resultado2) {
      console.log("Você venceu!")
   }
   
   else if (resultado2 > resultado1) {
      console.log("O computador ganhou! Não desanime, tente novamente!")
   }
  
   else {
      console.log("Aconteceu um empate!")
   }
}

else {
   console.log("O jogo acabou!")
}