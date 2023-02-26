import getRefs from './get-refs';
import templatesCard from '../templates/templatesCard.hbs';

const refs = getRefs();

export default function renderMovieCards(data, genres) {
  correctValue(data, genres);

  refs.movieList.insertAdjacentHTML('beforeend', templatesCard(data));
}

function correctValue(data, genres) {
  data.map(item => {
    if (item.title) {
      item.title = item.title;
    } else {
      item.title = item.name;
    }

    item.vote_average = item.vote_average.toFixed(1);

    if (item.release_date) {
      item.release_date = item.release_date.slice(0, 4);
    } else {
      item.release_date = item.first_air_date.slice(0, 4);
    }

    genres.map(genreId => {
      item.genre_ids.map((genre, index) => {
        if (genre === genreId.id) {
          item.genre_ids.splice(index, 1, genreId.name);
        }
      });
    });
  });
}
