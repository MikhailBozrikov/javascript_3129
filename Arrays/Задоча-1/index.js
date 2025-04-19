/*Задача 1*/
const users = ["Мастер и Маргорита", "Гари Поттер", "За пропастью во ржи", "Властелин колец", "Дюна"];

const page = document.createElement("div");
const wrapper = document.createElement("div");
const title = document.createElement("h1");
const addBtn = document.createElement("button");
const searchBtn = document.createElement("button");
const listEl = document.createElement("ul");

page.classList.add('container');
wrapper.classList.add('wrapper');
title.classList.add('title');

addBtn.classList.add('addBtn');
searchBtn.classList.add("searchBtn");
listEl.classList.add('listEl');
title.textContent = "Домашняя библиотека";
addBtn.textContent = "Добавить книгу";
searchBtn.textContent = "Найти";

wrapper.append(title, addBtn, searchBtn, listEl);
page.append(wrapper);
document.body.append(page);

// Добавляем в DOM массив
function renderList(arr) {
  
  listEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = `${i + 1}) ${arr[i]}`;
    listEl.append(liEl);
  };
};

// Добавление элемента в массив
addBtn.addEventListener('click', function () {
  const item = prompt("Укажите название книги для добавления");
  if (!item) {
    alert('Название не введено');
    return;
  };
  users.push(item);

  renderList(users);
});

// Функция поиска
function find(arr, search) {
  let result = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      result = i;
      break;
    };
  };
  return result;
};

// Поиск элемента кликом
searchBtn.onclick = function () {
  const search = prompt("Укажите имя для поиска");
  if (!search) {
    alert('Название не введено');
    return;
  };
  const findIndex = find(users, search);

  if (findIndex > -1) {
    document.querySelector(`li:nth-child(${findIndex + 1})`).style.background = "#FFFF00"
    return;
  };
};

renderList(users);



