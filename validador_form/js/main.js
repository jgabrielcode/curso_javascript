// instancia do form
const frm = document.querySelector("form")
// entrada dos dados do form
const inNome = frm.querySelector("#inNome")
const inSobre = frm.querySelector("#inSobre")
const inCpf = frm.querySelector("#inCpf")
const inUser = frm.querySelector("#inUser")
const inPassword = frm.querySelector("#inPassword")
const inConfirmPassword = frm.querySelector("#inConfirmPassword")
// icone de confirmação
const iconConf = document.querySelector("#iconConfirm")

// class  cadastro de pessoas
class CadatroPessoa{
    constructor(nome,sobrenome,cpf,usuario,senha,confSenha){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.usuario = usuario
        this.senha = senha
        this.confSenha = confSenha
    }
// validação dos campos vazios do formulario
     campoVazio(){
//  Estrutura condicional encadeada para validar todos os campos, caso alguma 
//  seja verdadeira ela para e retorna false, se não retorna true (que todods os campos são validos)

         if(this.nome.value.length == 0){
            alert(`Preencha todos os campos`)
            return false
         }else if(this.sobrenome.value.length == 0){
            alert(`Preencha todos os campos`)
            return false 
         }else if(this.cpf.value.length == 0){
            alert(`Preencha todos os campos`)
            return false
         }else if(this.usuario.value.length == 0){
            alert(`Preencha todos os campos`)
            return false
         }else if(this.senha.value.length == 0){
            alert(`Preencha todos os campos`)
            return false
         }else if(this.confSenha.value.length == 0){
            alert(`Preencha todos os campos`)
            return false
         }else{
            return true
         }
        }
// validador de campo de CPF
        validarCpf(){
               // Pega o valor do input, remove tudo que não é número
               //  e transforma em um array de caracteres
               const arrCpf = Array.from(this.cpf.value.replace(/\D+/g,""))
               //retira os dois ultimos digitos
               const eliminaDigitos = arrCpf.slice(0,-2)
               //variavel contadora 
               let contador = eliminaDigitos.length + 1
               //gerador do primeiro digito
               const somaDigito1 = eliminaDigitos.map((acc)=>{
               const mult = acc * contador // multiplica acumulador por contador a cada indice do array
               contador-- //decrementa contador
                  return mult 
               }).reduce((acc,item)=>{
                  return acc+=item //retorna a soma de cada indice com o proximo
               },0)
               //calculo primeiro digito
               let contaDigito1 = 11 - (somaDigito1 % 11)

               if(contaDigito1 > 9){
                  contaDigito1 = 0
               }
               //adiciona o primeiro digito ao array
               eliminaDigitos.push(contaDigito1)
               //variavel contadora 
               let contador2 = eliminaDigitos.length + 1
               //gerador segundo digito
               const somaDigito2 = eliminaDigitos.map((acc)=>{
               const mult = acc * contador2 // multiplica acumulador por contador a cada indice do array
                  contador2-- //decrementa contador
                  return mult
               }).reduce((acc,item)=>{
                  return acc+=item //retorna a soma de  cada indice com o proximo
               },0)
               //calculo segundo digito 
               let contaDigito2 = 11 - (somaDigito2 % 11)

               if(contaDigito2 > 9){
                  contaDigito2 = 0
               }
               //adiciona o segundo digito ao array
               eliminaDigitos.push(contaDigito2)
               //retorna uma string com o metodo join que é separa por uma string vazia
               return eliminaDigitos.join("")
            }
      //validar igualdade do cpf de entrada com oque foi gerado   
      //se for diferente alerta o usuario
        validarIgualdadeCpf(){
            if(this.validarCpf() !== this.cpf.value.replace(/\D+/g,"")){
               alert(`CPF invalido`)
               this.cpf.focus()
               return false //retorna false se nao for igual
            }
               return true //  retorna true se for igual
    }
    // validador campo usuario
          validarUsuario(){
              const usuario = this.usuario.value
              //verifica se tem simbolos
              const simbolos = usuario.match(/\W|_/g)
              //caso exista simbolos , alerta o usuario e retorna false
              if(simbolos){
               alert(`Usuario so pode conter letras e/ou numeros`)
               this.usuario.focus()
               return false
              }
              // valida o tamanho do valor do campo usuario
              if(usuario.length  < 3 || usuario.length > 12){
               alert(`Usuario deve conter entre 3 e 12 caracteres`)
               this.usuario.focus()
               return false
              }

               return true // retorna true se pasasar por todas as validações
              }
              //validar campo de senha 
              validacaoSenha(){
               const senha = this.senha.value
               const confSenha = this.confSenha.value
               //verifica tamanho da senha
               if(senha.length < 6 || senha.length > 12){
                  alert(`Senha deve conter entre 6 e 12 caracteres`)
                  this.senha.focus()
                  return false
               }
               //verifica se campo senha e igual a campo de confirmação de senha
               if(senha !== confSenha){
                  alert(`Por favor, verifique: as senhas precisam ser iguais.`)
                  this.senha.focus()
                  return false
               }
                return true // se passar por todas as validacoes retorna true
              }
              // metodo de envio do formulario
             submitForm(e){
               e.preventDefault()
               //se a função retornar false, !false = true → o if entra e faz return.
               if(!this.campoVazio()) return // chamando a funcão com () 
               if(!this.validarUsuario()) return // chamando a funcão com () 
               if(!this.validacaoSenha()) return // chamando a funcão com () 
               if(!this.validarIgualdadeCpf()) return // chamando a funcão com () 

               // Se passar por todos os campos esconde o form e exibe um icone de confirmação
               frm.style.display = "none"
               iconConf.style.display = "flex"
              }
          
}
 
//Evento de envio do form
frm.addEventListener('submit',(e)=>{
   //instancia do meu class Cadastro Pessoa
   const p1 = new CadatroPessoa(inNome,inSobre,inCpf,inUser,inPassword,inConfirmPassword)
   //chamada do metodo de envio de form
   p1.submitForm(e)
   
})

//evendo de reload associado a um link para atualizar a pagina a cada cadstro confirmado
const newRegister = document.querySelector("#newRegister")
newRegister.addEventListener("click",()=>{
   window.location.reload()
})



