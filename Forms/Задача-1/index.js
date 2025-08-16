const formEl = document.querySelector('.form-box');
const inputEl = document.querySelectorAll('input');
const inputName = document.querySelector('#user-name');
const inputEmail = document.querySelector('#user-email');
const inputRadio = document.querySelectorAll('input[type="radio"]');
const inputСheckbox = document.querySelectorAll('input[type="checkbox"]');
const inputStatus = document.querySelector('#status');
const textarea = document.querySelector('#user-textarea');

const container = document.querySelector('.container');
const blockResult = document.createElement('div');
const titleResult = document.createElement('h2');

const itemName = document.createElement('p'); //Имя
const itemEmail = document.createElement('p');
const itemFloor = document.createElement('p'); //Пол
const itemStatus = document.createElement('p'); //оценка
const itemInterest = document.createElement('p'); //Интересы
const itemComment = document.createElement('p');

titleResult.textContent = 'Результаты опроса';
itemName.textContent = 'Имя пользователя: ';
itemEmail.textContent = 'Email: ';
itemFloor.textContent = 'Пол: ';
itemStatus.textContent = 'Оценка сервиса: ';
itemInterest.textContent = 'Интересы пользователя: ';
itemComment.textContent = 'Дополнительные комментарии: ';


function render() {
  itemName.append(inputName.value);
  itemEmail.append(inputEmail.value);
  itemStatus.append(inputStatus.value);

  for (let radio of inputRadio) {
    if (radio.checked) {
      console.log(radio.value);
      itemFloor.append(radio.value);
    }
  }

  for (let checkbox of inputСheckbox) {
    if (checkbox.checked) {
      console.log(checkbox.value);
      itemInterest.append(checkbox.value);
    }
  }

  itemComment.append(textarea.value);
  blockResult.append(titleResult, itemName, itemEmail, itemFloor, itemStatus, itemInterest, itemComment)
  container.append(blockResult);
}


formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  if (inputName.value == "") {
    alert('Имя не введено!');
    return
  } 
  else if (inputEmail.value == "") {
    alert('Email не введено!');
    return
  }
  else if (validateRadio() == false) {
    alert("Пол не введён!");
    return 
  }
    else if (inputStatus.value <= 1) {
    alert("Оценка сервиса не указана!");
    return 
  }
  else if (validateCheckbox() == false) {
    alert('Интересы не введены!');
    return
  } else {
    render();
    formEl.reset();
  }

  function validateRadio() {
    let checked = false;
    inputRadio.forEach(button => {
      if (button.checked) {
        checked = true;
      }
    });
    if (!checked) {
      return false;
    }
    return true;
  }

  function validateCheckbox() {
    let isChecked = false;
    inputСheckbox.forEach((checkbox) => {
      if (checkbox.checked) {
        isChecked = true;
      }
    });
    if (!isChecked) {
      return false;
    }
    return true;
  }
});

