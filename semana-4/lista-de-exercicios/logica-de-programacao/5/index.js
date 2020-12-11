//5. Faça um programa que, dados dois números,
// i. indique qual é o maior,
// ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e
// iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)


function comparaDoisNumeros (x,y) {
    if (x > y) {
        console.log("Maior número é o", x)
    } else if ( y > x) {
        console.log("Maior número é o", y)
    } else {
        console.log("São iguais dois números iguais")
    }

    if (x % y === 0) {
        console.log(`${x} é divisivel por ${y}`)
    } else {
        console.log(`${x} não é divisivel por ${y}`)
    }

    if (y % x === 0) {
        console.log(`${y} é divisivel por ${x}`)
    } else {
        console.log(`${y} não é divisivel por ${x}`)
    }

    let diferencaXY = (x - y)*(-1)
    if(diferencaXY < 0) {
        console.log("A diferença dos dois números é :" ,diferencaXY *-1)
    } else {
        console.log("A diferença dos dois números é :", diferencaXY)
    }

}

comparaDoisNumeros(10,12)