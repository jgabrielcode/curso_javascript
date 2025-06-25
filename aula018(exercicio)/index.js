function calculo(){
    
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function recebeEventoForm(evento){
        evento.preventDefault();
        
        const peso = form.querySelector('.peso');
        const alt = form.querySelector('.alt');


        const convertPeso = Number(peso.value);
        const convertAlt = Number(alt.value);
        const convertImc = convertPeso / (convertAlt * convertAlt);

        console.log(convertImc)

        resultado.style.padding = "5px"

        if(isNaN(convertPeso) || convertPeso<=0 ){
           return { peso:resultado.innerHTML = `peso invalido`,
            cor:resultado.style.backgroundColor = "rgba(240, 89, 89, 0.81)",
            cortexto:resultado.style.color = "#000"
        }
        }

        if(isNaN(convertAlt) || convertAlt <=0 ){
            return { peso:resultado.innerHTML = `altura invalido`,
                cor:resultado.style.backgroundColor = "rgba(236, 32, 32, 0.81)",
                cortexto:resultado.style.color = "#000"
            }
        } 


        if(convertImc <= 18){
            return { peso:resultado.innerHTML = `Seu IMC é ${convertImc.toPrecision(3)} (Abaixo do peso)`,
                cor:resultado.style.backgroundColor = "rgb(252, 191, 26)",
                cortexto:resultado.style.color = "#000"
            }
        } 
        else if ( convertImc >= 19 && convertImc<= 25){
            return { peso:resultado.innerHTML = `Seu IMC é ${convertImc.toPrecision(3)} (Peso normal)`,
                cor:resultado.style.backgroundColor = "rgb(52, 199, 89)",
                cortexto:resultado.style.color = "#000"
            }
        } 
        else if ( convertImc >= 26 && convertImc <= 30){
            return { peso:resultado.innerHTML = `Seu IMC é ${convertImc.toPrecision(3)} (Sobrepeso)`,
                cor:resultado.style.backgroundColor = "rgba(199, 106, 52, 0.81)",
                cortexto:resultado.style.color = "#000"
            }
        } 
        else if (convertImc >= 31 && convertImc <= 35){
            return { peso:resultado.innerHTML = `Seu IMC é ${convertImc.toPrecision(3)} (Obesidade grau 1) `,
                cor:resultado.style.backgroundColor = "rgba(250, 17, 9, 0.69)",
                cortexto:resultado.style.color = "#000"
            }
        } 
        else if (convertImc >= 36 && convertImc <= 40){
            return { peso:resultado.innerHTML = `Seu IMC é ${convertImc.toPrecision(3)} (Obesidade grau 2)`,
                cor:resultado.style.backgroundColor = "rgba(250, 17, 9, 0.81)",
                cortexto:resultado.style.color = "#000"
            }
        } 
        else if (convertImc >=41){
            return { peso:resultado.innerHTML = `Seu IMC é ${convertImc.toPrecision(3)} (Obesidade grau 3)`,
                cor:resultado.style.backgroundColor = "rgb(250, 17, 9)",
                cortexto:resultado.style.color = "#000"
            }
        } 

    }
    


form.addEventListener('submit',recebeEventoForm)



}

calculo()






