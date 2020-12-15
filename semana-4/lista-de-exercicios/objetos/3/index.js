//Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes 
//(lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto:
//Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n.
//A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.


const filme = {
    titulo: "Final Fantasy VII - Advent Children",
    ano: 2005,
    diretor: "Tetsuya Nomura",
    ator: ["Cloud Strife, Sephiroth Jenova"],
    atriz: ["Tifa Lockhart, Aerith Gainsborough"]
}

console.log(`Venham assistir ao melhor filme da grande franquia da Square Enix, ${filme.titulo}, do ano de ${filme.ano}, dirigido pelo grande ${filme.diretor} com seus personagens ${filme.ator} e ${filme.atriz}`)

