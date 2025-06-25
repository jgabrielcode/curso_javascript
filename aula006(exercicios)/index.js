const nome = 'João Gabriel';
const sobreNome = 'De Freitas Costa';
let idade = 22;
let peso = 82;
let alturaEmM = 1.65;
let imc;
imc = peso/(alturaEmM * alturaEmM);
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos,pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}. `);
console.log(`${nome} nasceu em ${anoNascimento}.`);