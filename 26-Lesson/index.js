let list_shop = [
    product1 = {
        name: 'potato',
        amount: 5,
        buy: false
    },
    product2 = {
        name: 'tomato',
        amount: 2,
        buy: false
    },
    product3 = {
        name: 'cherry',
        amount: 10,
        buy: true
    },
]

function amount(a) {
    for (i = 0; i <= a.length - 1; i++) {
        if (a[i].buy == false)
            console.log(a[i]);
    }
    for (i = 0; i <= a.length - 1; i++) {
        if (a[i].buy == true)
            console.log(a[i]);
    }
}
function add(a, b, c, d) {
    i = 4;
    a.push('product'[i] = { name: b, amount: c, buy: d });
    console.log(a);
    return a;
}
function buy(a, b) {
    for (i = 0; i <= a.length - 1; i++) {
        if (a[i].name == b) {
            a[i].buy = true;
            console.log(a[i]);
        }
    }

}
add(list_shop, 'orange', 7, false);
amount(list_shop);
buy(list_shop, "potato");

let list_shop2 = [
    product1 = {
        name: 'potato',
        amount: 5,
        price: 11,
    },
    product2 = {
        name: 'orange',
        amount: 2,
        price: 21,
    },
    product3 = {
        name: 'cherry',
        amount: 17,
        price: 3,
    },
]
function suma(a) {
    let sum = 0;
    for (i = 0; i <= a.length - 1; i++) {
        sum = a[i].amount * a[i].price + sum;
    }
    return sum;
}
function max(a) {
    let max = 0;
    for (i = 0; i <= a.length - 1; i++) {
        if (max < a[i].amount * a[i].price)
            max = a[i].amount * a[i].price;
    }
    return max;
}
function average(a) {
    let sum = suma(a);
    return sum / a.length - 1;
}
console.log(list_shop2);
console.log(suma(list_shop2));
console.log(max(list_shop2));
console.log(average(list_shop2).toFixed(2))

let style = [
    style1 = {
        color: "#140326;",
        name_color: `color:`,
        name_text: "font-size:",
        size: "16px;",
        name_align: "text-align:",
        align: "center;",
        name_decor: "text-decoration:",
        decor: "underline;",
    },
    style2 = {
        color: "#125712;",
        name_color: `color:`,
        name_text: "font-size:",
        size: "20px;",
        name_align: "text-align:",
        align: "right;",
        name_decor: "text-decoration:",
        decor: "blink;",
    },
    style3 = {
        color: "#092512;",
        name_color: `color:`,
        name_text: "font-size:",
        size: "24px;",
        name_align: "text-align:",
        align: "justify;",
        name_decor: "text-decoration:",
        decor: "overline;",
    },
]
function write(a) {
    for (i = 0; i <= a.length - 1; i++) {
        document.write(`<p style=${a[i].name_color}${a[i].color}${a[i].name_text}${a[i].size}${a[i].name_align}${a[i].align}${a[i].name_decor}${a[i].decor}>asdkjasdklasjdjakdjdjsakldj</p>`)
    }
}
write(style);

let academy = [
    audience1 = {
        name: "CS",
        amount: 11,
        faculty: "asd",
    },
    audience2 = {
        name: "Science",
        amount: 18,
        faculty: "Engineering",
    },
    audience3 = {
        name: "HTML",
        amount: 15,
        faculty: "Front",
    }
]
let audience = {
    name: "CS",
    amount: 11,
    faculty: "asd",
}

function facu(a, b) {
    for (i = 0; i <= a.length - 1; i++) {
        if (a[i].faculty == b)
            console.log(a[i]);
    }
}
function choose(a, b) {
    for (i = 0; i <= a.length - 1; i++) {
        if (a[i].name == b.name && a[i].amount == b.amount && a[i].faculty == b.faculty)
            console.log(a[i]);
    }
}
academy.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }

    return 0;
});

choose(academy, audience);
facu(academy, "asd");
console.log(academy.sort());

academy.sort(function (a, b) {
    if (a.amount < b.amount) {
        return 1;
    }
    if (a.amount > b.amount) {
        return -1;
    }

    return 0;
});

console.log(academy.sort());

