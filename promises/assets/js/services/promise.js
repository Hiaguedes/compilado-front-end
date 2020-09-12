export class PromisesExercicio {
    constructor(){
        
    }

    promiseA(validador){
        return new Promise((resolve,reject) => {
            setTimeout( () => {
            if(validador) resolve('Promise A foi resolvida')
            else reject('Promise A não foi resolvida')},2000);
        })
    }

    promiseB(validador){
        return new Promise((resolve,reject) => {
            setTimeout( () => {
            if(validador) resolve('Promise B foi resolvida')
            else reject('Promise B não foi resolvida')},1000);
        })
    }

    promiseC(validador){
        return new Promise((resolve,reject) => {
            setTimeout( () => {
            if(validador) resolve('Promise C foi resolvida')
            else reject('Promise C não foi resolvida')},500);
        })
    }
}