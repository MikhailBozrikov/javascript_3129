import {form} from "./form.js";

export const table = document.createElement('div');
table.classList.add('product-table');
table.innerHTML = `
  <div class="product-block">
    <h2 class="product-name">Склад</h2>
    <button class="product-link">Добавить запись</button>
  </div>
<table id="product-table">
<thead>
  <tr>
    <th class="th-title">Название</th>
    <th class="th-shelf">Полка</th>
    <th class="th-weight">Вес</th>
    <th class="th-time">Время хранения</th>
    <th></th>
  </tr>
</thead>
<tbody id="product-tbody">
 
</tbody>
</table>
`;

document.body.append(table);

export const btnLink = table.querySelector('.product-link');
export const productTableBody = table.querySelector('#product-tbody');
export const thTitle = table.querySelector('.th-title');
export const thShelf = table.querySelector('.th-shelf');
export const thWeight = table.querySelector('.th-weight');
export const thTime = table.querySelector('.th-time');

btnLink.addEventListener('click', function () {
  form.style.display = 'block';
  table.style.display = 'none';
});
