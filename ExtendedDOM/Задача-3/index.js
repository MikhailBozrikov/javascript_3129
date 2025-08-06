const usersAge = [100, 500, 250, 750, 300];

function renderList(arr) {
  listEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = `цена: ${arr[i]} рублей`;
    listEl.append(liEl);
  }
}

const listEl = document.createElement("ul");
document.body.append(listEl);

function sortMore(arr) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        const result = arr;
        renderList(arr);
      }
    }
  }
  return arr;
}

const sortBtnMore = document.createElement("button");
sortBtnMore.textContent = "Сортировка по возростанию";
document.body.append(sortBtnMore);

sortBtnMore.onclick = function () {
  const result = sortMore(usersAge);
  renderList(result);
}

function sortLess(arr) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        const result = arr;
        renderList(arr);
      }
    }
  }
  return arr;
}

const sortBtnLess = document.createElement("button");
sortBtnLess.textContent = "Сортировка по убыванию";
document.body.append(sortBtnLess);

sortBtnLess.onclick = function () {
  const result = sortLess(usersAge);
  renderList(result);
}

renderList(usersAge);