'use strict';

const list = document.querySelector('.list');
const lastItem = document.querySelector('.list:last-child');

const generateItem = text => {
  const elem = document.createElement('li');
  elem.classList.add('list__item');
  elem.textContent = text;
  return elem;
}

const addItem = elem => {
  list.append(generateItem(elem));
}

const foo = () => {
  addItem(prompt('type text'));
}

foo()
