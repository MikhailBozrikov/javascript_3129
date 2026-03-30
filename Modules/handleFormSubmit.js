import { titleInput, shelfInput, weightInput, timeInput, productForm, form } from "./form.js";
import { table } from "./table.js";
import { getProducts, setProducts } from "./localStorage.js";

export default async function handleFormSubmit(e) {
  e.preventDefault();

  const renderTable = await import("./renderTable.js");

  let editedIndex = -1;

  const product = {
    title: titleInput.value,
    shelf: shelfInput.value,
    weight: weightInput.value,
    time: timeInput.value,
  };

  const products = getProducts();

  if (editedIndex > -1) {
    products[editedIndex] = product;
  } else {
    products.push(product);
  };

  setProducts(products);

  renderTable.default();

  productForm.reset();

  form.style.display = 'none';
  table.style.display = 'block';
};

