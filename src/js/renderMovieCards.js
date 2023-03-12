import showCardInfo from './renderMovieCardsInfo';
import getRefs from './get-refs';
import templatesCard from '../templates/templatesCard.hbs';

const refs = getRefs();
const genreTV = [
  { id: 10759, name: 'Action & Adventure' },
  { id: 10762, name: 'Kids' },
  { id: 10763, name: 'News' },
  { id: 10764, name: 'Reality' },
  { id: 10765, name: 'Sci-Fi & Fantasy' },
  { id: 10766, name: 'Soap' },
  { id: 10767, name: 'Talk' },
  { id: 10768, name: 'War & Politics' },
];

export default function renderMovieCards(data, genres) {
  correctValue(data, genres);

  refs.movieList.insertAdjacentHTML('beforeend', templatesCard(data));

  refs.movieList.addEventListener('click', showCardInfo);
}

function correctValue(data, genres) {
  data.map(item => {
    item.title ? (item.title = item.title) : (item.title = item.name);
    item.vote_average = item.vote_average.toFixed(1);

    if (item.release_date) {
      item.release_date = item.release_date.slice(0, 4);
    } else if (item.first_air_date) {
      item.release_date = item.first_air_date.slice(0, 4);
    } else {
      item.release_date = 'нет данных';
    }

    // item.release_date
    //   ? (item.release_date = item.release_date.slice(0, 4))
    //   : (item.release_date = item.first_air_date.slice(0, 4));

    genres.concat(genreTV).map(genreId => {
      item.genre_ids.map((genre, index) => {
        if (genre === genreId.id) {
          item.genre_ids.splice(index, 1, genreId.name);
        }
      });
    });
  });
}
