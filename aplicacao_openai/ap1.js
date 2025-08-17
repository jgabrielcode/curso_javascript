class Pessoa{
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    falar(){
        return `Ola eu sou uma pessoa`
    }
    
}

const p1 = new Pessoa("Joao", 23)

console.log(p1.falar())

class Aluno extends Pessoa{
    constructor(nome,idade,matricula){
        super(nome,idade)
       this.matricula =  matricula
    }
    falar(){
        return super.falar() + " e tambem sou aluno"
    }
}

const aluno1 = new Aluno(`Joao`,23,123)

console.log(aluno1.falar())

class Professor extends Pessoa{
    constructor(nome,idade){
        super(nome,idade)
    }
    falar(){
        return super.falar() + " e tambem sou professor"
    }
}

const prof = new Professor("Beatryz", 23)

console.log(prof.falar())

class Estagiario extends Aluno{
    constructor(nome,idade,matricula){
        super(nome,idade,matricula)
    }
    falar(){
        return super.falar() + " e agora sou estagiario"
    }
}


const estag = new Estagiario("Joao",23,2618)

console.log(estag.falar())