const http = new EasyHTTP();

// http
//   .get(`https://jsonplaceholder.typicode.com/users`)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Create Post
const data = {
  name: "Test",
  email: "test@test.com",
  username: "test123",
};

//POST REQUEST

http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//PUT REQUEST
// http
//   .put(`https://jsonplaceholder.typicode.com/users/2`, data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//DELETE REQUEST
// http
//   .delete(`https://jsonplaceholder.typicode.com/users/2`)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
