// Iterator
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < namesArray.length
//         ? {
//             value: names[nextIndex++],
//             done: false,
//           }
//         : {
//             done: true,
//           };
//     },
//   };
// }

// //Create and array of name
// const namesArray = ["jack", "jill", "john"];

// //Init Iterator and pass in the names array
// const names = nameIterator(namesArray);

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

//Generators
function* genNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}
const names = genNames();
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

//Create ID
// function* createIds() {
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();

// console.log(gen().value);
// console.log(gen().value);
// console.log(gen().value);
// console.log(gen().value);
