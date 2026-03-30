export const form = document.createElement('div');
form.classList.add('product-card');
form.innerHTML = `
<form class="product-form" id="product-form">
<h2 class="product-title">Добавить запись</h2>
  <input class="product-inp" type="text" id="title" name="title" required placeholder="Название">
  <input class="product-inp" type="text" id="shelf" name="shelf" required placeholder="Полка">
  <input class="product-inp" type="number" id="weight" name="weight" required placeholder="Вес">
  <input class="product-inp" type="date" id="time" name="time" required>
  <button class="submit" type="submit">Добавить запись</button>
</form>
`;

document.body.append(form);

export const titleInput = form.querySelector('#title');
export const shelfInput = form.querySelector('#shelf');
export const weightInput = form.querySelector('#weight');
export const timeInput = form.querySelector('#time');
export const submitBtn = form.querySelector('.submit');
export const productForm = form.querySelector('#product-form');
