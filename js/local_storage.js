class Storage {
  constructor() {
    this.storage = window.localStorage;
  }
  setStorage(itemsObj) {
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