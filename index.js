"use strict";

let acc = document.getElementsByClassName("panel-trigger");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let img = document.body.querySelector(".accordion-icon");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}
acc[0].onclick();
