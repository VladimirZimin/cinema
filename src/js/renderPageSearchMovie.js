import MovieApiService from './api-service';
import renderMovieCards from './renderMovieCards';
import createPagination from './pagination';
import getMovieRaitingColor from './raitingColor';
import getRefs from './get-refs';
import Notiflix from 'notiflix';

const refs = getRefs();
const categoryMovie = new MovieApiService();

export default function renderPagaSearchMovie(evt) {
  evt.preventDefault();

  categoryMovie._searchQuery = evt.currentTarget.elements.query.value.trim();

  if (categoryMovie._searchQuery === '') {
    Notiflix.Notify.failure('Вы ничего не ввели!');
    return;
  }

  refs.movieList.innerHTML = '';

  getSearchQuery();
  refs.searchForm.reset();
}

export function getSearchQuery() {
  refs.movieCardTitle.textContent = `Вы искали: ${categoryMovie._searchQuery}`;
  createPagination();
  categoryMovie.fetchSearchMovie().then(data => {
    categoryMovie.fetchGenreMovie().then(genres => {
      renderMovieCards(data, genres);
      getMovieRaitingColor();
    });
  });
}
