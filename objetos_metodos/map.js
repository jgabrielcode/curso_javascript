const person1 = {
    nome: 'Joao',
    idede: 23,
    cidade: `Santana de Parnaiba`
}
const person2 = {
    nome: 'Beatryz',
    idede: 24,
    cidade: `Jandira`
}
const meuMapa = new Map()

meuMapa.set('pessoa1',
    {...person1}
)
meuMapa.set('pessoa2',
    {...person2}
)

meuMapa.set('pessoa2', {nome:'Theo', idade: 6})

console.log(meuMapa)
console.log(`--------------------------`)
console.log(meuMapa.size)

// const nome = "Joao Gabriel"

// const arrNome = Array.from(nome)
// for(let letra of arrNome){
//     console.log(letra)
// }
