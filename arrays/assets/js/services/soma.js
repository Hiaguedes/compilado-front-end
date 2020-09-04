const resultado = document.querySelector('.resultado');
const checkbox = document.querySelector('.checkbox');
const multiplicadorCampo= document.querySelector('.multiplicador');
let multiplicador=1;

const multiplicadorLigado = ()=>{
    if (checkbox.checked){
        const multiplicador = multiplicadorCampo.value;
        return multiplicador;
    }else {
        multiplicador =1;
    }
}


export const realizarSoma = input => {
    const valor = input.value;
    const valorArray= valor.split(/\D+/g).map( item => parseInt(item));
    
    if(valorArray.length > 1 && isNaN( valorArray[0])){
        valorArray.shift();
    }

    if(isNaN(valorArray[valorArray.length-1])){
        valorArray.pop();
    }

    (multiplicadorLigado() == undefined) ? multiplicador == 1 : multiplicador = multiplicadorLigado();

    const calcularSoma = () => (total, numeroAtual) => total + numeroAtual;
    
    const soma = valorArray.reduce(calcularSoma(),0);
    
    if(valorArray.length==1 && isNaN( valorArray[0])){
        resultado.innerHTML = 0;
    }

    resultado.innerHTML = multiplicador*soma;
}