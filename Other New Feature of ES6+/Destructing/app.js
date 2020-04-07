// //Destructing Assignment

// let a, b;

// [a, b] = [100, 200];
// //Rest Pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// // Array Destructring

// const people = ["John", "Beth", "Mike"];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);

//parse array return from function
// function getPeople() {
//   return ["john", "beth", "mike"];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// Object Destructring
const person = {
  name: "John Doe",
  age: 32,
  city: "Miami",
  gender: "Male",
};

//old ES5
// const name = person.name,
//   age = person.age,
//   city = person.city;

//New ES6

const { name, age, city } = person;
