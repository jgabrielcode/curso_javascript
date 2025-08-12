const pessoa1 = {
    nome: 'João',
    sobrenome: 'Gabriel',
    idade: 22,
    
}
console.log(pessoa1.nome)
console.log(pessoa1.idade)

function criarPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
    
}
const pessoaId = criarPessoa('joao','maria','25')
console.log(pessoaId.nome)


const lista = {
   item1:'Pera',
   item2:'Uva',
   item3:'Café',

  itensLista () {
    return `${this.item1}, ${this.item2}, ${this.item3}`
   }
}

console.log(lista.itensLista());