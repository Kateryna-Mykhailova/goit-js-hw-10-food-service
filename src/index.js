import menuCardTpl from './templates/menu-card.hbs';
import menu from './menu.json';
// import './sass/main.scss';
// import './styles.css'


const menuMarkup = createMenuMarkup(menu);

function createMenuMarkup(menu){
    return menu.map(menuCardTpl).join('');
};


const menuParentEl = document.querySelector(".menu");


menuParentEl.insertAdjacentHTML("afterend", menuMarkup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const themeSwitchEl = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

const actualTheme = localStorage.getItem('Theme');


function checkActualTheme(){ 
  // const actualTheme = localStorage.getItem('Theme');
  if(!actualTheme){
    body.classList.add('light-theme');
    localStorage.setItem('Theme', 'LIGHT');
   }
   return
};
checkActualTheme();

themeSwitchEl.addEventListener('change', onThemeSwitchElCLick);{


}
  function onThemeSwitchElCLick(evt){ 
    evt.preventDefault();
    

    if (actualTheme === 'DARK'){
      evt.target.checked === true
    };
// if(localStorage.getItem('Theme') === 'LIGHT'){
  if(evt.target.checked){
    console.log(evt.target.checked);
              body.classList.remove('light-theme'),
              body.classList.add('dark-theme');
              localStorage.setItem('Theme', 'DARK');
            }
// else(localStorage.getItem('Theme') === 'DARK')
else
{
          body.classList.remove('dark-theme'),
          body.classList.add('light-theme'),
          localStorage.setItem('Theme', 'LIGHT');
        };

      }

function CheckCheckboxOn(){
if (actualTheme === 'DARK'){
  themeSwitchEl.checked === true
}

};
CheckCheckboxOn();


   

 