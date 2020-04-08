//Basic Structure
// (function () {
//   //Declare private vars and function

//   return {
//     //Declare public var and function
//   };
// })();

//STANDARD MODULE PASTTERN
// const UICtrl = (function () {
//   const text = "Hello World ....!";

//   const changeText = function () {
//     const elem = document.getElementById("text");
//     elem.textContent = text;
//   };

//   return {
//     changeTextContent: function () {
//       changeText();
//       console.log("Completed.....!");
//     },
//   };
// })();

// UICtrl.changeTextContent();

//REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  const data = [];

  const add = function (Item) {
    data.push(Item);
    console.log("Pusheddd");
  };

  const get = function (id) {
    return data.find(function (item) {
      return item.id === id;
    });
  };

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "Younus" });
console.log(ItemCtrl.get(1));
