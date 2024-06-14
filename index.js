"use strict";

let acc = document.getElementsByClassName("accordion-trigger");

for (let i = 0; acc.length; i++) {
  acc[i].addEventListener("click", function () {
    console.log("click" + i);
  });
}
