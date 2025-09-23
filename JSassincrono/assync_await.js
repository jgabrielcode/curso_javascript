function buscarUsusario(usuario){
    return new Promise((resolve, reject) => {
        if(usuario){
             setTimeout(()=> resolve(`Usuario ${usuario} encontrado`),4000)
        }else{
            reject(`Usuario não encontrado`)
        }
       
    })
    
}

function buscarPosts(posts){
    return new Promise((resolve, reject) => {
        if(posts){
            setTimeout(()=> resolve(`Posts encontrado`),1000)
        }else{
            reject(`Posts não encontrados`)
        }
    })
}

function buscarComentarios(comentarios){
    return new Promise((resolve, reject) => {
        if(comentarios){
            resolve(`Comentarios Encontrados`)
        }else{
            reject(`Comentarios não encontrados`)
        }
    })

}

async function busca(){
    try{
        const usuario = await buscarUsusario(`Joao`)
        console.log(usuario)
        const posts = await buscarPosts("Post 1")
        console.log(posts)
        const comentarios = await buscarComentarios("Parabens")
        console.log(comentarios)
    }catch(err){
        console.log("Erros encontrados:", err)
    }
}

busca()

