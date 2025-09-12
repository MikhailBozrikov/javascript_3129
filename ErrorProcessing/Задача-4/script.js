const divNetBlock = document.querySelector('#err-box');

const checkNetConnection = async () => {
  try {

    try {
      const responseStartTime = new Date().getTime();
      const response = await fetch('https://sb-film.skillbox.cc/ping', {
        method: 'POST'
      });

      if (response.ok) {
        divNetBlock.classList.remove('err-box');  
      };

      const responseEndTime = new Date().getTime();
      const responseDifferenceTime = responseEndTime - responseStartTime;

      if (responseDifferenceTime > 500 && responseDifferenceTime < 2500) {
        divNetBlock.classList.add('err-slowly-box');
      } else {
        divNetBlock.classList.remove('err-slowly-box');
     };

    } catch (error) {
      throw error;
    };

  } catch (error) {
    divNetBlock.classList.remove('err-slowly-box');
    divNetBlock.classList.add('err-box');

    throw error;
  };
};

const interval = setInterval(async () => {
  await checkNetConnection();
}, 5000);
