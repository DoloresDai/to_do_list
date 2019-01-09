window.onload = function() {
  leftItems();
}

function leftItems() {
  var sum = document.querySelectorAll("li").length;
  document.getElementByClassName("sum").innerHTML = sum;
}