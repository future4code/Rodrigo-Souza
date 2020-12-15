//for

let nomes = ["Rodrigo", "Aline", "Gabriel"]

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

// forEach

function exemploArray(elemento,indice,lista) {
    console.log("[z]" , indice , elemento);
}
[10,20,30]. forEach(exemploArray);



//reduce
let num = [2,4,6]
let soma = num.reduce(function(somaParametro, numero){
    return somaParametro + numero
})

console.log(soma)

