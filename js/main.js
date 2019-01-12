// class Input {
//   constructor() {
//     this.value = value;
//   }
//   enterInput() {
//     this.addEventListener("keydown", function() {
//       this.value = "": this.value;
//     });
//   }
// }
let storage = new Storage();
let input = new Todocontent(my$("input").value);
let itemsArr = [];
window.onload = function() {
  isEnter(event);
}

function isEnter(event) {
  if (event.keyCode == 13 && id$("input").value != "") {
    input.getItems(input);
    id$("input").value = "";
  }
}

function clickItems() {
  let liObj = tag$("li");
  for (let k = 0; k < liObj.length; k++) {
    liObj[k].onclick = function() {
      for (let j = 0; j < liObj.length; j++) {
        liObj[j].classList.add("active", "all");
      }
      this.classList.add(".line_through", "completed");
    }
  }
}

function buttonClick() {
  for (let l = 0; l < 3; l++) {
    tag$("button").onclick = function() {
      for (let m = 0; m < 3; m++) {
        tag$("button").classList.add("");
      }
      this.classList.add("click");
    }
  }
}

function deleteItems(input) {
  let liArr = tag$("li");
  for (let x = 0; x < liArr.length; x++) {
    tag$("li").onclick = function() {
      for (let y = 0; y < liArr.length; y++) {
        tag$("button").classList.add("");
      }
      this.classList.add("click");
    }
  }
}

function switchState(state) {
  let arr = my$(state).
}

function tag$(tag) {
  return document.getElementByTagName(tag);
}

function id$(id) {
  return document.getElementById(id);
}

function my$(class_name) {
  return document.getElementsByClassName(class_name);
}