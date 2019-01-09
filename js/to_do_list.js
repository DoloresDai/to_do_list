window.onload = function() {
  leftItems();
  classLi();
}

function leftItems() {
  var sum = document.querySelectorAll("li").length;
  document.getElementByClassName("sum").innerHTML = sum;
}

function classLi() {
  for (let k = 0; k < sum; k++) {
    document.querySelectorAll("li")[k].classList.add("list[k]");
  }
}

function save() {
  var items = document.querySelector(".items").value;
  for (let i = 0; i < sum; i++) {
    window.localStorage.setItem("data" + i, items);
  }
}

function readItems() {
  var value = [];
  var list = [];
  for (let j = 0; j < sum; j++) {
    var keys = window.localStorage.key(j);
    value[j] = window.localStorage.getItem(keys);
    var list[j] = document.getElementByClassName(".list[j]");
    list[j].innerHTML = value[j];
  }
}

function deleteItems() {
  window.localStorage.removeItem(".list[j]");
}

function clearItems() {
  window.localStorage.clear();
}