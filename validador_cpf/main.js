const frm = document.querySelector("form")
const inCpf = document.querySelector("#inCpf")

const outCpf = document.querySelector("#outCpf")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
     const cpf = inCpf.value.replace(/\D+/g,"")

    const eliminaDigitos = cpf.slice(0,-2)
    let contador = eliminaDigitos.length + 1
    //console.log(contador)
    const arr = eliminaDigitos.split("")
    

    const somaDigito1 = arr.map((acc)=>{
        const mult = acc * contador
        contador--
        return mult
    }).reduce((acc,item)=>{
        return acc+=item
    },0)

    let contaDigito1 = 11 - (somaDigito1 % 11)

    if(contaDigito1 > 9){
        contaDigito1 = 0
    }

    arr.push(contaDigito1)
    
    let contador2 = eliminaDigitos.length + 2
    //console.log(contador2)

    const somaDigito2 = arr.map((acc)=>{
        const mult = acc * contador2
        console.log(mult)
        contador2--
        return mult
    }).reduce((acc,item)=>{
        return acc+=item
    },0)

    let contaDigito2 = 11 - (somaDigito2 % 11)
    if(contaDigito2 > 9){
        contaDigito2 = 0
    }

    arr.push(contaDigito2)
    
    
    const cpfCriado = arr.join("")

    console.log(cpf)
    console.log(cpfCriado)

    if(cpf == cpfCriado){
        alert(`CPF VALIDO: ${cpfCriado}`)
    }else{
        alert(`CPF INVALIDO`)
    }



    
})



