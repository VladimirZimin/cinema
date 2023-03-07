import getRefs from './get-refs';

const refs = getRefs();

export default function onClickChangeTheme(evt) {
  evt.preventDefault();

  refs.themeBtn.classList.toggle('light');
  console.log(evt.target);

  if (refs.themeBtn.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  addDarkClassToHTML();
}

function addDarkClassToHTML() {
  if (localStorage.getItem('theme') === 'light') {
    document.querySelector('body').classList.add('light');
    document.querySelector('.config__link span').textContent = 'light_mode';
  } else {
    document.querySelector('body').classList.remove('light');
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
