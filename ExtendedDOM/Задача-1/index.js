const pictureOne = document.getElementById("img-1");
const pictureTwo = document.getElementById("img-2");
const pictureThree = document.getElementById("img-3");
const pictureFour = document.getElementById("img-4");
const display = document.querySelector(".content__display");

pictureOne.onclick = function () {
  pictureFour.src = 'img/picture-1.jpg';
}

pictureTwo.onclick = function () {
  pictureFour.src = 'img/picture-2.jpg';
}

pictureThree.onclick = function () {
  pictureFour.src = 'img/picture-3.jpg';
}
