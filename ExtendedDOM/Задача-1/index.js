const picture = document.querySelectorAll(".gallery__img");
const display = document.querySelector(".content__display");

picture.forEach((el) => {
  el.addEventListener('click', () => {
    display.innerHTML = `<img src="${el.src}" alt="" width="1488" height="1000">`;
  });
});
