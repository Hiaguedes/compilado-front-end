import initRaiz from '../js/Templates/raiz';
import initMenu1 from '../js/Templates/menu1';
import initMenu2 from '../js/Templates/menu2';
import initMenu3 from '../js/Templates/menu3';
import initMenu4 from '../js/Templates/menu4';

const main = document.querySelector('[data-main]');
const rotas = {
    "/": initRaiz,
    "/menu1": initMenu1,
    "/menu2": initMenu2,
    "/menu3": initMenu3,
    "/menu4": initMenu4,
};

const navegarPara = (pathname) => {
    window.history.pushState({},pathname,window.location.origin + pathname);//atualiza url com o path vindo dos butões via html
    main.innerHTML="";//limpa div com data-main
    rotas[window.location.pathname](main);//com o obejetos atualiza o texto do main, window.location.pathname dá o "/menu1", ou "menu2" e por aí vai
}

window.onpopstate = ()=> { // função que executa a mesma coisa que o navegarPara só que com o botão de voltar do navegador
    main.innerHTML="";
    rotas[window.location.pathname](main);
}

window.navegarPara=navegarPara; //bota a função no escopo global pq não sei porque não entrou

export { navegarPara };