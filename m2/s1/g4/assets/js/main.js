let scrolledDown = false;
let scrolledUp = false;
let userScreen = window.screen.width; // determine the screen size

function setScroll(flag) {
    let btn = document.getElementById("myBtn");
    let nav = document.getElementById("myNav");
    if (flag) {
        scrolledUp = true;
        scrolledDown = false;
        btn.classList.add("btn-scrolled");
        btn.classList.remove("btn-orig");
        nav.classList.add("nav-scrolled");
        nav.classList.remove("nav-orig");
    } else {
        scrolledDown = true;
        scrolledUp = false;
        btn.classList.remove("btn-scrolled");
        btn.classList.add("btn-orig");
        nav.classList.add("nav-orig");
        nav.classList.remove("nav-scrolled");
    }
}

document.addEventListener("scroll", (e) => {
    if (userScreen > 904) {
        if (window.scrollY > 270) {
            if (!scrolledUp) {
                setScroll(true);
            }
        } else {
            if (!scrolledDown) {
                setScroll(false);
            }
        }
    } else if (userScreen < 904) {
        if (window.scrollY > 180) {
            if (!scrolledUp) {
                setScroll(true);
            }
        } else {
            if (!scrolledDown) {
                setScroll(false);
            }
        }
    }
});

let paths = document.querySelectorAll("g[opacity='1'] path");

setInterval(() => {
    let randInt = Math.floor(Math.random() * (paths.length - 1));
    paths[randInt].parentElement.style.opacity == 0
        ? (paths[randInt].parentElement.style.opacity = 1)
        : (paths[randInt].parentElement.style.opacity = 0);
}, 200);
