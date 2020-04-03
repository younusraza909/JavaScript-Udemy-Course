// const sayHello = function() {
//   console.log("Hello");
// };

// Arrow Function

// const sayHello = () => {
//   console.log("Hello");
// };

//One Line Functio does not need braces
// const sayHello = () => console.log("Hello");

//If We are returning something
// const sayHello = () => "Hello";

//If We Have to return object
// const sayHello = () => ({ msg: "Hello" });

//Single Parameter does not need paranthesis
// const sayHello = name => console.log(`Hello ${name}`);

//More Than oen paranthesis need paranthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Younus", "Raza");

//arrow function as callback

const users = ["Nathan", "John", "William"];
// const nameLength = users.map(function(name) {
//   return name.length;
// });

//2nd Method

// const nameLength = users.map(name => {
//   return name.length;
// });

//3rd Method
const nameLength = users.map(name => name.length);
console.log(nameLength);
