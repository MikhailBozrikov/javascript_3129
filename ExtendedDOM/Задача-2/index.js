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

addBtn.addEventListener('click', function () {
  const item = document.createElement('li');
  item.textContent = "Добавить элемент списка";
  listEl.append(item);
});

deleteBtn.addEventListener('click', function () {
  if (listEl.lastChild) {
    listEl.lastChild.remove();
  }
});
