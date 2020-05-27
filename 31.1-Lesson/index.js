$('#circle').circleProgress({
    value: 0.6,
    size: 80,
    fill: {
        gradient: ["#00d4bc", "#1ae780"]
    },
    startAngle: 2.3,
    reverse: true,
    lineCap: "round",
    thickness: 3
});
function changeStarValue() {
    const $star1 = document.getElementById("star1");
    const $star2 = document.getElementById("star2");
    const $star3 = document.getElementById("star3");
    const $star4 = document.getElementById("star4");
    const $star5 = document.getElementById("star5");
    const $allStars = [$star1, $star2, $star3, $star4, $star5];
    const $starsBox = document.getElementById("box-stars");
    function changeStarColor(a) {
        $allStars.forEach(
            (el, idx) => (el.style.fill = idx <= a ? "#ffdd4f" : "#4b536b")
        );
    }
    $allStars.forEach((el) => {
        el.addEventListener("click", () => {
            const idx = $allStars.indexOf(el);
            changeStarColor(idx);
        });
    });
}
changeStarValue();

function changeCard() {
    const $list = document.getElementById("list").children;
    const $items = document.querySelectorAll(".list__item");
    const $item1 = $items[0].children;
    const $item2 = $items[1].children;
    const $item3 = $items[2].children;
    const $boxs = document.getElementById("box").children;

    document.addEventListener("click", (event) => {
        if (
            event.target == $list[0] ||
            event.target == $item1[0] ||
            event.target == $item1[1]
        ) {
            $list[0].classList.add("active");
            $item1[0].classList.add("active-icon");
            $item1[1].classList.add("active-text");
            $list[1].classList.remove("active");
            $item2[0].classList.remove("active-icon");
            $item2[1].classList.remove("active-text");
            $list[2].classList.remove("active");
            $item3[0].classList.remove("active-icon");
            $item3[1].classList.remove("active-text");
            $boxs[0].classList.add("active-block");
            $boxs[0].classList.remove("off-block");
            $boxs[1].classList.add("off-block");
            $boxs[2].classList.add("off-block");
            $boxs[1].classList.remove("active-block");
            $boxs[2].classList.remove("active-block");
        }
        else if (
            event.target == $list[1] ||
            event.target == $item2[0] ||
            event.target == $item2[1]
        ) {
            $list[0].classList.remove("active");
            $item1[0].classList.remove("active-icon");
            $item1[1].classList.remove("active-text");
            $list[1].classList.add("active");
            $item2[0].classList.add("active-icon");
            $item2[1].classList.add("active-text");
            $list[2].classList.remove("active");
            $item3[0].classList.remove("active-icon");
            $item3[1].classList.remove("active-text");
            $boxs[0].classList.remove("active-block");
            $boxs[0].classList.add("off-block");
            $boxs[1].classList.add("active-block");
            $boxs[1].classList.remove("off-block");
            $boxs[2].classList.remove("active-block");
            $boxs[2].classList.add("off-block");
        }
        else if (
            event.target == $list[2] ||
            event.target == $item3[0] ||
            event.target == $item3[1]
        ) {
            $list[0].classList.remove("active");
            $item1[0].classList.remove("active-icon");
            $item1[1].classList.remove("active-text");
            $list[1].classList.remove("active");
            $item2[0].classList.remove("active-icon");
            $item2[1].classList.remove("active-text");
            $list[2].classList.add("active");
            $item3[0].classList.add("active-icon");
            $item3[1].classList.add("active-text");
            $boxs[0].classList.remove("active-block");
            $boxs[1].classList.remove("active-block");
            $boxs[0].classList.add("off-block");
            $boxs[1].classList.add("off-block");
            $boxs[2].classList.add("active-block");
            $boxs[2].classList.remove("off-block");
        }
    });
}
changeCard();