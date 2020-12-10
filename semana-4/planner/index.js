function addTask () {
    const input = document.getElementById("tarefa")
    const inputValue = input.value
    console.log('Valor input', inputValue)
    const select = document.getElementById("dias-semana")
    const selectValue = select.value
    console.log('Valor select', selectValue)
    const div = document.getElementById(selectValue)
    div.innerHTML += `<p class="task-item">${inputValue}</p>`
}

// const limparLista = () => {
//     domingo.innerHTML = ""
//     segunda.innerHTML = ""
//     terca.innerHTML = ""
//     quarta.innerHTML = ""
//     quinta.innerHTML = ""
//     sexta.innerHTML = ""
//     sabado.innerHTML = ""
// }


const taskContainer = document.getElementById('task-container')
taskContainer.addEventListener('click', riskItem)

function riskItem(e) {
    if(e.target.classList.contains('task-item')) {
        e.target.classList.toggle('risked-item')
    }
}