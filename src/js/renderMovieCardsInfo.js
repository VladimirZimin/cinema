import MovieApiService from './api-service';
import templatesCardInfo from '../templates/templatesCardInfo.hbs';
import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';
import { ifUser } from './firebase';
import { getStyleCurrentLangBtn } from './changeLanguage';
import 'basicLightbox/src/styles/main.scss';
import { setButtonSettings } from './infoCardButton';

const categoryMovie = new MovieApiService();
const addPlaylist = () => document.querySelector('.btn-add');

const getFromLocalStorage = key =>
  localStorage.getItem(key) === null
    ? []
    : JSON.parse(localStorage.getItem(key));

export let id = 0;
export let movieId = [];
export const LOCALSTORAGE_KEY_P = 'playlist';

export default function showCardInfo(evt) {
  if (evt.target.nodeName === 'IMG') {
    const id = evt.target.dataset.id;

    categoryMovie.fetchSearchMovieById(id).then(data => {
      const instance = basicLightbox.create(templatesCardInfo(data), {
        onShow: instance => {
          instance.element().querySelector('.modal__close-btn').onclick =
            instance.close;
        },
      });
      instance.show();
      getStyleCurrentLangBtn();

      categoryMovie.fetchTrailersOfMovie(data.imdb_id).then(data => {
        document
          .querySelector('.modal__trailer-link')
          .setAttribute('href', data.data.linkEmbed);
      });
    });
  }

  if (!ifUser()) {
    addPlaylist().addEventListener('click', () =>
      Notiflix.Notify.info(`You need to LogIn`, {
        position: 'right-top',
        distance: '30px',
        width: '300px',
        timeout: 1000,
      }),
    );
    return;
  } else {
    movieId = getFromLocalStorage(LOCALSTORAGE_KEY_P);

    const findInLocalStorage = (id, arr) => arr.includes(id);
    const isMovieInLocalStorage = findInLocalStorage(id, movieId);

    // setButtonSettings(isMovieInLocalStorage);
  }
}
