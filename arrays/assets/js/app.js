import {validadores} from './services/input.js';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    input.addEventListener('input', ()=> {
        const tipo=input.getAttribute('data-tipo');

        if(validadores[tipo]){
            validadores[tipo](input);
        }
    })
})
