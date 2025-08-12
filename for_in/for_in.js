const arr = [50,20,10]

const obj = {
    nome: "Joao",
    idade: 23,
    nacionalidade: "Brasil"
}

for(let chave in obj){
    console.log(chave + ": " + obj[chave])
}

for(let i in arr){
    console.log(arr[i])
}

 
    