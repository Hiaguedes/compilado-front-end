const resultado = document.querySelector('.resultado');

export const realizarSoma = input => {
    const valor = input.value;
    const valorArray= valor.split(/\D+/g).map( item => parseInt(item));
    
    if(valorArray.length > 1 && isNaN( valorArray[0])){
        valorArray.shift();
    }

    const calcularSoma = () => (total, numeroAtual) => total + numeroAtual;
    
    const soma = valorArray.reduce(calcularSoma(),0);
    //console.log(valorArray);
    if(!isNaN(soma)){
    resultado.innerHTML = soma;
    }

    if(valorArray.length==1 && isNaN( valorArray[0])){
        resultado.innerHTML = 0;
    }
}