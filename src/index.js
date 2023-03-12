import MovieApiService from './js/api-service';
import onClickHamburgerButton from './js/hamburger';
import getRefs from './js/get-refs';
import { onRenderPageTopDay, getTopDayMarkup } from './js/renderPageTopDay';
import onRenderPageTopWeek from './js/renderPageTopWeek';
import { onClickAsideLinkButton, renderAsideMenuList } from './js/asideMenu';
import onRenderPageForGenres from './js/renderPageForGenre';
import renderPagaSearchMovie from './js/renderPageSearchMovie';
import { onClickChangeLang, getStyleCurrentLangBtn } from './js/changeLanguage';
import titleCard from './js/titleCard';
import { addDarkClassToHTML, onClickChangeTheme } from './js/changeTheme';
import showCardInfo from './js/renderMovieCardsInfo';
import { authUser } from './js/firebase';
import AOS from 'aos';
import './js/playlist';
import 'aos/dist/aos.css';
import './sass/main.scss';

const refs = getRefs();

/////////////////////////////////////////////////////////

const categoryMovie = new MovieApiService();

console.log(categoryMovie.fetchTrendDayMovie());
console.log(categoryMovie.fetchTrendWeekMovie());
console.log(categoryMovie.fetchGenreMovie());
console.log(categoryMovie.fetchSearchMovie());

console.log('lang:', categoryMovie.lang);

///////////////// renderAsideMenuList //////////////////////////////////////

renderAsideMenuList();

///////////////// title //////////////////////////////////////

titleCard();

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

///////////////// Theme //////////////////////////////////////

addDarkClassToHTML();

///////////////// Listener //////////////////////////////////////

refs.hamburgerButton.addEventListener('click', onClickHamburgerButton);
refs.topWeek.addEventListener('click', onRenderPageTopWeek);
refs.topDay.addEventListener('click', onRenderPageTopDay);
refs.asideList.addEventListener('click', onRenderPageForGenres);
refs.aside.addEventListener('click', onClickAsideLinkButton);
refs.searchForm.addEventListener('submit', renderPagaSearchMovie);
refs.langButtonUa.addEventListener('click', onClickChangeLang);
refs.langButtonEn.addEventListener('click', onClickChangeLang);
refs.themeBtn.addEventListener('click', onClickChangeTheme);

///////////////// getStyleCurrentLangBtn //////////////////////////////////////

getStyleCurrentLangBtn();

AOS.init();

// showCardInfo();

authUser();
