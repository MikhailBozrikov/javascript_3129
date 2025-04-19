/*Задача 3*/
const usersAge = ["Книга", "Арбуз", "Кофе", "Маккароны", "Молоко", "Сахар", "Яблоки"];

const page = document.createElement("div");
const wrapper = document.createElement("div");
const title = document.createElement("h1");
const addBtn = document.createElement("button");
const listEl = document.createElement("ul");

page.classList.add('container');
wrapper.classList.add('wrapper');
title.classList.add('title');

addBtn.classList.add('addBtn');
listEl.classList.add('listEl');
title.textContent = "Карзина покупателя";
addBtn.textContent = "Добавить товар";

wrapper.append(title, addBtn, listEl);
page.append(wrapper);
document.body.append(page);

function renderList(arr) {
  listEl.innerHTML = "";
  sort(arr);
  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = `${i + 1}) ${arr[i]}`;
    listEl.append(liEl);
  };
};

// Добавление элемента в массив
addBtn.addEventListener('click', function () {
  const item = prompt("Укажите имя для добавления");
  if (item === '') {
    alert('Имя не введено');
  } else {
    usersAge.push(item);
  };
  renderList(sort(usersAge));
});

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      };
    };
  };
  return arr;
};

renderList(usersAge);