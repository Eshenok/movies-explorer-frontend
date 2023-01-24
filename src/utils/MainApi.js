class MainApi {
  constructor (options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(res => this._getResponseData(res))
  }

  createUser(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      email,
      password,
      name,})
    }).then(res => this._getResponseData(res))
  }

  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => this._getResponseData(res));
  }

  updateUser(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        email
      })
    }).then(res => this._getResponseData(res))
  }

  signOut() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => this._getResponseData(res))
  }

  /*Работа с фильмами*/

  putLike() {

  }
}

export default new MainApi({
  baseUrl: 'http://localhost:2020',
});
