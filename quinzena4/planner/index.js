
function criaTarefa() {
    const addTarefa = document.getElementById("tarefa")
    const diaDaSemana = document.getElementById("dias-semana")
    if (addTarefa.value !== "") {
        console.log(diaDaSemana.value)
        console.log(addTarefa.value)
    
        const minhaLista = document.getElementById(diaDaSemana.value)
        minhaLista.innerHTML += `<div class="tarefas">${addTarefa.value}</div>`
        addTarefa.value=''

    }
}
