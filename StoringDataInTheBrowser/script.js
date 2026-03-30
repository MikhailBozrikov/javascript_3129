const titleInput = document.querySelector('#title');
const genreInput = document.querySelector('#genre'); //жанр
const releaseYearInput = document.querySelector('#releaseYear');
const isWatchedInput = document.querySelector('#isWatched');
const filmForm = document.querySelector('#film-form');
const filmTableBody = document.querySelector('#film-tbody');
const submitBtn = document.querySelector('.submit');
const controls = document.querySelector('.controls');
const selectEl = document.querySelector('.select-list');
const sortBtn = document.querySelector('.sort-btn');

let editedIndex = -1;

const setFilms = (films) => localStorage.setItem('films', JSON.stringify(films));
const getFilms = () => JSON.parse(localStorage.getItem('films')) || [];

function handleFormSubmit(e) {
  e.preventDefault();

  const film = {
    title: titleInput.value,
    genre: genreInput.value,
    releaseYear: releaseYearInput.value,
    isWatched: isWatchedInput.checked,
  };
  const films = getFilms();

  if (editedIndex > -1) {
    films[editedIndex] = film;
  } else {
    films.push(film);
  }

  setFilms(films);
  renderTable();
  handleFormReset();
};

function renderTable() {
  const films = getFilms();

  filmTableBody.innerHTML = '';

  films.forEach((film, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? 'Да' : 'Нет'}</td>
      <td>
        <button class="btn-redact" type='button'>Редактировать</button>
        <button class="btn-remove" type='button'>Удалить</button>
      </td>`;

    filmTableBody.appendChild(row);

    row.querySelector('.btn-redact').addEventListener('click', () => {
      titleInput.value = film.title;
      genreInput.value = film.genre;
      releaseYearInput.value = film.releaseYear;
      isWatchedInput.value = film.isWatched;
      editedIndex = index;
      submitBtn.style.display = 'none';
      controls.style.display = 'block';
    });

    row.querySelector('.btn-remove').addEventListener('click', () => {
      films.splice(index, 1);
      setFilms(films);
      renderTable();
    });
  });
};

const handleFormReset = () => {
  filmForm.reset();
  editedIndex = -1; 
  submitBtn.style.display = null;
  controls.style.display = null;
};

const handleSortClik = () => {
  const films = getFilms();
  const sortValue = selectEl.value;

  if (sortValue === 'title') {
    films.sort((a, b) => a.title.localeCompare(b.title));
  };

  if (sortValue === 'genre') {
    films.sort((a, b) => a.genre.localeCompare(b.genre));
  };

  if (sortValue === 'releaseYear') {
    films.sort((a, b) => a.releaseYear.localeCompare(b.releaseYear));
  };

  setFilms(films);
  renderTable();
};

filmForm.addEventListener('submit', handleFormSubmit);
filmForm.addEventListener('reset', handleFormReset);
sortBtn.addEventListener('click', handleSortClik);
renderTable();
