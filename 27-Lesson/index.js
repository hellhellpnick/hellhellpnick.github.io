/* //1
min = prompt('Enter min valye: ');
max = prompt('Enter max valye: ');
let sum = 0;
let i = Number(min);
let j = Number(max);
for (i; i <= j; i++) {
    sum = sum + i;
}

console.log(sum); */

/* //2
min = prompt('Enter min valye: ');
max = prompt('Enter max valye: ');

let i = Number(min);
let j = Number(max);
let value = 0;
for (k = 0; k < + j; k++) {
    if (i % k == 0 && j % k == 0) {
        value = k;
    }
}
console.log(k); */

/* //3
max = prompt('Enter max valye: ');
let j = Number(max);

for (k = 0; k < + j; k++) {
    if (j % k == 0) {
        console.log(k);
    }
} */

/* //4
max = prompt('Enter max valye: ');
console.log(max.length); */

/* //5
for (i = 0; i < 10; i++) {
    let value = prompt("Enter the number");
    if (value > 0) console.log(value + "+")
    else if (value < 0) console.log(value + "-")
    else console.log(value + "0")
}
 */

/* //6
let sum = prompt("Enter value 1")

while (true) {
    let b = prompt("Enter value 2")
    let c = prompt("Enter operation ")
    if (c == '/') {
        sum = Number(sum) / Number(b);
        console.log(sum);
    }
    else if (c == "*") {
        sum = Number(sum) * Number(b);
        console.log(sum);
    }
    else if (c == "+") {
        sum = Number(sum) + Number(b);
        console.log(sum);
    }
    else if (c == "-") {
        sum = Number(sum) - Number(b);
        console.log(sum);
    }
    else console.log("Not correct enter");


    c = prompt("Continue ")
    if (c == "no")
        break;
    else
        continue;
} */
/* //7
let str = prompt("Enter the number");
let k = prompt("How many digits should it be shifted?");

console.log(str);
console.log(str.substring(k) + str.substring(0, k)); */

/* //8
let a = prompt("Enter day a week")
while (true) {
    if (a == "Monday") {
        a = "Tuesday"
        console.log(a)
    }
    else if (a == "Tuesday") {
        a = "Wednesday"
        console.log(a)
    }
    else if (a == "Wednesday") {
        a = "Thursday"
        console.log(a)
    }
    else if (a == "Thursday") {
        a = "Friday"
        console.log(a)
    }
    else if (a == "Friday") {
        a = "Saturday"
        console.log(a)
    }
    else if (a == "Saturday") {
        a = "Sunday"
        console.log(a)
    }
    else {
        a = "Monday"
        console.log(a)
    }
    let b = prompt("OK?");
    if (b == "OK")
        break
    else
        continue
} */

/*
//9
let k = 0;
for (i = 2; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        let k = 0;
        k = i * j;
        console.log(i + " * " + j + "= " + (k));
        for (v = 1; v <= 10; v++) {
            k = k * v;
            console.log(k)
        }
    }
} */

//10
let a = prompt("Enter the number from 0 before 100");
let q = 100;
while (true) {
    if (a > 50) {
        let b = prompt(`Enter your number fron 51 before ${q}`);
        let c = prompt(`${b} is this number?`)
        if (c == "yes")
            break
        else {
            if (q >= b) {
                q = q - 5;
            }
            continue
        }
    }
    else {
        let b = prompt(`Enter your number fron 0 before ${q}`);
        let c = prompt(`${b} is this number?`)
        if (c == "yes")
            break
        else {
            if (q >= b) {
                q -= 5;
            }
            continue
        }
    }
}