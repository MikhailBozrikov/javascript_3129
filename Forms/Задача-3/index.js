const formEl = document.querySelector('.form-box');
const inpEl = document.querySelector('#text');
const selectEl = document.querySelector('#color');
const cardEl = document.querySelector('#card');

cardEl.textContent = "БАНКОВСКАЯ КАРТА";

inpEl.addEventListener("input", function () {
  cardEl.textContent = inpEl.value;
});

inpEl.addEventListener("focus", function () {
  inpEl.style.backgroundColor = 'gold';
});

inpEl.addEventListener("blur", function () {
  inpEl.style.backgroundColor = 'transparent';
});

selectEl.addEventListener("change", function () {
  cardEl.style.backgroundColor = selectEl.value;
});

