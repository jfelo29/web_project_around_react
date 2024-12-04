class Api {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getUserInfo() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
  getCards() {
    return fetch(this.baseUrl + "/cards", {
      method: "GET",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }

  editUser(data) {
    return fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
  createcard(data) {
    return fetch(this.baseUrl + "/cards", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
  delateCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }

  likeCard(cardId) {
    console.log(this.headers);
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
  dislikeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }

  profileImage(image) {
    return fetch(this.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(image),
    }).then((response) => {
      if (response.ok) return response.json();

      return Promise.reject("Something went wrong");
    });
  }
}
const baseUrl = "https://around-api.es.tripleten-services.com/v1";
const headers = {
  "Content-Type": "application/json",
  authorization: "cd55be07-1650-4110-8dca-83b71e15bea1",
};
const api = new Api(baseUrl, headers);
export default api;
