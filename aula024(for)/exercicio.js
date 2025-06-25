const container = document.querySelector(".container") 

const div = document.createElement('div')
container.appendChild(div)

const elementos = [
    {tag:'p', texto: 'Frase 1'},
    {tag:'div', texto: 'Frase 2'},
    {tag:'footer', texto: 'Frase 3'},
    {tag:'section', texto: 'Frase 4'}
    
]

const tam = elementos.length

for(let i=0;i<tam;i++){
    const {tag,texto} = elementos[i]
    const elemento = document.createElement(tag)
    elemento.innerText = texto
    
    div.appendChild(elemento)
}