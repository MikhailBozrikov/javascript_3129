const formEl = document.querySelector('.form-box');
const result = document.querySelector('.result');
    
formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = new FormData(formEl);

  result.innerHTML =
    `<h2>Результаты опроса</h2>
    <p>Имя пользователя: ${data.get("user-name")}</p>
    <p>Email: ${data.get("user-email")}</p>
    <p>Пол: ${data.get("gender") || 'Не указано'}</p>
    <p>Оценка сервиса: ${data.get("range")}</p>
    <p>Интересы пользователя: ${data.getAll("interest") .join(', ') || 'Не указано'}</p>
    <p>Дополнительные коментарии: ${data.get("text")}</p>`
});


