const catsContainer = document.querySelector('.cats');
const dogsContainer = document.querySelector('.dogs');

const cats = ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg'];
const dogs = ['img/dog1.jpg', 'img/dog2.jpg', 'img/dog3.jpg'];

const getTimeout = () => Math.floor(Math.random() * 3) + 2;
console.log(getTimeout());

const fetchImages = (arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, getTimeout() * 1000);
  });
};

const renderImages = (arr, container) => {
  const div = document.createElement('div');
  arr.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    div.append(img);
  });
  container.append(div);
};

fetchImages(cats).then((arr) => renderImages(arr, catsContainer));
fetchImages(dogs).then((arr) => renderImages(arr, dogsContainer));
