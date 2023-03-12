import MovieApiService from './api-service';
import Notiflix from 'notiflix';
import { ifUser } from './firebase';
import renderMovieCards from './renderMovieCards';

const refs = {
  favoritesItem: document.querySelector(`.favorites__item`),
};

const savedWatched = localStorage.getItem('playlist');
const parsedWatched = JSON.parse(savedWatched);

const categoryMovie = new MovieApiService();

async function fetchMovie(movies) {
  const promiceArray = movies.map(async idMovie => {
    categoryMovie.movieId = idMovie;
    const movie = await categoryMovie.fetchSearchMovieById(id);
    return movie;
  });
  return promiceArray;
}

refs.favoritesItem.addEventListener('click', onClickWatched);

async function onClickWatched() {
  if (!ifUser()) {
    // pageSubTitle.classList.add('visually-hidden');
    // pagination.classList.add('visually-hidden');
    // videos.innerHTML = '';
    // pageTitle.classList.remove('main-header__search-info');
    // pageTitle.classList.remove('main-header__search-accent');
    // pageTitle.textContent = 'Playlist';

    Notiflix.Notify.info(`You need to LogIn`, {
      position: 'right-top',
      distance: '30px',
      width: '300px',
      timeout: 2000,
    });
    return;
  } else {
    const array = await fetchMovie(parsedWatched);

    const allPromise = await Promise.all(array);
    // films.innerHTML = '';
    // pageSubTitle.classList.add('visually-hidden');
    // pagination.classList.add('visually-hidden');
    // videos.innerHTML = '';
    // pageTitle.classList.remove('main-header__search-info');
    // pageTitle.classList.remove('main-header__search-accent');
    // pageTitle.textContent = 'Watched';

    renderMovieCards(allPromise);
  }
}
