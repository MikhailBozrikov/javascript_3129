const formEl = document.querySelector('.form__box');
const inputName = document.querySelector('.form__field');
const messageElement = document.querySelector('.form__text');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
  };

  const inputCode = inputName.value.toUpperCase();
  const discount = promocodeObj.gift;

  if (promocodeObj.promocode === inputCode) {
    messageElement.textContent = `Промокод применён. ${discount}`;
  } else {
    messageElement.textContent = "";
  };

  //Функция для установки cookie:
  function setCookie(name, value, days) {
    let expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/`;
  }
  setCookie(inputCode, 'value', 1);
//}
});

// Вспомогательная функция для получения данных из куки
function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=')
    acc[name] = value
    return acc
  }, {})
};

const cookie = getCookie() 
console.log(cookie);
//получае последнего ключа объекта
const lastKey = Object.keys(cookie).pop();
console.log(lastKey);
inputName.value = lastKey;