import getRefs from './get-refs';
const refs = getRefs();

export default function titleCard() {
  if (localStorage.getItem('lang') === 'en-US') {
    refs.movieCardTitle.textContent = 'Top day';
  }

  if (localStorage.getItem('lang') === 'uk-UA') {
    refs.movieCardTitle.textContent = 'Топ дня';
  }
}
