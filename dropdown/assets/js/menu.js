const option4 = document.querySelector('.dropdown__menu');
const persistDropdown = document.querySelector('.dropdown__box');
let clickElement = false;

option4.addEventListener('click', (e) => {
    e.stopPropagation();
    if(!clickElement && e.target){
        persistDropdown.classList.add('dropdown--show');
        clickElement = true;
    }else{
        persistDropdown.classList.remove('dropdown--show');
        clickElement = false;
    }
});

document.addEventListener('click', () => {
    persistDropdown.classList.remove('dropdown--show');
    clickElement = false;
});