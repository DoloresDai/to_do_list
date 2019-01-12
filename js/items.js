class Todocontent {
  constructor(input, completed, deleted) {
    this.input = my$("input").value;
    this.completed = false;
    this.deleted = false;
  }
  getItems(itemsObj) {
    itemsArr.push(itemsObj);
    return itemsArr;
  }
  loadItems(itemsArr) {
    for (let i = 0; i < itemsArr.length; i++) {
      let liArr = [],
        buttonArr = [];
      liArr[i] = document.creatElemnt("li");
      buttonArr[i] = document.creatElemnt("button");
      liArr[i].class = itemsArr[i];
      id$("ul").appendChild(liArr[i]);
      liArr[i].appendChild(buttonArr[i]);
      liArr[i].innerText = itemsArr[i];
    }
    isCompleted() {
      this.completed = true;
    }
    isDeleted() {
      this.deleted = true;
    }
    // isClick() {};
  }
}