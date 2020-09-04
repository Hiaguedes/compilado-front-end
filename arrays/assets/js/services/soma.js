const resultado = document.querySelector('.resultado');
const checkbox = document.querySelector('.checkbox');
const multiplicadorCampo= document.querySelector('.multiplicador');
const inputSoma = document.querySelector('[data-soma]')

const multiplicadorLigado = ()=>{
    let multiplicador =1;
    if (checkbox.checked){
         multiplicador = multiplicadorCampo.value;
        
    }
    return multiplicador;
}

multiplicadorCampo.addEventListener('input', ()=>{
    if (checkbox.checked){
        resultado.innerHTML  = realizarSoma(inputSoma);      
   }
});

checkbox.addEventListener('click', ()=>{
    resultado.innerHTML  = realizarSoma(inputSoma);
   
});


export const realizarSoma = input => {
    const valor = input.value;
    const valorArray= valor.split(/\D+/g).map( item => parseInt(item));
    
    if(valorArray.length > 1 && isNaN( valorArray[0])){
        valorArray.shift();
    }

    if(isNaN(valorArray[valorArray.length-1])){
        valorArray.pop();
    }

    const multiplicador = multiplicadorLigado();

    const calcularSoma = () => (total, numeroAtual) => total + numeroAtual;
    
    const soma = valorArray.reduce(calcularSoma(),0);
    
    resultado.innerHTML = multiplicador*soma;

    return multiplicador*soma;
}