function verificaChute(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>valor invalido</div>'
        return
    }
    if(maiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: O numero secreto precisa estar entre 
        ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero===numeroSereto){
        document.body.innerHTML=`
        <h2>Você Acertou</h2>
        <h3>O numero Secreto era ${numeroSereto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero>numeroSereto){
        elementoChute.innerHTML += `
        <div>O Número Secreto e Menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    }else{
        elementoChute.innerHTML += `
        <div>O Número Secreto e Maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function maiorOuMenor(numero) {
    return numero > maiorValor|| numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})