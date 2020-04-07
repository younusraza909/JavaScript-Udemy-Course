// //Create a symbol

// const sym1 = Symbol();
// const sym2 = Symbol("sym2");

// console.log(typeof sym2);

// console.log(Symbol("123") === Symbol("123"));
// // Always will return false

// // console.log(`Hello ${sym1}`);
// //it will return error

// console.log(`Hello ${String(sym1)}`);

//Unique Object Keys

const KEY1 = Symbol();
const KEY2 = Symbol("sym2");
const myObj = {};

myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";
myObj.key3 = "Prop3";
myObj.key4 = "Prop4";

// console.log(myObj);

//Symbols are not enumerable in for in

for (let i in myObj) {
  console.log(`${i}:${myObj[i]}`);
}
//We just get key3 and key4 will not access key1 key2 bcz they are symbols

//Symbols are ignored using JSON.stringfy
console.log(JSON.stringify(myObj));

console.log(JSON.stringify({ [Symbol("sym1")]: "prop" }));

const sym1 = Symbol.for("cat");
const sym2 = Symbol.for("cat");

// here in this scenerario sym1 and sym2 are same
