const corpo = document.querySelector(".container")
const frm = corpo.querySelector("form")
const lista = corpo.querySelector(".lista")

const salvarTarefa = (tarefa)=>{

    if(localStorage.getItem("tarefa")){
        const tarefas = localStorage.getItem("tarefas") + ";" + tarefa
        localStorage.setItem("tarefa", tarefas)
    }else{
        localStorage.setItem("tarefa",tarefa)
    }
}

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const tarefa = frm.inTarefa.value

    if(tarefa == 0){
        alert("Nenhuma Tarefa adicionada")
         frm.inTarefa.focus()
        return
    }

    const p = document.createElement('p')
    p.innerText = tarefa
    const bt = document.createElement('button')
    bt.innerText = "Excluir"
    bt.classList = "btElimina"
    lista.appendChild(p)
    p.appendChild(bt)

    
    gravarTarefa(tarefa)

    frm.inTarefa.value = ""
    frm.inTarefa.focus()
})


lista.addEventListener("click", (e)=>{
    
    if(e.target.classList.contains("btElimina")){

        if(confirm("Deseja eliminar essa tarefa")){
            e.target.parentElement.remove()
        }
        
    }

    
})


const gravarTarefa = (tarefa)=>{
    if(localStorage.getItem("tarefa")){
        const tarefas = localStorage.getItem("tarefa") + ";" + tarefa
        localStorage.setItem("tarefa", tarefas)
    }else{
        localStorage.setItem("tarefa", tarefa)
    }
}
