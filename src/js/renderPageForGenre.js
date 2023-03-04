import MovieApiService from './api-service';
import getActiveLink from './asideNavigation';
import createPagination from './pagination';
import getRefs from './get-refs';
import renderMovieCards from './renderMovieCards';
import getMovieRaitingColor from './raitingColor';

const refs = getRefs();
const categoryMovie = new MovieApiService();

export default function onRenderPageForGenres(evt) {
  refs.movieList.innerHTML = '';

  let pageName = '';
  let name = '';

  console.log(evt.target.nodeName);

  if (evt.target.nodeName === 'A') {
    name = evt.target.textContent;
    pageName = name.slice(36, name.length);
    refs.movieCardTitle.textContent = `${pageName}`;
    const id = evt.target.dataset.id;

    getMoviesForGenres(id);
    getActiveLink(evt);
  }
}

function getMoviesForGenres(id) {
  createPagination();

  categoryMovie.fetchMoviesForGenres(id).then(data => {
    categoryMovie.fetchGenreMovie().then(genres => {
      renderMovieCards(data, genres);
      getMovieRaitingColor();
    });
  });
}
