class Postagem {
    constructor(titulo, autor, imagem, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.imagem = imagem
        this.conteudo = conteudo
    }
}

let meuArray = []


const criarPost = () => {
    let postTitulo = document.getElementById("titulo-post").value
    let postAutor = document.getElementById("autor-post").value
    let postImagem = document.getElementById("imagem-post").value
    let postConteudo = document.getElementById("conteudo-post").value

    if((postTitulo === "") || (postAutor === "") || (postImagem === "") || (postConteudo === "")) {
        alert("Todos os campos são obrigatórios! Você precisa preenchê-los corretamente para poder continuar!")

    } else {
        let post = new Postagem(postTitulo, postAutor, postImagem, postConteudo)
        meuArray.push(post)

        manipularPost(postTitulo, postAutor, postImagem, postConteudo)

        document.getElementById("titulo-post").value = ""
        document.getElementById("autor-post").value = ""
        document.getElementById("imagem-post").value = ""
        document.getElementById("conteudo-post").value = ""

    }


}


function manipularPost (postTitulo, postAutor, postImagem, postConteudo) {
    document.getElementById("container-de-posts").innerHTML +=
     `<article><p>${postTitulo}</p> <p>${postAutor}</p> 
     <p>${postImagem}</p> <p>${postConteudo}</p></article>`

}



