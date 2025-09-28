const container = document.createElement('div');
const boxOne = document.createElement('div');
const boxTwo = document.createElement('div');
container.classList.add("container");
boxOne.classList.add("box");
boxTwo.classList.add("box");

const imagesCats = [
  'img/cat1.jpg',
  'img/cat2.jpg',
  'img/cat3.jpg'
];

const imagesDogs = [
  'img/dog1.jpg',
  'img/dog2.jpg',
  'img/dog3.jpg'
];

const fetchCatImages = new Promise((resolve) => {
  resolve(imagesCats);
});

fetchCatImages.then((imgs) => console.log('изображения кошек', imgs.map((img) => img)));

setInterval(() => {
  const timeout = Math.floor(Math.random() * 3000) + 2000;

  imagesCats.forEach(image => {
    const img = document.createElement('img');
    img.classList.add("img");
    img.src = image;
    boxOne.appendChild(img);

    setTimeout(() => {
      img.style.display = "none";
    }, timeout);
  }, timeout);
}, 5000);

const fetchDogImages = new Promise((resolve) => {
  resolve(imagesDogs);
});

fetchDogImages.then((imgs) => console.log('изображения кошек', imgs.map((img) => img)));

setInterval(() => {
  const timeout = Math.floor(Math.random() * 3000) + 2000;

  imagesDogs.forEach(image => {
    const img = document.createElement('img');
    img.classList.add("img");
    img.src = image;
    boxTwo.appendChild(img);

    setTimeout(() => {
      img.style.display = "none";
    }, timeout);
  }, timeout);
}, 5000);

container.append(boxOne, boxTwo);
document.body.append(container);

