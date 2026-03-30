const result = document.querySelector('.result');
const myModal = document.querySelector('#my-modal');
const closeDutton = document.querySelector('#close-my-modal-btn');

const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "./img/discount-one.svg"
  },
  {
    title: "Скидка 10% на всё!",
    icon: "./img/discount-two.svg"
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "./img/discount-three.svg"
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "./img/discount-four.svg"
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "./img/discount-five.svg"
  }
];

const randomFromInterval = () => Math.floor(Math.random() * giftArr.length);

const showModal = () => {
  const gift = giftArr[randomFromInterval()];
  result.innerHTML =
    `<div class="modal__block">
    <img class="modal__img" width="100" src="${gift.icon}">   
    <h2 class="modal__title">${gift.title}</h2>
</div>`;

  myModal.classList.add('open');
  closeDutton.addEventListener('click', function () {
    myModal.classList.remove('open');
  })
}

setTimeout(showModal, 300);




