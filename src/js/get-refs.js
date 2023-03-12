export default function getRefs() {
  return {
    body: document.querySelector('body'),
    hamburgerButton: document.querySelector('.hamburger-js'),
    movieList: document.querySelector('.movie__list'),
    movieItem: document.querySelector('.movie__item'),
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
    langButtonUa: document.querySelector('.lang-button--ua'),
    langButtonEn: document.querySelector('.lang-button--en'),
    langButton: document.querySelector('.lang-button__item'),
    themeItem: document.querySelector('.theme__item'),
    themeBtn: document.querySelector('.lang-aside-theme'),
    trailerLink: document.querySelector('.modal__trailer-link'),
  };
}
