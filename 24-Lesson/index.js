/* // 1
function comparison(a, b) {
    if (a < b)
        return document.write(-1);
    else if (a > b)
        return document.write(1);
    else
        return document.write(0);
}

let a = prompt("Enter a");
let b = prompt("Enter b")

comparison(a, b); */

/* //2
function fact(a) {
    if (a < 0)
        return 0;
    else if (a == 0)
        return 0;
    else {
        fa = 1;
        while (a > 1) {
            fa *= a;
            a--;
        }
        return document.write(fa);
    }
}

let a = 5;

fact(a); */

/* //3
function merge(a, b, c) {
    return document.write(String(a) + String(b) + String(c));
}

let a = 2,
    b = 6,
    c = 9;

merge(a, b, c); */

/* //4
function s(a, b) {
    if (b == undefined)
        return document.write(a * a);
    else
        return document.write(a * b);
}


s(2); */

/* //5
function perfect(a) {
    sum = 0;

    for (j = 1; j <= a / 2; j++) {
        if (a % j == 0)
            sum += a;
    }

    return sum == a;
}
let a = 20;

for (i = 1; i < a; i++) {
    if (perfect(i))
        document.write(i);
} */

/* //6
function perfect(a, b) {
    sum = 0;

    for (b; b <= a / 2; b++) {
        if (a % b == 0)
            sum += a;
    }

    return sum == a;
}
let a = 11;
let b = 10;

for (b = 1; b < a; b++) {
    if (perfect(a, b))
        document.write(a, b);
} */

/* //7
function time(a, b, c) {
    if (a == undefined)
        return 00;

    if (b == undefined)
        return 00;

    if (c == undefined)
        return 00;
    return document.write(`${a}:${b}:${c}`);
}

let a = 5,
    b = 25,
    c = 56;

time(a, b, c); */

/* //8
function time(a, b, c) {
    b = a * 60 + b;
    c = b * 60 + c;
    return document.write(c);
}

let a = 9,
    b = 43,
    c = 12;

time(a, b, c); */

/* //9
function time(s) {
    let h, m;
    h = s / 3600;
    s %= 3600;
    m = s / 60;
    s %= 60;
    return document.write(`${h.toFixed(0)}:${m.toFixed(0)}:${s.toFixed(0)}`);
}

let s = 8420;

time(s); */

//10    
function sec(a, b, c) {
    b = a * 60 + b;
    c = b * 60 + c;
    return c;
}
function sec_time(s) {
    let h, m;
    h = s / 3600;
    s %= 3600;
    m = s / 60;
    s %= 60;
    return document.write(`${h.toFixed(0)}:${m.toFixed(0)}:${s.toFixed(0)}`);
}
function time(h1, m1, s1, h2, m2, s2) {

    c1 = sec(h1, m1, s1);
    c2 = sec(h2, m2, s2);
    document.write(c1 + "<br>");
    document.write(c2 + "<br>");
    c3 = c1 - c2
    return sec_time(c3);
}

let h1 = 20,
    m1 = 52,
    s1 = 5,
    h2 = 5,
    m2 = 18,
    s2 = 1;

time(h1, m1, s1, h2, m2, s2);