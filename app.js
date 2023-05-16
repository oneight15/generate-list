'use strict';

const list = document.querySelector('.list');
const lastItem = document.querySelector('.list:last-child');
const allItems = document.querySelectorAll('.list__item');

const askStr = () => {
  const str = prompt('type text');
  return str;
}

const generateItem = () => {
  const elem = document.createElement('li');
  elem.classList.add('list__item');
  elem.textContent = askStr();
  return elem;
}



