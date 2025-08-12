function relogio(){
    const corpo = document.querySelector(".container")
const relogio = corpo.querySelector(".timeout")

const inicio = corpo.querySelector("#btIniciar")
const pausar = corpo.querySelector("#btPause")
const zerar = corpo.querySelector("#btZerar")

//tamanho da fonte relogio
relogio.style.fontSize = "60px"

let timer;
let segundos = 0
  
function crinadoHora(){
    
    const data = new Date(segundos * 1000)
    const horaFormatada = data.toLocaleTimeString("pt-BR",{
    timeZone: "UTC",
    hour12: false
})

segundos++
relogio.innerHTML = horaFormatada
}

inicio.addEventListener("click",()=>{
    clearInterval(timer)
    timer = setInterval(crinadoHora,1000)
    relogio.style.color = "black" 
})


pausar.addEventListener("click",()=>{
    clearInterval(timer)
    relogio.style.color = "red"
})

zerar.addEventListener("click",()=>{
    segundos = 0
    relogio.innerHTML = `00:00:00`
    relogio.style.color = "black"
    clearInterval(timer)
})
}

relogio()

/*
Função que cria o contador de segundos de 1 em 1 
Peguei o horario Unix de 1970 00:00:00 e atribui 1 segundo à ele
depois converti a hora para "pt-BR" pro horario ficar exatamente em 00:00:00 pois pela localidade tem alteracao de horas(21:00:00 por exemplo)
tive que forcar ele alterar o UTC com timezone: "UTC")
 apos isso chamei essa funcao a cada 1000ms no setInterval()
Coloquei timer como null para atribuir o setinterval à ele e poder pausar essa ocorrencia

BASICAMENTE EU ESTOU ALTERANDO O HORARIO DO TIME UNIX 1MS POR VEZ
*/ 








