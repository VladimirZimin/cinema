export default function getMovieRaitingColor() {
  const movieRating = document.querySelectorAll('.movie__rating');
  // const args = Array.from(movieRating);
  const array = [...movieRating];

  array.map(item => {
    let value = Number(item.innerText);

    if (value <= 7.5 && value >= 6.1) {
      item.classList.add('movie__rating--good');
    } else if (value < 6.1) {
      item.classList.add('movie__rating--bad');
    }
    item.classList.add('movie__rating--great');
  });
}
