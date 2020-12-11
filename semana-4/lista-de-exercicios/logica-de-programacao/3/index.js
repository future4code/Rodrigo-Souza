//3. Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`) os **N** primeiros números pares 
//(por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve imprimir 0, 2, 4, 6 e 8).  
//Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

function quantidadeDeNumerosPares(num){
let i = 0
while(i <= num) {
    console.log(i*2)
    i++
}
}

quantidadeDeNumerosPares(10)
quantidadeDeNumerosPares(6)