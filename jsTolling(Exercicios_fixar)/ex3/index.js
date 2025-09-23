import "core-js/stable/index.js"
import "regenerator-runtime/runtime.js"

import { somar } from './math.js'


async function buscaUser(usuario) {  
    

    const user = await usuario
    if(usuario){
        return `Bem vindo`
    }else{
        return `Usuario nao encotrado`
    }
}  
console.log(buscaUser(`Joao`))
console.log(somar(2,2))