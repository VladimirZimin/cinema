export default function getRefs() {
  return {
    hamburgerButton: document.querySelector('.hamburger-js'),
    aside: document.querySelector('.aside'),
    movieList: document.querySelector('.movie__list'),
    topWeek: document.querySelector('[data-name="topWeek"]'),
    topDay: document.querySelector('[data-name="topDay"]'),
    movieCardTitle: document.querySelector('.movie-cards__title'),
    asideLink: document.querySelector('.aside__link'),
    asideLinkCurrent: document.querySelector('.aside__link--current'),
    pagination: document.querySelector('#pagination'),
  };
}
