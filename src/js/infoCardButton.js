// import { id, movieId, LOCALSTORAGE_KEY_P } from './renderMovieCardsInfo';

// const addPlaylist = () => document.querySelector('.btn-add');

// export const setButtonSettings = bool => {
//   if (bool) {
//     addPlaylist().removeEventListener('click', addToWatch);
//     addPlaylist().addEventListener('click', removeFromWatch);
//   } else {
//     addPlaylist().removeEventListener('click', removeFromWatch);
//     addPlaylist().addEventListener('click', addToWatch);
//   }
//   addPlaylist().textContent = bool ? 'REMOVE' : 'ADD';
// };

// const addToWatch = () => {
//   movieId.push(id);
//   localStorage.setItem(LOCALSTORAGE_KEY_P, JSON.stringify(movieId));
//   setButtonSettings(true);
// };

// const removeFromWatch = () => {
//   const elementIndexInArray = movieId.indexOf(id);
//   movieId.splice(elementIndexInArray, 1);
//   localStorage.setItem(LOCALSTORAGE_KEY_P, JSON.stringify(movieId));
//   setButtonSettings(false);
// };
