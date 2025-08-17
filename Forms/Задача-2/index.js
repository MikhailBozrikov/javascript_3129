const formEl = document.querySelector('.form-box');
const inpTitle = document.querySelector('#product-title');
const inpWeight = document.querySelector('#product-weight');
const inpDistance = document.querySelector('#product-distance');
const tableBody = document.querySelector('.product__tbody');
const textError = document.querySelector('.text-error');


formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  textError.style.display = 'none';

  if (inpWeight.value < 0 || inpDistance.value < 0) {
    textError.style.display = 'block';
    return;
  }

  const tr = document.createElement("tr");

  tr.innerHTML = `
  <td>${inpTitle.value}</td>
  <td>${inpWeight.value}</td>
  <td>${inpDistance.value}</td>
  <td>${(inpWeight.value * inpDistance.value) / 10} руб.</td>
  `;

  tableBody.append(tr);

  formEl.reset();
});