class MovieApi {
  constructor({ url }) {
    this._url = url;
  }

  _getResponseData(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Произошла ошибка. Код ошибки: ${res.status}`);
  }

  getAllMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then((res) => this._getResponseData(res));
  }
}

const movieApi = new MovieApi({
  url: "https://api.nomoreparties.co"
});

export default movieApi;
