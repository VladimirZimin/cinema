import getRefs from './get-refs';

const refs = getRefs();

export function onClickChangeTheme(evt) {
  evt.preventDefault();

  if (refs.body.classList.contains('light')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  refs.hamburgerButton.classList.remove('is-active');
  refs.movieList.style.display = 'grid';
  refs.aside.classList.add('is-hidden');

  addDarkClassToHTML();
}

export function addDarkClassToHTML() {
  if (localStorage.getItem('theme') === 'light') {
    refs.body.classList.add('light');
    document.querySelector('.config__link span').textContent = 'light_mode';
  } else {
    refs.body.classList.remove('light');
    document.querySelector('.config__link span').textContent = 'dark_mode';
  }
}

// const options = {
//   bottom: '30px', // default: '32px'
//   right: 'unset', // default: '32px'
//   left: '32px', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#1f1d2b', // default: '#fff'
//   buttonColorDark: '#1f1d2b', // default: '#100f2c'
//   buttonColorLight: '#ffffff', // default: '#fff'
//   saveInCookies: false, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true, // default: true
// };

// const darkmode = new Darkmode(options);
// darkmode.showWidget();
