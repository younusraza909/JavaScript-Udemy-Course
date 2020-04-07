//Maps = key-value - can use any type as a kry or value

const map1 = new Map();
//Set keys

const key1 = "some string",
  key2 = {},
  key3 = function () {};

//Set map values by keys

map1.set(key1, "Value of key 1");
map1.set(key2, "Value of key 2");
map1.set(key3, "Value of key 3");

// console.log(map1);

// //value by keys

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// //Count value
// console.log(map1.size);

// //Iterating Maps

// //loop using for ..of to get keys and values

// for (let [key, value] of map1) {
//   console.log(`${key}=${value}`);
// }

// //Iterate keys only

// for (let key of map1.keys()) {
//   console.log(key);
// }

// //Iterate values
// for (let value of map1.values()) {
//   console.log(value);
// }

// //For each
// map1.forEach(function (value, key) {
//   console.log(`${key}=${value}`);
// });

// //Convert to array

// // create array of key value pair

// const keyarray = Array.from(map1);
// console.log(keyarray);

const example = {
  name: "Raza",
  age: 20,
};

let result = Object.keys(example).map(function (key) {
  return [key, example[key]];
});

console.log(result);
