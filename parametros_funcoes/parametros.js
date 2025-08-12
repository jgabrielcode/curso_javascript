
function externo(comeco){
   function interno(resto){
    return comeco
   }
   return interno;
}

const funcaoExterna = externo("ola")
console.log(funcaoExterna("ola"))