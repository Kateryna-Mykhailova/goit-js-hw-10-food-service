// import './styles.css';
import menuCardTpl from './templates/menu-card.hbs';
import menu from './menu.json';

// import './sass/main.scss'

const menuMarkup = createMenuMarkup(menu);

function createMenuMarkup(menu){
    return menu.map(menuCardTpl).join('');
};


const menuParentEl = document.querySelector(".menu");
menuParentEl.insertAdjacentHTML("beforeend", menuMarkup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const themeSwitchEl = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

const actualTheme = localStorage.getItem('Theme');


function checkActualTheme(){ 
 
  if(!actualTheme){
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', 'LIGHT');
   }
   return
};
checkActualTheme();



function CheckCheckboxOn(){
  if (actualTheme === 'DARK'){

    themeSwitchEl.checked = true;
    body.classList.add(Theme.DARK);
  };
};
  CheckCheckboxOn();
  

themeSwitchEl.addEventListener('change', onThemeSwitchElCLick);

  function onThemeSwitchElCLick(evt){ 
    evt.preventDefault();

  if(evt.target.checked){
    
              body.classList.remove(Theme.LIGHT),
              body.classList.add(Theme.DARK);
              localStorage.setItem('Theme', 'DARK');
            }

  else{
          body.classList.remove(Theme.DARK),
          body.classList.add(Theme.LIGHT),
          localStorage.setItem('Theme', 'LIGHT');
        };

      };



   