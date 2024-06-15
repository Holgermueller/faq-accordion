"use strict";

let acc = document.getElementsByClassName("panel-trigger");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");

    // for (let j = 0; j < acc.length; j++) {
    //   if (j !== i) acc[j].nextElementSibling.style.maxHeight = null;
    // }

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}
acc[0].onclick();
