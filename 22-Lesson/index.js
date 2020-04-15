
//#1
const name = prompt("Enter your name: ")
document.write("Hello " + name + "!" + "<br>");

//#2
const year = prompt("Enter your year birthday: "); 200
document.write(2020 - year + "<br>");

//#3
const LengthSquare = prompt("Enter lenght square: ");
document.write(4 * LengthSquare + "<br>");

//№4
const r = prompt("Enter circle radius ");
document.write(r * r + "<br>");

//№5
const s = prompt("What distance do you have to go?") * 1000;
const t = prompt("How many hours do you want to get?") * 60;
let v = s / t;
document.write(v.toFixed(0) + "<br>");

//№6
let dolar = prompt("Enter how many dollars you have");
let gr = dolar * 27;
let euro = gr / 30;
document.write("Yours grivnR :) : " + gr + " " + "Yours euro: " + euro + "<br>");

//№7
const flash = prompt("Enter which flash drive you have");
let file = flash * 0.820;
document.write(file.toFixed(0) + "<br>");

//№8
const money = prompt("Enter how many you have money");
const chocolate = prompt("Enter how much chocolate costs");
let buy = money / chocolate;
document.write(buy.toFixed(0) + "<br>");
document.write("How much do you have left " + money % chocolate + "<br>")

//№9
const td = prompt("Enter a three-digit number") + '';
document.write(("" + td).split('').reverse().join('') + "<br>");

//№10
const money1 = prompt("Enter how much give back money the bank");
document.write((((money1 * 0.05) + money1) / 365) + "<br>");



