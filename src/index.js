import MovieApiService from './js/api-service';
import Pagination from 'tui-pagination';
import onClickHamburgerButton from './js/hamburger';
import getRefs from './js/get-refs';
import renderMovieCards from './js/renderMovieCards';
import { onRenderPageTopDay, getTopDayMarkup } from './js/renderPageTopDay';
import onRenderPageTopWeek from './js/renderPageTopWeek';
import onPaginationClick from './js/pagination';
import { onClickAsideLinkButton, renderAsideMenuList } from './js/asideMenu';
import onRenderPageForGenres from './js/renderPageForGenre';
import renderPagaSearchMovie from './js/renderPageSearchMovie';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './sass/main.scss';

const refs = getRefs();

/////////////////////////////////////////////////////////

const categoryMovie = new MovieApiService();

console.log(categoryMovie.fetchTrendDayMovie());
console.log(categoryMovie.fetchTrendWeekMovie());
console.log(categoryMovie.fetchGenreMovie());

///////////////// renderAsideMenuList //////////////////////////////////////

renderAsideMenuList();

///////////////// TrendWeek //////////////////////////////////////

// categoryMovie.fetchTrendWeekMovie().then(data => {
//   categoryMovie
//     .fetchGenreMovie()
//     .then(genres => renderMovieCards(data, genres));
// });

///////////////// TrendDay //////////////////////////////////////

getTopDayMarkup();

// categoryMovie.fetchTrendDayMovie().then(data => {
//   categoryMovie
//     .fetchGenreMovie()
//     .then(genres => renderMovieCards(data, genres));
// });

///////////////// Raiting //////////////////////////////////////
///////////////// Listener //////////////////////////////////////

refs.hamburgerButton.addEventListener('click', onClickHamburgerButton);
refs.topWeek.addEventListener('click', onRenderPageTopWeek);
refs.topDay.addEventListener('click', onRenderPageTopDay);
refs.asideList.addEventListener('click', onRenderPageForGenres);
refs.aside.addEventListener('click', onClickAsideLinkButton);
refs.searchForm.addEventListener('submit', renderPagaSearchMovie);

AOS.init();
