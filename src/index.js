import menuElementTpl from './menu.hbs';
import menuElements from './menu.json';
import './styles.css';

console.log(menuElementTpl(menuElements[1]));

const menuRef = document.querySelector('.js-menu');

const markUpMenu = makeMarkupMenu(menuElements);

menuRef.insertAdjacentHTML('beforeend', markUpMenu);

function makeMarkupMenu(menuElements) {
  return menuElementTpl(menuElements);
}
