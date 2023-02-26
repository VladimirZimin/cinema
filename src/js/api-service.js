import axios from 'axios';

export default class MovieApiService {
  constructor() {
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.API_KEY = '060719e53fa713f801520e62e92850bd';

    this._searchQuery = '';
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  get searchQuery() {
    return this._searchQuery;
  }

  set searchQuery(newQuery) {
    this._searchQuery = newQuery;
  }

  fetchTrendDayMovie = async () => {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/trending/all/day?api_key=${this.API_KEY}&page=${this.page}`,
      );

      // this.incrementPage();

      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  fetchTrendWeekMovie = async () => {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/trending/all/week?api_key=${this.API_KEY}&page=${this.page}`,
      );

      // this.incrementPage();

      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  fetchGenreMovie = async () => {
    const response = await axios.get(
      `${this.BASE_URL}/genre/movie/list?api_key=${this.API_KEY}`,
    );

    return response.data.genres;
  };
}
