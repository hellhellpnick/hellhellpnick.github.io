//1
const text = document.getElementById("text");
const textarea = document.getElementById("textarea");
function stopAction(ev) {
    ev.preventDefault();
}

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.code == "KeyE") {
        stopAction(event);
        let textIn = text.innerText;
        text.style.display = "none";
        textarea.style.display = 'block';
        textarea.innerText = textIn;
    }
    if (event.ctrlKey && event.code == "KeyC") {
        stopAction(event);
        text.style.display = "block";
        textarea.style.display = "none";
        let newTextInDiv = textarea.value;
        text.innerText = newTextInDiv;
    }
});

//2
function sortNumbers(a, b) {
    return a - b;
}

function reused(a) {
    let rowNumbers = document.getElementById(a);
    let rowNumbersArr = rowNumbers.children;
    let numbers = [];
    for (let i = 1; i < rowNumbersArr.length; i++) {
        numbers.push(rowNumbersArr[i].innerText);
    }
    numbers.sort(sortNumbers);
    let f = 1;
    for (let s = 0; s < numbers.length; s++) {
        rowNumbersArr[f].innerText = numbers[s];
        f++;
    }
}
document.addEventListener("click", function (event) {
    const table = document.querySelector("table");
    let tableRow = document.getElementsByTagName("th");
    let tableRowArr = [...tableRow];
    if (event.target == tableRowArr[0]) {
        reused("row1");
    } else if (event.target == tableRowArr[1]) {
        reused("row2");
    } else if (event.target == tableRowArr[2]) {
        reused("row3");
    }
});

//3
document.addEventListener("mousedown", (event) => {
    const box = document.getElementById("size");
    box.style.resize = "both";
});
document.addEventListener("mouseup", (event) => {
    const box = document.getElementById("size");
    box.style.resize = "none";
});