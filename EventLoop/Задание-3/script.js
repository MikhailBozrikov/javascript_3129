const container = document.createElement('div');
const boxOne = document.createElement('div');
const boxTwo = document.createElement('div');
const progressBarDog = document.createElement('div');
const progressBarCat = document.createElement('div');

progressBarDog.classList.add("progress-bar");
progressBarCat.classList.add("progress-bar");
container.classList.add("container");
boxOne.classList.add("box");
boxTwo.classList.add("box");

const fetchCatImages = new Promise(() => {
  const imagesCats = [
    'img/cat1.jpg',
    'img/cat2.jpg',
    'img/cat3.jpg'
  ];

  setInterval(() => {
    const timeout = Math.floor(Math.random() * 3000) + 2000;
    console.log(timeout);

    function progress(time) {
      progressBarCat.style.opacity = '1';
      progressBarCat.style.width = `620px`;
      progressBarCat.style.transition = `width ${time}s`;

      setTimeout(() => {
        progressBarCat.style.width = '0px';
        progressBarCat.style.opacity = '0';
      }, timeout);
    };
    progress(1);

    setTimeout(() => {
      imagesCats.forEach(image => {
        const img = document.createElement('img');
        img.classList.add("img");
        img.src = image;
        boxOne.appendChild(img);
        setTimeout(() => {
          img.style.display = "none";
        }, timeout - 1500);
      }, timeout);
    }, 1000);
  }, 5000);
});

fetchCatImages.then((imgs) => console.log('изображения кошек', imgs.map((img) => img)));

const fetchDogImages = new Promise(() => {
  const imagesDogs = [
    'img/dog1.jpg',
    'img/dog2.jpg',
    'img/dog3.jpg'
  ];

  setInterval(() => {
    const timeout = Math.floor(Math.random() * 3000) + 2000;
    console.log(timeout);

    function progress(time) {
      progressBarDog.style.opacity = '1';
      progressBarDog.style.width = `620px`;
      progressBarDog.style.transition = `width ${time}s`;

      setTimeout(() => {
        progressBarDog.style.width = '0px';
        progressBarDog.style.opacity = '0';
      }, timeout);
    };
    progress(1);

    setTimeout(() => {
      imagesDogs.forEach(image => {
        const img = document.createElement('img');
        img.classList.add("img");
        img.src = image;
        boxTwo.appendChild(img);
        setTimeout(() => {
          img.style.display = "none";
        }, timeout - 1500);
      }, timeout);
    }, 1000);
  }, 5000);
});

fetchDogImages.then((imgs) => console.log('изображения собак', imgs.map((img) => img)));

container.append( boxOne, progressBarCat, boxTwo, progressBarDog);
document.body.append(container);

