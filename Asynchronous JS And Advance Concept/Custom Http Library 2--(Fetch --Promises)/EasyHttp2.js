/**
 * EasyHTTP Library
 * Library for making http request
 *
 * @version 2.0.0
 * @author Raza
 * @teacher Brad
 *
 *
 * **/

class EasyHTTP {
  //For Get Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //POST REQUEST
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //PUT Request

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //DELETE REQUEST
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
      })
        .then(res => res.json())
        .then(() => resolve("Successfully Deleted"))
        .catch(err => reject(err));
    });
  }
}
