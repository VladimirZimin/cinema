import MovieApiService from './api-service';
import getRefs from './get-refs';
import templatesAsideMenu from '../templates/templatesAsideMenu.hbs';

const refs = getRefs();
const categoryMovie = new MovieApiService();
// const genreTV = [
//   { id: 10759, name: 'Action & Adventure' },
//   { id: 10762, name: 'Kids' },
//   { id: 10763, name: 'News' },
//   { id: 10764, name: 'Reality' },
//   { id: 10765, name: 'Sci-Fi & Fantasy' },
//   { id: 10766, name: 'Soap' },
//   { id: 10767, name: 'Talk' },
//   { id: 10768, name: 'War & Politics' },
// ];

export function onClickAsideLinkButton(evt) {
  refs.movieList.style.display = 'grid';
}

export function renderAsideMenuList() {
  categoryMovie.fetchGenreMovie().then(genres => {
    // const allGenres = genres.concat(genreTV);

    refs.asideList.insertAdjacentHTML('beforeend', templatesAsideMenu(genres));
  });
}
