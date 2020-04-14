//Local Storage Controller

const StorageCrtl = (function () {
  // public method
  return {
    storeItem: function (item) {
      let items;

      //Check if ant item in local storage;
      if (localStorage.getItem("items") === null) {
        items = [];
        //push new item
        items.push(item);

        //Set local storage

        localStorage.setItem("items", JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem("items"));

        //push new item
        items.push(item);

        //Set Local storage
        localStorage.setItem("items", JSON.stringify(items));
      }
    },

    getItemsfromStorage: function () {
      let items;
      if (localStorage.getItem("items") === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem("items"));
      }
      return item;
    },

    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem("items"));

      items.forEach(function (item, index) {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });

      localStorage.setItem("items", JSON.stringify(items));
    },

    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem("items"));

      items.forEach(function (item, index) {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });

      localStorage.setItem("items", JSON.stringify(items));
    },

    clearItemsFromStorage: function () {
      localStorage.removeItem("items");
    },
  };
})();
