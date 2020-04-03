// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; //wait till promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await responce.json();

  return data;
}

getUsers().then((user) => console.log(user));
