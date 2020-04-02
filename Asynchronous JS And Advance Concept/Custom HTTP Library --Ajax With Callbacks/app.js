// https://jsonplaceholder.typicode.com

const http = new easyHTTP();

//GET POSTS

// http.get("https://jsonplaceholder.typicode.com/posts", function(error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

//GET Single Post

// http.get("https://jsonplaceholder.typicode.com/posts/1", function(error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

//POST Request
// const data = {
//   title: "Custom Post",
//   body: "This Is Custom Post"
// };

// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   error,
//   post
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

//UPDATE POST
// const data = {
//   title: "Custom Post",
//   body: "This Is Custom Post"
// };

// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
//   error,
//   post
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

//Delete Request

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
