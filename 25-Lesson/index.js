let car = {
    marka: "Toyota",
    model: "Q301",
    year: 2011,
    speed: 5,
    timeF: 0,
    timea: function (distanc) {
        i = 0;
        times = distanc / this.speed;
        this.timef = times
        for (i; 4 <= times; i++) {
            times -= 4;
        }
        this.timef = this.timef + i;
        return this.timeF;
    },
}
let z = prompt("Enter distance")
car.timea(z);
document.write(car.timef + '<br>');

let dro1 = {},
    dro2 = {},
    fun = {
        numerator3: 0,
        numerator4: 0,
        add_num: 0,
        add_den: 0,
        sub_den: 0,
        sub_num: 0,
        mult_num: 0,
        mult_den: 0,
        div_den: 0,
        div_num: 0,
        addfun: function () {
            if (this.denominator1 == this.denominator2) {
                this.add_num = this.numerator1 + this.numerator2;
                this.add_den = this.denominator2;
                return this.add_den;
            }
            else {
                this.numerator3 = this.numerator1 * this.denominator2;
                this.numerator4 = this.numerator2 * this.denominator1;
                this.add_den = this.denominator2 * this.denominator1;
                this.add_num = this.numerator3 + this.numerator4;
                return this.den;
            }
        },
        subfun: function () {
            if (this.denominator1 == this.denominator2) {
                this.sub_num = this.numerator1 - this.numerator2;
                this.sub_den = this.denominator2;
                return this.sub_den, this.sub_num;
            }
            else {
                this.numerator3 = this.numerator1 * this.denominator2;
                this.numerator4 = this.numerator2 * this.denominator1;
                this.sub_den = this.denominator2 * this.denominator1;
                this.sub_num = this.numerator3 - this.numerator4;
                return this.den, this.sub_num;
            }
        },
        multfun: function () {
            this.mult_num = this.numerator1 * this.numerator2;
            this.mult_den = this.denominator1 * this.denominator2;
            return this.mult_den, this.mult_num;
        },
        divfun: function () {
            this.div_num = this.numerator1 * this.denominator2;
            this.div_den = this.denominator1 * this.numerator2;
            return this.div_den, this.div_num;
        },
        reduct: function () {
            if (this.numerator1 % 2 == 0 && this.denominator2 % 2 == 0) {
                this.numerator1 = this.numerator1 / 2;
                this.denominator2 = this.denominator2 / 2;
            }
            if (this.numerator2 % 2 == 0 && this.denominator1 % 2 == 0) {
                this.numerator2 = this.numerator2 / 2;
                this.denominator1 = this.denominator1 / 2;
            }
        }
    };

a = prompt("Enter num1");
b = prompt("Enter den1");
c = prompt("Enter num2");
d = prompt("Enter den2");

dro1.numerator1 = a;
dro1.denominator1 = b
dro2.numerator2 = c;
dro2.denominator2 = d

for (let key in dro1) {
    fun[key] = dro1[key];
}
for (let key in dro2) {
    fun[key] = dro2[key];
}

fun.multfun();
fun.addfun();
fun.subfun();
fun.divfun();
fun.reduct();

document.write(fun.add_num + "/" + fun.add_den + "<br>");
document.write(fun.sub_num + '/' + fun.sub_den + "<br>");
document.write(fun.mult_num + '/' + fun.mult_den + "<br>");
document.write(fun.div_num + '/' + fun.div_num + "<br>");

document.write(`${fun.numerator1}/${fun.denominator1}` + "<br>");
document.write(`${fun.numerator2}/${fun.denominator2}` + "<br>");

let time = {
    h: 0,
    m: 0,
    s: 0,
    correct_time: function () {
        while (true) {
            if (this.m > 59) {
                this.m = this.m - 59;
                this.h = this.h + 1;
            }
            else if (this.s > 59) {
                this.s = this.s - 59;
                this.m = this.m + 1;
            }
            else
                break;
        }
    },
    change_h: function (h) {
        this.h = this.h + h;
    },
    change_m: function (m) {
        this.m = this.m + m;
        this.correct_time();
    },
    change_s: function (s) {
        this.s = this.s + s;
        this.correct_time();
    },
}

let v = prompt("Enter h"),
    n = prompt("Enter m"),
    m = prompt("Enter s");

time.h = Number(v);
time.m = Number(n);
time.s = Number(m);

time.correct_time();

document.write(`${time.h}:${time.m}:${time.s}`);
