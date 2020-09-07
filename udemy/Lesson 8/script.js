"use strict";

console.log(typeof String(null));
console.log(typeof String(4));

console.log(typeof (5 + ""));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

console.log(typeof +"5");
console.log(typeof parseInt("15px, 10"));

let answ = +prompt("Hello", "");

//0, '', null, undefined, NaN;

let switcher = null;

switcher = 1;

if (switcher) {
  console.log("Working...");
}

console.log(typeof Boolean(4));

console.log(typeof !!"44444");
