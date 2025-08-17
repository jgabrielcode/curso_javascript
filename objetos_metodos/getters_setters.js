const id1 = Symbol()
const id2 = Symbol()

console.log(id1 == id2)

const userId = Symbol('minha chave')


class Person{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
        this[userId] = 581
    }

    get nomeCompleto(){
            return this.nome + " " +this.sobrenome + " seu Id é: " + this[userId]
        }

    set novoId(value){
        return value = this[userId]
    }

    }



    let p1 = new Person('João','Gabriel')

    p1.novoId = 123

    console.log(p1.nomeCompleto)