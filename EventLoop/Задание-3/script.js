const catsContainer = document.querySelector('.cats');
const dogsContainer = document.querySelector('.dogs');

const cats = ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg'];
const dogs = ['img/dog1.jpg', 'img/dog2.jpg', 'img/dog3.jpg'];

const getTimeout = () => Math.floor(Math.random() * 3) + 2;
console.log(getTimeout());

const renderImages = (arr, container) => {
  const div = document.createElement('div');
  arr.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    div.append(img);
  });
  container.prepend(div);
};

function progress(time, arr, container) {
  return new Promise((resolve) => {
    const progressBar = document.createElement('div');
    progressBar.classList.add('progressBar');
    const timeElement = document.createElement('div');
    let currentTime = 0;
    timeElement.textContent = `${currentTime}s`;
    container.append(progressBar, timeElement);

    progressBar.style.transition = `transform ${time}s linear`;

    setTimeout(() => {
      progressBar.style.transform = 'scaleX(1)';
    }, 50);

    const timeInterval = setInterval(() => {
      currentTime += 1;
      timeElement.textContent = `${currentTime}s`;
    }, 1000);

    setTimeout(() => {
      clearInterval(timeInterval);
      renderImages(arr, container);
      resolve();
    }, time * 1000);
  });
};

progress(getTimeout(), cats, catsContainer).then(() => progress(getTimeout(), dogs, dogsContainer));