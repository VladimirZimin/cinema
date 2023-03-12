import Notiflix from 'notiflix';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import singInMarKup from '../templates/singInMarKup.hbs';

const firebaseConfig = {
  apiKey: 'AIzaSyBUlJkBF61FcqfQkhbljBN1u2fLJdukGn4',
  authDomain: 'film-b8073.firebaseapp.com',
  databaseURL:
    'https://film-b8073-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'film-b8073',
  storageBucket: 'film-b8073.appspot.com',
  messagingSenderId: '528164613790',
  appId: '1:528164613790:web:5d44c285b0d3600450158f',
  measurementId: 'G-5KK78D9NBL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

const refs = {
  singInBtnAside: document.querySelector(`.aside__btn`), // кнопка singIn
  singInBtnHeader: document.querySelector(`.header__btn`), // кнопка singIn
  movieCardTitle: document.querySelector(`.movie-cards__title`), // header title /top daY...
  movieList: document.querySelector('.movie__list'), // список фильмов videos
  mainContainer: document.querySelector('.movie-cards'), // контейнер со всем содержимым
  pagination: document.querySelector('.tui-pagination'),
};

function ifUserOff() {
  refs.singInBtnHeader.textContent = `SignIn`;
  refs.singInBtnAside.textContent = `SignIn`;

  refs.singInBtnAside.addEventListener('click', onClickSingInBtn);
  refs.singInBtnHeader.addEventListener('click', onClickSingInBtn);
}

function ifUserOn() {
  refs.singInBtnHeader.textContent = `SignOut`;
  refs.singInBtnAside.textContent = `SignOut`;

  refs.singInBtnAside.addEventListener('click', onClickSingOutBtn);
  refs.singInBtnHeader.addEventListener('click', onClickSingOutBtn);
}

export function ifUser() {
  const user = localStorage.getItem(`USER`);
  if (user) {
    return JSON.parse(user);
  } else {
    return;
  }
}

export function authUser() {
  if (ifUser() === undefined) {
    return ifUserOff();
  } else {
    return ifUserOn();
  }
}

function onClickSingInBtn(evt) {
  clearMarkup();
  refs.mainContainer.insertAdjacentHTML('beforeend', singInMarKup());
  const switchers = [...document.querySelectorAll('.switcher')];
  switchers.forEach(item => {
    item.addEventListener('click', function () {
      switchers.forEach(item =>
        item.parentElement.classList.remove('is-active'),
      );
      this.parentElement.classList.add('is-active');
    });
  });

  const forms = {
    formLogin: document.querySelector(`.form-login`),
    formSignup: document.querySelector(`.form-signup`),
  };

  forms.formLogin.addEventListener(`submit`, onSubmitLogin);
  forms.formSignup.addEventListener(`submit`, onSubmitSingup);
}

function clearMarkup() {
  closeSignInForm();
  refs.movieCardTitle.textContent = '';
  refs.movieList.innerHTML = '';
  refs.pagination.innerHTML = '';
}

function closeSignInForm() {
  let forms = ``;
  forms = document.querySelector(`.forms`);
  if (forms) {
    forms.remove();
  } else {
    return;
  }
}

async function onClickSingOutBtn() {
  const out = await signOut(auth)
    .then(res => {
      localStorage.removeItem(`USER`);
      return res;
    })
    .then(() => {
      authUser();
      location.reload();
    })
    .catch(error => {});
}

async function onSubmitLogin(evt) {
  evt.preventDefault();

  const data = new FormData(this);
  const email = data.get(`email`);
  const password = data.get(`password`);

  const log = await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user.uid;
      localStorage.setItem(`USER`, JSON.stringify(user));
      return user;
    })
    .catch(function (error) {
      if (error.code === `auth/user-not-found`) {
        return Notiflix.Notify.failure(`you need to singup`);
      } else if (error.code === `auth/wrong-password`) {
        return Notiflix.Notify.failure(`wrong password`);
      } else if (error.code === `auth/network-request-failed`) {
        return Notiflix.Notify.failure(`network request failed`);
      }
      console.log(error.code);
      alert(error.message);
    });

  if (log) {
    authUser();
    location.reload();
  }
}

async function onSubmitSingup(e) {
  e.preventDefault();
  const data = new FormData(this);
  const email = data.get(`email`);
  const password = data.get(`password`);
  const passwordRepeat = data.get(`password_repeat`);

  if (password !== passwordRepeat) {
    return Notiflix.Notify.failure(`password problem`);
  }
  console.log(email, password);

  const log = await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user.uid;
      localStorage.setItem(`USER`, JSON.stringify(user));
      return user;
    })
    .catch(function (error) {
      if (error.code === `auth/weak-password`) {
        return Notiflix.Notify.failure(`password is too short`);
      } else if (error.code === `auth/email-already-in-use`) {
        return Notiflix.Notify.failure(`you are already registered`);
      }
      console.log(error.code);
      console.log(error.message);
    });
  if (log) {
    authUser();
    location.reload();
  }
}

/** 
// Создать
createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

// Войти
signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// Проверить есть ли учетная зпс
onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// Выход
signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch(error => {
    // An error happened.
  });
*/
/**
Sign in to Google
  - firebase login

Initiate your project
Run this command from your app’s root directory:
  - firebase init

When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

  - firebase deploy
 */
