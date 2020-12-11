// 3. Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. Considere, então, essas pessoas:


    const pessoas = [
    	{ nome: "Paula", idade: 12, altura: 1.8},
    	{ nome: "João", idade: 20, altura: 1.3},
    	{ nome: "Pedro", idade: 15, altura: 1.9},
    	{ nome: "Luciano", idade: 22, altura: 1.8},
    	{ nome: "Artur", idade: 10, altura: 1.2},
    	{ nome: "Soter", idade: 70, altura: 1.9}
    ]


//     A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.

//     a) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **tem permissão de entrar** no brinquedo

    const pessoasPermitidas = pessoas.filter((usuario,index,array) => {
        return usuario.idade > 14 && usuario.idade < 60 && usuario.altura >= 1.5
    })

    console.log(pessoasPermitidas)

//     b) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **não podem entrar** no brinquedo.

    const pessoasSemPermissao = pessoas.filter((usuario,index,array) =>{
        return usuario.idade < 14 || usuario.idade > 60 || usuario.altura < 1.5
    })

    console.log(pessoasSemPermissao)