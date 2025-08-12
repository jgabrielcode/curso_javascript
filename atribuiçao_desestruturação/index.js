 let a = 'a';
 let b = 'b';
 let c = 'c';

 [a,b,c] = [1,2,3]

 console.log(a,b,c)

 const numeros = [100,200,300,400]
 const [num1, num2, ...resto] = numeros
 console.log(num1,num2,resto)
  const arr = [1, 2, 3, 4, 5]
  const [w, , r ,, y] = arr
  console.log(w,r,y)

 const arrs =   [ ['joao', 'bia','beatryz'],['julio', 'uilma', 'theo']]
 const [,[nomes1, ...resto1]] = arrs    

  console.log(nomes1,resto1 )

  //OBJETOS
  const pessoas = {
     nome:'joao',
     idade:22,
     nome2:'beatryz',
     idade2:23
  }
  const {nome2: nomes, idade2:idades} = pessoas;
  console.log(nomes,idades)

  const anoCarros = {
     gol:2000,
     geta:2016,
     fusca:1980  }
  const {gol,geta,fusca} = anoCarros
  console.log(gol,geta,fusca)//2000 2016 1980
  const ycars = {
     celta:2008,
     corsa:2002,
     golf:2021,
     byd:2025,
  }
  const mcars = {
     car1:'byd',
     car2:'chevrolet',
     car3:'chevrolet',
     car4:'wolks'
  }
  const cars = {
     ...mcars,...ycars
  }
  console.log(cars)//car1: 'byd',car2: 'chevrolet',car3: 'chevrolet',car4: 'wolks',celta: 2008 corsa: 2002,golf: 2021,byd: 2025

const pessoa = {
    nome:'beatryz',
    idade:23
}
const {nome,idade = 'maior de 18'} = pessoa
console.log(nome,idade)