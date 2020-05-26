//1

class cir {
    const(a, b) {
        this.r = a;
        this.width = b;
    }

    get circleR() {
        return this.radius;
    }

    set circleR(newRadiusV) {
        this.radius = newRadiusV;
    }

    get cirlceD() {
        return this.radius * 2;
    }

    getCircleS() {
        let p = 3.14;
        let s = p * Math.pow(this.radius, 2);
        return s.toFixed(2);
    }

    getCircleLeng() {
        let p = 3.14;
        let r = 2 * p * this.radius;
        return r.toFixed(2);
    }
}

let data = new cir(10, 30);
data.circleR = 7;
//console.log(data.getCircleS());
//console.log(data.getCircleLeng())

//2
class marker {
    constructor(a, b) {
        this.color = a;
        this.val = b;
    }

    print(a) {
        do {
            let $span = document.createElement("span");
            $span.innerHTML = a;
            $span.style.color = this.color;
            document.body.appendChild($span);
            let string = a.split("");
            this.val = this.val - string.length * 0.5;
        } while (this.val >= 0.5);
    }
}
let printed = new marker("pink", 1);/* 
console.log(printed.print("Hello everybody ")); */

class rechargedM {
    constructor() {
        this.color = printed.color;
        this.value = printed.val;
    }
    recharge(a) {
        this.value = a;
    }
}

let newPrinted = new rechargedM();
newPrinted.recharge(1);
/* console.log(newPrinted); */

//3
let bankWorkers = [];
class Employee {
    constructor(a, b, c) {
        this.name = a;
        this.subname = b;
        this.age = c;
    }
}

bankWorkers.push(
    new Employee("Dima", "Sirenko", 19),
    new Employee("Ivan", "Lolo", 26),
    new Employee("Marya", "Petri", 52),
    new Employee("VanR", "Vakarchuk", 31)
);

class EmpTable {
    constructor(workers) {
        this.bankWorkers = workers;
    }
    writeTable() {
        let $ol = document.createElement("ol");
        for (let i = 0; i < newWorkers.bankWorkers.length; i++) {
            let $li = document.createElement("li");
            $li.innerHTML = `<span>${newWorkers.bankWorkers[i].name} ${newWorkers.bankWorkers[i].subname}, age: ${newWorkers.bankWorkers[i].age} </span>`;
            $ol.append($li);
        }
        document.body.appendChild($ol);
    }
}
let newWorkers = new EmpTable(bankWorkers);
console.log(newWorkers.writeTable());