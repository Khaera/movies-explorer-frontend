import { BASE_MOVIES_URL } from "./constants";

class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }

  _getResponseData(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Произошла ошибка. Код ошибки: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then((res) => this._getResponseData(res));
  }
}

const moviesApi = new MoviesApi({
  url: BASE_MOVIES_URL
});

export default moviesApi;
