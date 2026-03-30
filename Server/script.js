const filmForm = document.querySelector('#film-form');
const deleteAllBtn = document.querySelector('.film__delete-all-btn');
const filterForm = document.querySelector('.filter__form'); 
const filmTableBody = document.querySelector('#film-tbody');

function handleFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(filmForm);
  const film = {
    title: data.get('title'),
    genre: data.get('genre'),
    releaseYear: data.get('releaseYear'),
    isWatched: data.get('isWatched') || false,
  };
  filmForm.reset();
  addFilm(film);
};

async function renderTable() {
  const data = new FormData(filterForm);
  const params = `?title=${data.get('title')}&genre=${data.get('genre')}&releaseYear=${data.get('releaseYear')}&isWatched=${data.get('isWatched')}`;

  const filmsResponse = await fetch(`https://sb-film.skillbox.cc/films${params}`, {
    headers: {
      email: "misha2_boz@mail.ru",
    },
  });
  const films = await filmsResponse.json();

  filmTableBody.innerHTML = '';

  films.forEach((film) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? 'Да' : 'Нет'}</td>
      <td> 
        <button class="btn-remove" type='button'>Удалить</button>
      </td>`;

    filmTableBody.appendChild(row);

    row.querySelector('.btn-remove').addEventListener('click', () => deleteFilm(film.id));
  });
};

async function addFilm(film) {
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "misha2_boz@mail.ru",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

async function deleteFilm(id) {
  await fetch(`https://sb-film.skillbox.cc/films/${id ? id : ''}`, {
    method: 'DELETE',
    headers: {
      email: "misha2_boz@mail.ru",
    },
  })
  renderTable();
}

filterForm.addEventListener('input', renderTable);
filmForm.addEventListener('submit', handleFormSubmit);
deleteAllBtn.addEventListener('click', () => deleteFilm());
renderTable();
