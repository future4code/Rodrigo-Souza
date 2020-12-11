//1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. 
//Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)

const array = [2,3,5,1,4]

array.max = function(array) {
    return Math.max.apply(Math, array)
}

array.min = function(array) {
    return Math.min.apply(Math, array)
}

console.log(array.min(array))
console.log(array.max(array))