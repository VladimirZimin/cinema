import MovieApiService from './api-service';
import getActiveLink from './asideNavigation';
import createPagination from './pagination';
import getRefs from './get-refs';
import renderMovieCards from './renderMovieCards';
import getMovieRaitingColor from './raitingColor';

const refs = getRefs();
const categoryMovie = new MovieApiService();

export default function onRenderPageTopWeek(evt) {
  refs.movieList.innerHTML = '';

  getTopWeekMarkup();
  getActiveLink(evt);
}

function getTopWeekMarkup() {
  refs.movieCardTitle.textContent = 'Топ недели';
  createPagination();
  categoryMovie.fetchTrendWeekMovie().then(data => {
    categoryMovie.fetchGenreMovie().then(genres => {
      renderMovieCards(data, genres);
      getMovieRaitingColor();
    });
  });
}
