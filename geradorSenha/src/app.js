const frm = document.querySelector("form")
const textArea = document.querySelector(".textArea")

const num = frm.querySelector("#inNum")
const sym = frm.querySelector("#inSym")
const low = frm.querySelector("#textLower")
const up = frm.querySelector("#textUpper")


export function gerarSenha(){

    const arr = []
    const tam = frm.inLength.value
    const caracteres = [] //array com todos os caracteres que o usuario selecionou

    if(num.checked){
        for(let i = 0; i < tam; i++){
            caracteres.push(Math.floor(Math.random() * tam));
        }
       
    }
    if(up.checked){
        caracteres.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if(low.checked){
        caracteres.push("abcdefghijklmnopqrstuvwxyz")
    }

    if(sym.checked){
        caracteres.push("@#$%^&*()!+?/><")
    }
    

    if(tam < 8){
         textArea.textContent = 'Tamanho da senha deve ser igual ou maior que 8'
         textArea.style.color = "red"
         return
     }else{
        const todos = caracteres.join("")
        textArea.style.color = "black"
        for(let i = 0; i < tam; i++){
             arr.push(todos[Math.floor(Math.random() * todos.length)])
            
         } 
        
        
     }
    
    textArea.textContent =  arr.join("")

}