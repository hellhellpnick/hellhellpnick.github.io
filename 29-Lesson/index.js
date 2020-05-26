//1
const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"

    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

function writeTable() {
    let $ol = document.createElement("ol");
    for (let i = 0; i < playList.length; i++) {
        let $li = document.createElement("li");
        $li.innerHTML = `<span> Author: ${playList[i].author}, Song: ${playList[i].song} </span>`;
        $ol.append($li);
    }
    document.body.appendChild($ol);
};
writeTable();

//2
let box = document.getElementById('box');

const toggleOpen = () => {
    box.style.display = 'block';
}

const toggleClose = () => {
    box.style.display = 'none';
}

//3
let list = document.getElementsByClassName("list__color");

const toggleSwitch = () => {
    if (list[0].style.opacity != "1" && list[1].style.opacity != "1") {
        list[0].style.opacity = "1"
        list[1].style.opacity = "0.2"
        list[2].style.opacity = "0.2"
    }
    else if (list[1].style.opacity != "1") {
        list[1].style.opacity = "1"
        list[0].style.opacity = "0.2"
        list[2].style.opacity = "0.2"
    }
    else if (list[0].style.opacity != "1" && list[2].style.opacity != "1") {
        list[2].style.opacity = "1"
        list[0].style.opacity = "0.2"
        list[1].style.opacity = "0.2"
    }
}