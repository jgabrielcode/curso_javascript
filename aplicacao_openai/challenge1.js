class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    falar(){
        return `Ola eu sou uma pessoa`
    }
}

class Aluno extends Pessoa{
    constructor(nome,idade,matricula){
        super(nome,idade)
        this.matricula = matricula
    }
    falar(){ return super.falar() + ` e tambem sou um aluno`
    }
           
}

class Professor extends Pessoa{
    constructor(nome,idade,disciplina){
        super(nome,idade)
        this.disciplina = disciplina 
    }
    falar(){
        return super.falar() + ` e tambem sou professor`
    }
}

class Estagiario extends Aluno{
    constructor(nome,idade,matricula,anoEstagio){
        super(nome,idade,matricula)
        this.anoEstagio = anoEstagio
    }
    falar(){
        return super.falar() + ` e agora sou estagiario`
    }
}

const pessoa = new Pessoa("Joao",23)
const aluno = new Aluno("Joao",23, 123)
const professor = new Professor("Beatryz", 24, "Portugues")
const estagiario = new Estagiario("Joao",23, 123, 2)

console.log(pessoa.falar())
console.log(aluno.falar())
console.log(professor.falar())
console.log(estagiario.falar())
