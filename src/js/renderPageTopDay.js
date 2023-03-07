import MovieApiService from './api-service';
import getActiveLink from './asideNavigation';
import getRefs from './get-refs';
import renderMovieCards from './renderMovieCards';
import createPagination from './pagination';
import getMovieRaitingColor from './raitingColor';

const refs = getRefs();
const categoryMovie = new MovieApiService();

export function onRenderPageTopDay(evt) {
  refs.movieList.innerHTML = '';

  getTopDayMarkup();
  getActiveLink(evt);
}

export function getTopDayMarkup() {
  // refs.movieCardTitle.textContent = 'Топ дня';
  createPagination();
  categoryMovie.fetchTrendDayMovie().then(data => {
    categoryMovie.fetchGenreMovie().then(genres => {
      renderMovieCards(data, genres);
      getMovieRaitingColor();
    });
  });
}
