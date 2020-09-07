"use strict";

const btns = document.querySelector("button"),
  overlay = document.querySelector(".overlay");

/* btn.onclick = function () {
  alert("Hi");
}; */

btn.addEventListener("click", () => {
  alert("click");
});
btn.addEventListener("click", () => {
  alert("second click");
});

let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
  /* i++;
  if (i == 1) {
    btn.removeEventListener("mouseenter", deleteElement);
  } */
};

/* btn.addEventListener("mouseenter", deleteElement);
overlay.addEventListener("mouseenter", deleteElement); */

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target);
});
