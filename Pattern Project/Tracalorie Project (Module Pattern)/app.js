// App Controller
const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
  // Load event listeners
  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);

    //disable submit on enter
    document.addEventListener("keypress", function () {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemEditClick);

    //Update Item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener("click", itemUpdateSubmit);

    //back Btn
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener("click", UICtrl.clearEditState);

    //Delete item event
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener("click", itemDeleteSubmit);

    //Clear Btn Event
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener("click", clearAllitemsClick);
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== "" && input.calories !== "") {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      //Get Total Calories
      const totalCalories = ItemCtrl.getTotalCalories();

      //add total calories to ui
      UICtrl.showTotalCalories(totalCalories);

      StorageCtrl.storeItem(newItem);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  // Click Edit Item
  const itemEditClick = function (e) {
    if (e.target.classList.contains("edit-item")) {
      // Get list item id(item-0,item-1)
      const listId = e.target.parentNode.parentNode.id;

      //Break into array
      const listIdArr = listId.split("-");

      //Get actual id
      const id = parseInt(listIdArr[1]);

      //Get Item
      const itemToEdit = ItemCtrl.getItemById(id);

      //Set Current Item

      ItemCtrl.setCurrentItem(itemToEdit);

      //Add Item to Form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  };

  //Update Item Function
  const itemUpdateSubmit = function (e) {
    //Get Item Input
    const input = UICtrl.getItemInput();

    //Update Item
    const UpdatedItem = ItemCtrl.updateItem(input.name, input.calories);

    //Update Ui
    UICtrl.updateListItem(UpdatedItem);

    //Get Total Calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //add total calories to ui
    UICtrl.showTotalCalories(totalCalories);

    //Update Lcoal Storage

    StorageCtrl.updateItemStorage(UpdatedItem);

    //
    UICtrl.clearEditState();

    e.preventDefault();
  };

  //Delete Item Submit
  const itemDeleteSubmit = function (e) {
    //Get Id from current item
    const currentItem = ItemCtrl.getCurrentItem();

    //Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    //Delete from ui
    UICtrl.deleteListItem(currentItem.id);

    //Get Total Calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //add total calories to ui
    UICtrl.showTotalCalories(totalCalories);

    //Delete from local storage
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    //
    UICtrl.clearEditState();

    e.preventDefault();
  };

  //Clear All Items on click
  const clearAllitemsClick = function () {
    // Delete All items  from data structure
    ItemCtrl.clearAllItems();
    //Get Total Calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //add total calories to ui
    UICtrl.showTotalCalories(totalCalories);
    //Remove From Ui
    UICtrl.removeItems();

    //Clear items from localstorage
    StorageCtrl.clearItemsFromStorage();
    //Hide Ul
    UICtrl.hideList();
  };
  // Public methods
  return {
    init: function () {
      //Clearing edit state/set initial state
      UICtrl.clearEditState();
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      //Get Total Calories
      const totalCalories = ItemCtrl.getTotalCalories();

      //add total calories to ui
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl, StorageCtrl);

// Initialize App
App.init();
