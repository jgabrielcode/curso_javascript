const dataDay = new Date();
    let diaSemana = dataDay.getDay();
    let mes = dataDay.getMonth();
    let dia = dataDay.getDate();
    let ano = dataDay.getFullYear();
    let hora = dataDay.getHours();
    let minutos = dataDay.getMinutes()

function translateday(){

    

switch(diaSemana){
    case 0: diaSemana = 'Domingo'; break;
    case 1: diaSemana = 'Segunda-feira';break;
    case 2: diaSemana = 'Terça-feira';break;
    case 3: diaSemana = 'Quarta-feira';break;
    case 4: diaSemana = 'Quinta-feira';break;
    case 5: diaSemana = 'Sexta-feira';break;
    case 6: diaSemana = 'Sabado';break;
    default: diaSemana = ''
}

switch(mes){
    case 0: mes = 'Janeiro'; break;
    case 1: mes = 'Fevereiro'; break;
    case 2: mes = 'Março'; break;
    case 3: mes = 'Abril'; break;
    case 4: mes = 'Maio'; break;
    case 5: mes = 'Junho'; break;
    case 6: mes = 'Julho'; break;
    case 7: mes = 'Agosto'; break;
    case 8: mes = 'Setembro'; break;
    case 9: mes = 'Outubro'; break;
    case 10: mes = 'Novembro'; break;
    case 11: mes = 'Dezembro'; break;
    default: mes = ''

}
document.body.querySelector('h1').innerHTML = `${diaSemana},${dia} de ${mes} de ${ano} ${hora}:${minutos}`
return;
}
translateday()

