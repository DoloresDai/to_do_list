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