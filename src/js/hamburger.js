import getRefs from './get-refs';

const refs = getRefs();

export default function onClickHamburgerButton() {
  console.log('click');

  refs.hamburgerButton.classList.contains('is-active')
    ? refs.hamburgerButton.classList.remove('is-active')
    : refs.hamburgerButton.classList.add('is-active');

  refs.aside.classList.contains('is-hidden')
    ? refs.aside.classList.remove('is-hidden')
    : refs.aside.classList.add('is-hidden');
}
