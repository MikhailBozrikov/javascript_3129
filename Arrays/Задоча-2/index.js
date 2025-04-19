/* Задача 2*/
const usersAge = [164, 157, 160, 163, 170];

const page = document.createElement("div");
const wrapper = document.createElement("div");
const title = document.createElement("h1");
const addBtn = document.createElement("button");
const filterBtn = document.createElement("button");
const listEl = document.createElement("ul"); 

page.classList.add('container');
wrapper.classList.add('wrapper');
title.classList.add('title');

addBtn.classList.add('addBtn');
filterBtn.classList.add("filterBtn");
listEl.classList.add('listEl');
title.textContent = "Рост учеников";
addBtn.textContent = "Добавить рост";
filterBtn.textContent = "Фильтровать"; 

wrapper.append(title, addBtn, filterBtn, listEl);
page.append(wrapper);
document.body.append(page);

function renderList(usersAge) {
  listEl.innerHTML = "";
  for (let i = 0; i < usersAge.length; i++) {
    const liEl = document. createElement("li");
    liEl.textContent = `${i + 1}) ${usersAge[i]}`;
    listEl. append(liEl);
  };
};

// Добавление элемента в массив
addBtn.addEventListener('click', function () {
  const item = prompt("Укажите рост ученика для добавления");
  if (item === '') {
     alert('Рост не введён');
   } else { 
    usersAge.push(item);
   };

   renderList(usersAge);
 });

//Фильтрация 
function filter(arr, minAge) {
  const result = []
  for (const item of arr) {
    if (item >= minAge) {
      result.push(item)
    };
  };
  return result;
};

filterBtn.onclick = function () {
  const minAge = prompt("Введите рост ученика");
  const result = filter(usersAge, minAge);

  renderList(result);
};

renderList(usersAge);


