const numeroMaior = (num1,num2)=>{

    return num1 > num2 ? num1 : num2
    
}

const max = 100
const min = 0

const n1 = Math.floor(Math.random()* (max - min)) + min
const n2 = Math.floor(Math.random()* (max - min)) + min

console.log(numeroMaior(n1,n2))