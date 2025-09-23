// criacao de promessa

const myPromise = new Promise((resolve, reject) => {
        resolve(`Usuario Joao encontrado`)
        reject(`o usuario Joao nao foi encontrado`)
    
})

myPromise
.then((data)=>{ // data recebe o resolve
    console.log(data)
})
.catch((err)=>{ // catch recebe e trata esse erro para ficar visualmente melhor para o usuario
    console.log(`Aconteceu um erro: ` + err)
})
.finally(()=>{
    console.log(`Sempre roda`)
})
    
