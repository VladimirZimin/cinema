import getRefs from './get-refs';

const refs = getRefs();

export default function getActiveLink(evt) {
  if (evt.target.nodeName === 'A') {
    setActiveLink(evt.target);
    refs.hamburgerButton.classList.remove('is-active');
    refs.aside.classList.add('is-hidden');
  }
}

function setActiveLink(target) {
  const currentLink = document.querySelector('.aside__item--current');
  currentLink.classList.remove('aside__item--current');
  target.classList.add('aside__item--current');
}
