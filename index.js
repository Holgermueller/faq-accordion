"use strict";

let acc = document.getElementsByClassName("panel-trigger");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      console.log("close");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      console.log("open");
    }
  });
}
