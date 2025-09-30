const catsContainer = document.createElement('div');
const dogsContainer = document.createElement('div');
const container = document.createElement('div');
container.classList.add("container");
catsContainer.classList.add("box");
dogsContainer.classList.add("box");

const cats = ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg'];
const dogs = ['img/dog1.jpg', 'img/dog2.jpg', 'img/dog3.jpg'];

const getTimeout = () => Math.floor(Math.random() * 3) + 4;
console.log(getTimeout());

function progress(time) {
  const progressBar = document.createElement('div');
  progressBar.style.height = `20px`;
  progressBar.style.width = `0px`;
  progressBar.style.backgroundColor = `blueviolet`;

  setTimeout(() => {
    progressBar.style.width = `600px`;
    progressBar.style.transition = `width ${time}s`;
  }, 100);

  return progressBar;
};

const fetchImages = (arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, getTimeout() + 1000);
  });
};

const renderImages = (arr, container) => {
  const div = document.createElement('div');
  div.classList.add('div');

  arr.forEach((src) => {
    const img = document.createElement('img');
    img.classList.add("img");
    img.src = src;

    div.append(img);
  });

  setTimeout(() => {
    container.append(div);
  }, 2000);

  container.append(progress(2));
};

fetchImages(cats).then((arr) => {
  renderImages(arr, catsContainer)
});


fetchImages(dogs).then((arr) => {
  renderImages(arr, dogsContainer)
});

container.append(catsContainer, dogsContainer);
document.body.append(container);

