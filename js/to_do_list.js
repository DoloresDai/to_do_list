class Items {
  constructor(value, completed, deleted) {
    this.value = value;
    this.completed = completed || false;
    this.deleted = deleted || false;
  }
  loadItems(storage) {}
}
class Storage {
  constructor() {
    this.storage = window.localStorage;
  }
  setStorage(items) {
    this.storage.setItem(`${items}.value`, JSON.stringify(items));
  }
  getAll() {
    let itemsArr = [];
    for (let i = 0; i < this.storage.length; i++) {
      let text = this.storage.getItem(this.storage.key(i));
      let itemsObj = JSON.parse(text);
      if (itemsObj.value) {
        let items = new Items(itemsObj.value, itemsObj.completed, itemsObj.deleted)
        itemsArr.push(itemsObj);
      }
    }
    return itemsArr;
  }
  getCompletedItems() {}
}

function my$(class_name) {
  return document.getElementsByClassName(class_name);
}

function enterInput(event) {
  let value = my$("input").value;
  if (event.keyCode === 13 && value) {
    value = "";
  }
}
let storage = new Storage();
window.onload = function() {}