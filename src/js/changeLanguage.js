import { langValue } from './langValue';
import getRefs from './get-refs';

const refs = getRefs();

export function onClickChangeLang(evt) {
  if (evt.target.textContent === 'UA') {
    evt.target.classList.add('lang-ua-button__is-active');
    evt.target.classList.remove('lang-en-button__is-active');
    localStorage.setItem('lang', 'uk-UA');
    location.reload();
  } else if (evt.target.textContent === 'EN') {
    evt.target.classList.add('lang-en-button__is-active');
    evt.target.classList.remove('lang-ua-button__is-active');
    localStorage.setItem('lang', 'en-US');
    location.reload();
  }
}

export function getStyleCurrentLangBtn() {
  let hash = '';

  if (localStorage.getItem('lang') === 'uk-UA') {
    hash = 'ua';
    refs.langButtonUa.classList.add('lang-button__is-active');
    refs.langButtonEn.classList.remove('lang-button__is-active');
  } else {
    hash = 'en';
    refs.langButtonEn.classList.add('lang-button__is-active');
    refs.langButtonUa.classList.remove('lang-button__is-active');
  }

  for (let key in langValue) {
    let value = document.querySelector(`.lang-aside-${key}`);

    if (value) {
      value.lastChild.textContent = langValue[key][hash];
    }
  }

  for (let key in langValue) {
    let value = document.querySelector(`.lang-${key}`);

    if (value) {
      value.textContent = langValue[key][hash];
    }
  }
}
