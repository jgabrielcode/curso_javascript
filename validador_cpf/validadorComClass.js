class ValidadorCpf{
    constructor(cpf){
        this.cpf = cpf
    }
    validar(){
        const arrCpf = Array.from(this.cpf.replace(/\D+/g,""))
        
        const eliminaDigitos = arrCpf.slice(0,-2)
        let contador = eliminaDigitos.length + 1
            const somaDigito1 = eliminaDigitos.map((acc)=>{
            const mult = acc * contador
            contador--
            return mult
            }).reduce((acc,item)=>{
            return acc+=item
            },0)

    let contaDigito1 = 11 - (somaDigito1 % 11)

    if(contaDigito1 > 9){
        contaDigito1 = 0
    }

    eliminaDigitos.push(contaDigito1)
    let contador2 = eliminaDigitos.length + 1

    const somaDigito2 = eliminaDigitos.map((acc)=>{
        const mult = acc * contador2
        contador2--
        return mult
    }).reduce((acc,item)=>{
        return acc+=item
    },0)

    let contaDigito2 = 11 - (somaDigito2 % 11)

    if(contaDigito2 > 9){
        contaDigito2 = 0
    }


    eliminaDigitos.push(contaDigito2)

    return eliminaDigitos.join("")

    }

    validarIgualdade(){
        if(this.validar() == this.cpf.replace(/\D+/g,"")){
            return `CPF valido`
        }else{
            return `CPF Invalido`
        }
    }


       
        
    }


const cpf = new ValidadorCpf("070.987.720-03")

console.log(cpf.validarIgualdade())