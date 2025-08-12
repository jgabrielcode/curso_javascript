const numeros = [10,20,30,40,50]
const [primeiro,segundo,terceiro, ...resto] = numeros;
console.log(primeiro,segundo,terceiro,resto)

const pessoa = {
    nome:'João',
    idade: 22,
    cidade:'Santana de Parnaiba',
    //profissao:'Desenvolvedor Junior'
};
const{ nome,idade,cidade: localidade,profissao = 'desempregado' } = pessoa;
console.log(nome,idade,localidade,profissao);

const produto = {
    nome1:'Teclado Mecanico',
    preco: 300,
    estoque: 50
}

function detalhesProduto(obj){
    const { nome1, preco} = obj
    console.log(`Produto: ${nome1},Preço ${preco}`)
}

detalhesProduto(produto)

const cores =  [['vermelho','azul'],['verde','amarelo'],['preto','branco']];

const [ [,cor1],[cor2],[cor3]] = cores
console.log(cor1,cor2,cor3)

const usuario = {
    nomeu:'Maria',
    idadeu:30
}
const { nomeu , idadeu, email = 'não informado'} = usuario
console.log(nomeu,idadeu,email)

const cars = [['opala','gol','uno'],['fox','geta','jeep'],['palio','celta','space-fox']];
const [,[wlks2,wlks3],[,,wlks4]] = cars
console.log(wlks2,wlks3,wlks4)