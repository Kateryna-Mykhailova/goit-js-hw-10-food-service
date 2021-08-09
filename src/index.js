import menuCardTpl from './templates/menu-card.hbs';
import menu from './menu.json';
import './sass/main.scss';
console.log(menuCardTpl);

// const menuMarkup = createMenuMarkup(menu);
// function createMenuMarkup(menu){
//     return menu.map(el => menuCardTpl(menu)).join('');
// };
// console.log(menuMarkup);
const menuMarkup = createMenuMarkup(menu);

function createMenuMarkup(menu){
    return menu.map(menuCardTpl).join('');
};
console.log(menuMarkup);

const menuParentEl = document.querySelector(".menu");
console.log(menuParentEl);

menuParentEl.insertAdjacentHTML("afterend", menuMarkup);