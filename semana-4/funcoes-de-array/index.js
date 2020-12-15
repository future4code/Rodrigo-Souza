
let arrDespesas = [
    { valor: 40, tipo: `alimentação`, descricao: "Burguer King" },
    { valor: 25, tipo: `utilidades`, descricao: 'Ferramenta' },
    { valor: 500, tipo: `viagem`, descricao: 'Passagem' },
    { valor: 50, tipo: `alimentação`, descricao: 'Cerveja' }
]


imprimirDespesas(arrDespesas)
imprimirExtrato()
​
​
function imprimirDespesas(despesas) {
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    for (const iterator of despesas) {
        divDespesas.innerHTML +=
            `<div class="despesaCadastrada">` +`<p>Descrição: ${iterator.descricao}</p>` +`<p>Valor R$: ${iterator.valor}</p>` +`<p>Tipo: ${iterator.tipo}</p>` +`</div>`;
    }
}
​
​
function imprimirExtrato() {
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0
​
    arrDespesas.forEach((despesa) => {
        gastoTotal += despesa.valor;
    })
   
    arrDespesas.filter((despesa) => {
        if (despesa.tipo === "alimentação") {
            return true;
        }
    }).forEach((valor) => {
        gastoAlimentacao += valor.valor;
    })
​
    arrDespesas.filter((despesa) => {
        if (despesa.tipo === "utilidades") {
            return true;
        }
    }).forEach((valor) => {
        gastoUtilidades += valor.valor;
    })
​
    arrDespesas.filter((despesa) => {
        if (despesa.tipo === "viagem") {
            return true;
        }

    }).forEach((valor) => {
        gastoViagem += valor.valor;
    })
​
    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
    Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
    console.log(arrDespesas);
​
}
​
​
function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
    imprimirDespesas(arrDespesas)
    imprimirExtrato()
}
​
​
​
function adicionarDespesa() {
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')
​
    if (validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)) {
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }
​
        arrDespesas.push(novaDespesa)
​
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""
​
​
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
        console.log(arrDespesas);
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}

function filtrarDespesas() {
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)
    let despesasFiltradas;
​
    if (tipoFiltro === 'todos') {
        despesasFiltradas = arrDespesas.filter((p) => {
            if (p.valor >= valorMin && p.valor <= valorMax) {
                return true;
            }
        });
    } else {
        despesasFiltradas = arrDespesas.filter((p) => {
            if (p.tipo === tipoFiltro && p.valor >= valorMin && p.valor <= valorMax) {
                return true;
            }
        })
    }
​
    console.log(tipoFiltro);
    if (validacaoFiltro(tipoFiltro, valorMin, valorMax) === false) {
        alert('Por favor, verifique os dados inseridos');
        return;
    }
​
    imprimirDespesas(despesasFiltradas)
}
​
function validacaoFiltro(cbx, vMin, vMax) {
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
​
    if (cbx !== 'todos' && cbx !== 'alimentação' && cbx !== 'viagem' && cbx !== 'utilidades') {
        return false;
    }
    if (vMin > vMax) {
        return false;
    }
    if (vMax < vMin) {
        return false;
    }
    if (isNumber(vMin)) {
        return true;
    }
    if (isNumber(vMax)) {
        return true;
    }
    return true;
}
​
​
function validarValor(valor) {
    if (valor.value.length > 0 && parseInt(valor.value) > 0) {
        return true
    }
    return false
}
​
function validarTipo(tipo) {
    if (tipo.value !== "") {
        return true
    }
    return false
}
​
function validarDescricao(texto) {
    if (texto.value.replace(/ /g, "").length !== 0) {
        return true
    }
    return false
}
