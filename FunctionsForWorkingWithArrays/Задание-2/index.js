const formEl = document.querySelector('.form__box');
const inputName = document.querySelector('.form__field');
const messageElement = document.querySelector('.form__text');

const promocodeObj = {
  promocode: "PROM50",
  gift: "Скидка 50%"
};

function setCookie(value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `promocode=${value};expires=${expires};path=/`;
};

function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=');
    acc[name] = value;
    return acc;
  }, {});
};

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputCode = inputName.value.toUpperCase();

  if (promocodeObj.promocode === inputCode) {
    messageElement.textContent = `Промокод применён. ${promocodeObj.gift}`;
    setCookie(inputCode, 1);
   inputName.style.color = "green";
  } else {
    messageElement.textContent = "";
    inputName.style.color = "gray";
  };
});

const cookie = getCookie();

if(cookie.promocode === promocodeObj.promocode) {
   messageElement.textContent = `Промокод применён. ${promocodeObj.gift}`;
   inputName.value = promocodeObj.promocode;
   inputName.style.color = "green";
};
