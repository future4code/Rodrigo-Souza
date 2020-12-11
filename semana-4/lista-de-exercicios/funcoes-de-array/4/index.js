
 const consultas = [
 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
 ]


// A sua tarefa é criar um **array** com os e-mails para cada um deles. Existem dois padrões de e-mail. 
// Para as consultas **não canceladas** é:
// Olá, ${ Sr./Sra. } ${ nome da pessoa }. Estamos enviando esta mensagem para
// ${ lembrá-lo / lembrá-la } da sua consulta no dia ${ data da consulta }. Por favor, acuse
// o recebimento deste e-mail.

const validarEmail = consultas.map((cliente,index,array) =>{
    if (!cliente.cancelada && cliente.genero === "feminino"){
        return `Olá, Sra. ${cliente.nome}. Estamos enviando esta mensagem para
        lembrá-la da sua consulta no dia ${cliente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail`
    }

    else if (!cliente.cancelada && cliente.genero === "masculino"){
        return `Olá, Sr.${cliente.nome}. Estamos enviando esta mensagem para
        lembrá-lo da sua consulta no dia ${cliente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail`
    }

    else if(cliente.cancelada && cliente.genero === "masculino"){
        return `Olá, Sr. + ${cliente.nome}. Infelizmente, sua consulta marcada
        para o dia +  ${cliente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la`
    }
    else {
        return `Olá, Sra.${cliente.nome} .Infelizmente, sua consulta marcada
        para o dia ${cliente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em
        contato conosco para remarcá-la`
    }
})
console.log(validarEmail)




// Para as consultas **canceladas** é:
// Olá, ${ Sr./Sra. } { nome da pessoa }. Infelizmente, sua consulta marcada
// para o dia ${ data da consulta } foi cancelada. Se quiser, pode entrar em 
// contato conosco para remarcá-la
