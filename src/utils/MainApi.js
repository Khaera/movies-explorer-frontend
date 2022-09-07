class MainApi {
  constructor({ url }) {
    this._url = url;
  }

  _getResponseData(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Произошла ошибка. Код ошибки: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    }).then((res) => this._getResponseData(res));
  }

  editUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email
      })
    }).then((res) => this._getResponseData(res));
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    }).then((res) => this._getResponseData(res));
  }

  createMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify(data)
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    }).then((res) => this._getResponseData(res));
  }
}

const mainApi = new MainApi({
  url: "http://localhost:3001"
});

export default mainApi;
