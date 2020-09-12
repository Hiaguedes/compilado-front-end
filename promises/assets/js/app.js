import {PromisesExercicio} from './services/promise.js';

const promises = new PromisesExercicio();
const textSelector = document.querySelector('.container__texto');

//promises.promiseA(true).then(e=> console.log(e))

const createParagraph = () => document.createElement('p');

const firstParagraph = createParagraph();
const secondParagraph = createParagraph();

const interators = [promises.promiseA(true)
                    ,promises.promiseB(true)
                    ,promises.promiseC(true)];

const write = (res,paragraph) => {
    paragraph.innerHTML += res + `<br>`;
    textSelector.appendChild(paragraph);
}

interators.forEach(interator => {
    interator
    .then( res => {
        write(res,firstParagraph);
    })
    .catch(res => {
        write(res,firstParagraph);
    });
});

Promise.all(interators)
    .then( res => {
        write(res,secondParagraph);
    })
    .catch(res => {
        write(res,secondParagraph);
    })


