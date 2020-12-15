//2. Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e retorna um
// objeto com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área (`lado1 * lado2`).

let criaRetangulo = (lado1, lado2) => {
    console.log("Largura:", lado1)
    console.log("Altura:", lado2)
    console.log("Perímetro:", ((lado1 + lado2) *2))
    console.log("Área:", (lado1 * lado2))
}

console.log(criaRetangulo(10,5))

