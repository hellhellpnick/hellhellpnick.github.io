//#1
const age = prompt("How much your age?");
if (Number(age) >= 0 && Number(age) <= 11) {
    document.write("This is child");
} else if (Number(age) >= 12 && Number(age) <= 17) {
    document.write("This is teen");
} else if (Number(age) >= 18 && Number(age) <= 59) {
    document.write("This is adults");
} else {
    document.write("This is retired");
}

//#2
const num = prompt("Enter the number 0-9");
switch (num) {
    case 1:
        document.write("!");
        break
    case 2:
        document.write("@");
        break
    case 3:
        document.write("#");
        break
    case 4:
        document.write("$");
        break
    case 5:
        document.write("%");
        break
    case 6:
        document.write("^");
        break
    case 7:
        document.write("&");
        break
    case 8:
        document.write("*");
        break
    case 9:
        document.write(`Bracket on key 9`);
        break
    case 0:
        document.write(`Bracket on key 0`);
        break
}


//#3
let i = 0;
const ThNum = prompt("Enter the three-digit number");
for (i = 0; i < ThNum.length; i++) {
    if (ThNum.split(ThNum[i]).length - 1 > 1) {
        document.write(`Duplicate value ${ThNum[i]}<br>`);
    }
}

//#4
function IsYear(year) {
    return year % 4 === 0;
}

const year = prompt("Enter the year")

if (IsYear(year))
    document.write(`This is year ${year} is a leap`);
else
    document.write(`This is year ${year} is not a leap`);


//#5
let b, c, d, f;
let a = prompt("Ente five-digit number")
f = a;
if (a > 9999 && a < 100000) {
    b = a / 10000;
    a = a % 10000;
    c = a / 1000;
    a = a % 1000;
    a = a % 100;
    d = a / 10;
    a = a % 10;

    if (b == a && c == e) {
        document.write(`This is number ${f} is a palindrom`);
    } else {
        document.write(`This is number ${f} is not a palindrom`);
    }
} else {
    document.write(`You entered the number ${f} it is not five-digit number`);
}

//#6
let USD = prompt("Enter how many dollars you have")

let choose = prompt("Enter in which current want to get")

if (choose.toUpperCase() == "EUR") {
    USD = USD * 0.9
    document.write(`Your EUR: ${USD}`)
} else if (choose.toUpperCase() == "RUB") {
    USD = USD * 73.7
    document.write(`Your RUB:  ${USD}`)
} else {
    USD = USD * 27.1
    document.write(`Your ${USD}`)
}

//#7
let suma = prompt("Enter how many money you have");

if (suma >= 200 && suma < 300) {
    suma = suma - suma * 0.03;
    document.write(`Your ${suma} with discount 3%`);
} else if (suma >= 300 && suma < 500) {
    suma = suma - suma * 0.05;
    document.write(`Your ${suma} with discount 5%`);
} else if (suma >= 500) {
    suma = suma - suma * 0.07;
    document.write(`Your ${suma} with discount 7%`);
} else document.write(`Your ${suma} with not discount`);

//#8
const squar = prompt("Enter side squared")
const r = prompt("Enter  radius circle")

if (r >= squar / 2)
    document.write(`Your squared will fit into the circle`)
else
    document.write(`Your squared will not fit into the circle`)

//#9
i = 0;

alert("Здесь будет 3 загадки. Всего можно заработать 3 балла. Удачи :)");

let riddl1 = prompt(`В Полотняной стране
По реке Простыне
Плывет пароход
То назад, то вперед,
А за ним такая гладь —
Ни морщинки не видать.`);

if (riddl1.toUpperCase() == "УТЮГ") {
    document.write("Правильно!<br>");
    i++;
} else document.write("Не правильно! Правильный ответ *утюг*<br>");

let riddl2 = prompt(`В брюшке — баня,
В носу — решето,
Нос — хоботок,
На голове — пупок,
Всего одна рука
Без пальчиков,
И та — на спине
Калачиком.`)

if (riddl2.toUpperCase() == "ЧАЙНИК") {
    document.write("Правильно!<br>");
    i++;
} else document.write("Не правильно! Правильный ответ *чайник*<br>");

let riddl3 = prompt(`Стоит дуб,
В нем двенадцать гнезд,
В каждом гнезде
По четыре яйца,
В каждом яйце
По семи цыпленков.`)

if (riddl3.toUpperCase() == "ГОД") {
    document.write("Правильно!<br>");
    i++;
} else document.write("Не правильно! Правильный ответ *год*<br>");

document.write(`Ваши заработанные баллы ${i}/3<br>`);

//№10
let day = prompt("Enter the day")
let month = prompt("Enter the month")
let yea = prompt("Enter the year")
let D = new Date(yea, month, day);
D.setDate(D.getDate() + 1);
alert(D);
