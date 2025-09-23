let usuario = false
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(usuario){
            resolve("Usuario encontardo")
        }else{
            reject("usuario nao encontrado")
        }
        
        
    },2000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(usuario){
            resolve("Posts do usuario encontrado")
        }else{
            reject("Posts nao carregados")
        }
    },2000)
})


const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(usuario){
            resolve("Comentarios do usuario encontrado")
        }else{
            reject("comentarios nao encontrados")
        }     
    },2000)
})


Promise.allSettled([p1,p2,p3])
    .then(value => console.log(value))
    .catch(err => console.log(err))


    
