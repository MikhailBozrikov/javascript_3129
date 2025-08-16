const formEl = document.querySelector('.form-box');
const inpTitle = document.querySelector('#product-title');
const inpWeight = document.querySelector('#product-weight');
const inpDistance = document.querySelector('#product-distance');
const tableBody = document.querySelector('.product__tbody');
const textError = document.querySelector('.text-error');

let listData = [];

function createCostOneProduct(oneProduct) {
  const itemHeader = document.createElement('tr');
  const itemTitle = document.createElement('th');
  const itemWeight = document.createElement('th');
  const itemDistance = document.createElement('th');
  const itemPrice = document.createElement('th');

  itemTitle.textContent = oneProduct.title;
  itemWeight.textContent = oneProduct.weight;
  itemDistance.textContent = oneProduct.distance;
  itemPrice.textContent = oneProduct.price;

  itemHeader.append(itemTitle, itemWeight, itemDistance, itemPrice);
  
  return itemHeader;
}

function render(listData) {
  tableBody.innerHTML = '';

  for (const oneProduct of listData) {
    oneProduct.price = (oneProduct.weight * oneProduct.distance) / 10;
  }

  for (const oneProduct of listData) {
    tableBody.append(createCostOneProduct(oneProduct));
  }

  console.log(listData);
}
render(listData);


formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  if ((inpWeight.value < 0) == true) {
    textError.style.display = 'block';
    return
  } else {
    textError.style.display = 'none';
  }

  if ((inpDistance.value < 0) == true) {
    textError.style.display = 'block';
    return
  } else {
    textError.style.display = 'none';
  }

  listData.push({
    title: inpTitle.value,
    weight: inpWeight.value,
    distance: inpDistance.value,
  });

  render(listData);

  formEl.reset();
});