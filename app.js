'use strict';

const list = document.querySelector('.list');

const askStr = () => {
  const str = prompt('type text');
  return str;
};

const generateItem = (str) => {
  const elem = document.createElement('li');
  elem.classList.add('list__item');
  elem.textContent = str;
  return elem;
};

const addItem = (str) => {
  const item = generateItem(str);
  list.append(item);
};

const generateList = () => {
  const str = askStr();

  switch (str) {
    case '':
      break;

    case 'del':
      list.lastChild.remove();
      break;

    case 'clear':
      list.textContent = '';
      break;

    case 'exit':
    case null:
      return;

    default:
      addItem(str);
      break;
  }

  generateList();
};

generateList();
