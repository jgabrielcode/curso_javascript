class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    falar(){
        console.log(`Olá ${this.name}`)
    }

}


const p1 = new Person("joao", 23)

p1.falar()
