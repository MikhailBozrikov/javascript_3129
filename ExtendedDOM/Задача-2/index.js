const users = [];

const page = document.createElement("div");
const wrapper = document.createElement("div");
const addBtn = document.createElement("button");
const deleteBtn = document.createElement("button");
const listEl = document.createElement("ul");

page.classList.add('container');
wrapper.classList.add('wrapper');

addBtn.classList.add('addBtn');
deleteBtn.classList.add("searchBtn");
listEl.classList.add('listEl');
addBtn.textContent = "Добавить элемент";
deleteBtn.textContent = "Удалить элемент";

wrapper.append(listEl, addBtn, deleteBtn);
page.append(wrapper);
document.body.append(page);

// Добавляем в DOM массив
function renderList(arr) {
  listEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = `${arr[i]}`;
    listEl.append(liEl);
  };
};

// Добавление элемента в массив
addBtn.addEventListener('click', function () {
  const item = "Добавить элемент списка"
  users.push(item);

  renderList(users);
});

// Удаление элемента в массив
deleteBtn.onclick = function () {
  document.querySelector('li').remove();

  users.splice(0, 1);
};

renderList(users);

