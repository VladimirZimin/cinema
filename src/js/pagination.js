import Pagination from 'tui-pagination';
import MovieApiService from './api-service';
import renderMovieCards from './renderMovieCards';
import getRefs from './get-refs';

const refs = getRefs();
const categoryMovie = new MovieApiService();

export default function createPagination() {
  const pagination = new Pagination(document.getElementById('pagination'), {
    totalItems: 20000,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    page: 1,
  });

  pagination.on('afterMove', event => {
    refs.movieList.innerHTML = '';
    categoryMovie.page = event.page;

    console.log('hi');

    categoryMovie.fetchTrendDayMovie().then(data => {
      categoryMovie
        .fetchGenreMovie()
        .then(genres => renderMovieCards(data, genres));
    });
  });
}
