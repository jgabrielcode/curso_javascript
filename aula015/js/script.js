  function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const lista = []

    function recebeEventoForm(evento){
        evento.preventDefault();

       const filme = form.querySelector('.ffav');
       const serie = form.querySelector('.sfav');
       const ator = form.querySelector('.ator');
       const atriz = form.querySelector('.atriz');
       
        lista.push({
            filme: filme.value,
            serie: serie.value,
            ator: ator.value,
            atriz: atriz.value
        })

    
       console.log(lista)
       resultado.innerHTML += `<p>${filme.value} ${serie.value} ${ator.value} ${atriz.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm)
    
  }
  meuEscopo()