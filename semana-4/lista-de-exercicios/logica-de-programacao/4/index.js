//Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. 
//Se um triângulo possuir os três lados iguais, ele é chamado de "Equilátero". Se possuir, dois (e somente 2) lados iguais, diz-se que ele é "Isósceles". 
//Se os três lados tiverem medidas diferentes, ele é "Escaleno". Faça uma função que receba como parâmetro os 
//tamanhos dos três lados do triângulo: a, b, c  e retorne se ele é equilátero, isósceles ou escaleno.




let ladosTriangulo = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado3 === lado2){
        console.log("Este triângulo é um equilátero, pois todos os seus lados tem a mesma medida!")
    }

    if (lado1 === lado2 && lado2 !== lado3 || lado1 === lado3 && lado3 !== lado2 || lado3 == lado2 && lado2 !== lado1){
        console.log("Este triângulo é um isósceles, dois lados iguais e um diferente!")
    } else {
        console.log("Este é um escaleno, pois todos os seus lados são diferentes!!")
    }
}

console.log(ladosTriangulo(20,20,20))
console.log(ladosTriangulo(20,10,30))
console.log(ladosTriangulo(20,20,40))