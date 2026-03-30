const listEl = document.createElement("ul");
document.body.append(listEl);
const sortBtnMore = document.createElement("button");
sortBtnMore.textContent = "Сортировка по возростанию";
document.body.append(sortBtnMore);
const sortBtnLess = document.createElement("button");
sortBtnLess.textContent = "Сортировка по убыванию";
document.body.append(sortBtnLess);

const usersAge = [100, 500, 250, 750, 300];

function renderList() {
  listEl.innerHTML = "";
  for (let i = 0; i < usersAge.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = `${usersAge[i]}`;
    listEl.append(liEl);
  }
}

sortBtnMore.addEventListener('click', function () {
  usersAge.sort((a, b) => a - b);
  renderList();
});

sortBtnLess.addEventListener('click', function () {
  usersAge.sort((a, b) => b - a);
  renderList();
});

renderList(usersAge);