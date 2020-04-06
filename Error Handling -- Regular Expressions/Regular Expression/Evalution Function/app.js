let re;
re = /hello/;
re = /hello/i;
// i=Case Insensitive
// re = /hello/g;
// g= global search

// console.log(re.source);

//exec() -- Return Result in array if match or null
// const result = re.exec(`dehello  world`);
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test() - Returns True Or False
// const result = re.test("Hello");
// console.log(result);

//match() - Return result array or null
// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

//search ()- Return index of first match if not found return -1
// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

//Replace()-Return new string with some or all matches of a pattern

const str = "Hello There";
const newStr = str.replace(re, "Hi");
console.log(newStr);
