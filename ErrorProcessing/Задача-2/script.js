function greeting() {
  const username = prompt("Введите имя пользователя");
  if (!username) {
    throw new Error('Имя не введено');   
  };
};

try {
  greeting();
} catch (error) {
  alert(error.message);
};
