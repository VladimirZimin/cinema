export default function getRefs() {
  return {
    hamburgerButton: document.querySelector('.hamburger-js'),
    movieList: document.querySelector('.movie__list'),
    topWeek: document.querySelector('[data-name="topWeek"]'),
    topDay: document.querySelector('[data-name="topDay"]'),
    movieCardTitle: document.querySelector('.movie-cards__title'),
    aside: document.querySelector('.aside'),
    asideLink: document.querySelector('.aside__link'),
    asideCategoryItem: document.querySelector('.aside-category__item'),
    asideList: document.querySelector('.aside__list'),
    asideLinkCurrent: document.querySelector('.aside__link--current'),
    pagination: document.querySelector('#pagination'),
    searchForm: document.querySelector('.form'),
  };
}
