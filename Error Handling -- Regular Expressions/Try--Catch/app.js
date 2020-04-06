const user = { email: "test@test.com" };

try {
  console.log("Try 2");
  //Produced Referrence Error
  //   myFunc();

  //Produced TypeError
  //   null.myFunction();

  //Produced Syntax Error
  //   console.log(eval("Hello World"));

  //Produced a URI Error
  //   decodeURIComponent("%");

  if (!user.name) {
    // throw "User Has No Name";
    throw new SyntaxError("Error Custom");
  }
} catch (e) {
  console.log("Error Caught...");
  console.log(e);
  //   console.log(e.message); //Only getting message
  //   console.log(e.name);
  //   console.log(e instanceof ReferenceError);
} finally {
  console.log("Finally Runs Regardless Of Result");
}

console.log("Progra continues....");
