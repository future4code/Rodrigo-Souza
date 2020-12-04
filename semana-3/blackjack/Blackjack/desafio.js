// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

// let primeiraCarta = comprarCarta()
// let segundaCarta = comprarCarta()
// let terceiraCarta = comprarCarta()
// let quartaCarta = comprarCarta()
// let quintaCarta = comprarCarta()

// let resultado1 = primeiraCarta.valor + segundaCarta.valor
// let resultado2 = terceiraCarta.valor + quartaCarta.valor


// if (primeiraCarta === "A" && segundaCarta === "A") {
//    primeiraCarta = quintaCarta
// }


// if(confirm("Quer começar um outro round?")) {
//    if(confirm(` Suas cartas são: ${primeiraCarta.texto} e ${segundaCarta.texto} \n A carta revelada do computador é: ${terceiraCarta.texto} \n Deseja comprar mais uma carta?`)) {
//       console.log("--- Usuário:", primeiraCarta.texto,segundaCarta.texto , "--- Computador:", terceiraCarta.texto)
//       if(confirm(` Suas cartas são ${primeiraCarta.texto} , ${segundaCarta.texto} e ${quintaCarta.texto} \n A carta revelada do computador é: ${terceiraCarta.texto} \n Deseja comprar mais uma carta?`)) {      
//          console.log("--- Usuário:", primeiraCarta.texto,segundaCarta.texto,quintaCarta.texto, "--- Computador:", terceiraCarta.texto, quartaCarta.texto)               }      
// } else {
//    console.log("O jogo acabou! Sua pontuação foi de", resultado1, "e o do computador foi de:", resultado2)
// }
// }




// if (resultado1 > resultado2) {
//       console.log("Você venceu!")
//    }
   
// else if (resultado2 > resultado1) {
//       console.log("O computador ganhou! Não desanime, tente novamente!")
//    }
  
// else if (resultado1 = resultado2) {
//       console.log("Aconteceu um empate!")
// }

// else {
//    console.log("O jogo acabou!")
// }