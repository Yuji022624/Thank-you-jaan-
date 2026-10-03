/* =====================================
   GET ELEMENTS
===================================== */

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

const openBtn = document.getElementById("openBtn");
const moreBtn = document.getElementById("moreBtn");
const lastBtn = document.getElementById("lastBtn");


/* =====================================
   CHANGE SCREEN
===================================== */

function showScreen(number) {

    const screens = [
        screen1,
        screen2,
        screen3,
        screen4
    ];

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    screens[number - 1].classList.add("active");
}


/* =====================================
   BUTTONS
===================================== */

openBtn.addEventListener("click", function() {

    showScreen(2);

});


moreBtn.addEventListener("click", function() {

    showScreen(3);

});


lastBtn.addEventListener("click", function() {

    showScreen(4);

});


/* =====================================
   CREATE STARS
===================================== */

const stars = document.getElementById("stars");

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.animationDuration =
        1.5 + Math.random() * 3 + "s";

    stars.appendChild(star);
}


/* =====================================
   FLOATING HEARTS
===================================== */

const hearts =
    document.getElementById("hearts");

const heartList = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "✨"
];


function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "float-heart";


    heart.innerHTML =
        heartList[
            Math.floor(
                Math.random() *
                heartList.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        12 +
        Math.random() * 22 +
        "px";


    const duration =
        5 +
        Math.random() * 5;


    heart.style.animationDuration =
        duration + "s";


    hearts.appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, duration * 1000);
}


setInterval(
    createHeart,
    500
);