import { productTableBody } from "./table.js";
import { getProducts, setProducts } from "./localStorage.js";
import { thTitle, thShelf, thWeight, thTime } from "./table.js";

export default async function renderTable() {
  const products = getProducts();

  console.log(products);
  productTableBody.innerHTML = '';

  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.title}</td>
      <td>${product.shelf}</td>
      <td>${product.weight}</td>
      <td>${product.time}</td>
      <td> 
        <button class="btn-remove" type='button'>Удалить</button>
      </td>`;

    productTableBody.appendChild(row);
    row.querySelector('.btn-remove').addEventListener('click', () => {
      products.splice(index, 1);

      setProducts(products);

      renderTable();
    });
  });
};


  thTitle.addEventListener('click', function () {
    const products = getProducts();
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products);
    renderTable();
  });

  thShelf.addEventListener('click', function () {
    const products = getProducts();
    products.sort((a, b) => a.shelf.localeCompare(b.shelf));
    setProducts(products);
    renderTable();
  });

  thWeight.addEventListener('click', function () {
    const products = getProducts();
    products.sort((a, b) => a.weight.localeCompare(b.weight));
    setProducts(products);
    renderTable();
  });

  thTime.addEventListener('click', function () {
    const products = getProducts();
    products.sort((a, b) => a.time.localeCompare(b.time));
    setProducts(products);
    renderTable();
  });
