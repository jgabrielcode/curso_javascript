const xhr = new XMLHttpRequest()
const link = document.querySelector("#iLink")


link.addEventListener("click", (e)=>{
    e.preventDefault()

    xhr.open("GET", link.href, true)
    
    xhr.onload = function(){
    if(xhr.status === 200){
        console.log("Resposta recebida", xhr.responseText)
    }else{
        console.log("erro Encontrado", xhr.status)
    }
}

xhr.onerror = function(){
    console.log(`Erro encontrado`)
}

xhr.send()
})



 