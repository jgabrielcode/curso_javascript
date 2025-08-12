function CriaCalculadora(){

        this.display = document.querySelector('#inValor');

        this.inicia = ()=>{
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = ()=>{
            this.display.addEventListener('keyup', (e) =>{
                if(e.key === "Enter"){
                    this.realizaConta()
                }
            })
        };

        this.realizaConta = ()=>{
            let conta = this.display.value

            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta invalida');
                    return;
                }

                this.display.value = String(conta)
            }catch(e){
                alert('Conta Invalida')
                return;
            }
        };

        this.clearDisplay = ()=>{
            this.display.value = ""
        };

        this.apagaUm = ()=>{
            this.display.value = this.display.value.slice(0, -1);
        };


        this.cliqueBotoes = ()=>{

            document.addEventListener('click',function(e) {
                const el = e.target
    

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }

            }.bind(this));
        };

        this.btnParaDisplay = (valor)=>{
            this.display.value += valor
            this.display.focus()
        }
    };


const calculadora = new CriaCalculadora();

calculadora.inicia()