function getModalWindow() {
setTimeout(() => {
  document.getElementById("my-modal").classList.add("open")
}, 2000);
  //находим кнопку по id, прикрепляем действие клик
  document.getElementById("close-my-modal-btn").addEventListener("click", function () {
    //находим модальное окно, прикрепляем закрытие
    document.getElementById("my-modal").classList.remove("open")
  })
}
getModalWindow();

const giftArr = [
  {
    id: 1,
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "/img/discount-one.svg"  
  },
  {
    id: 2,
    title: "Скидка 10% на всё!",
    icon: "/img/discount-two.svg" 
  },
  {
    id: 3,
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "/img/discount-three.svg"  
  },
  {
    id: 4,
    title: "Бесплатная доставка для вас!",
    icon: "/img/discount-four.svg"  
  },
  {
    id: 5,
    title: "Сегодня день больших скидок!",
    icon: "/img/discount-five.svg"  
  }
];

//Случайное число
function rondomFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let number = (rondomFromInterval(1, 5));
console.log(number);

//Находим элемент в массиве
let resultItem = giftArr.find(obj => obj.id === number);
console.log(resultItem);

//Отресовка в DOM
const result = document.querySelector('.result');

result.innerHTML =
`<div class="modal__block">
    <img class="modal__img" width="100" src="${resultItem.icon}" alt="${resultItem.title}">   
    <h2 class="modal__title">${resultItem.title}</h2>
</div>`;

