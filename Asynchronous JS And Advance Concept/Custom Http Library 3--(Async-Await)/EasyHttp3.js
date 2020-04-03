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
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  //POST REQUEST
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const output = await response.json();
    return output;
  }

  //PUT Request

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const output = await response;
    return output;
  }

  //DELETE REQUEST
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    const data = await response;
    return data;
  }
}
