const menorValor = 1;
const maiorValor = 1000;
const numeroSereto=gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*maiorValor+1);
}

console.log('numero secreto:',numeroSereto);

const elementoMenor=document.getElementById('menor-valor');
elementoMenor.innerHTML=menorValor;

const elementoMaior=document.getElementById('maior-valor');
elementoMaior.innerHTML=maiorValor;