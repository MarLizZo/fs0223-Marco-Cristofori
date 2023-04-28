let scrolledDown = false;
let scrolledUp = false;

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 280) {
        if (!scrolledUp) {
            scrolledUp = true;
            scrolledDown = false;
            let btn = document.getElementById("myBtn");
            let nav = document.getElementById("myNav");
            btn.classList.add("btn-scrolled");
            btn.classList.remove("btn-orig");

            nav.classList.add("nav-scrolled");
            nav.classList.remove("nav-orig");
        }
    } else {
        if (!scrolledDown) {
            scrolledDown = true;
            scrolledUp = false;
            let btn = document.getElementById("myBtn");
            let nav = document.getElementById("myNav");
            btn.classList.remove("btn-scrolled");
            btn.classList.add("btn-orig");

            nav.classList.add("nav-orig");
            nav.classList.remove("nav-scrolled");
        }
    }
})

let paths = document.querySelectorAll("g[opacity='1'] path");

setInterval(() => {
    let randInt = Math.floor(Math.random() * (paths.length - 1));
    let randBool = Math.floor(Math.random() * 2);
    if (randBool) {
        paths[randInt].parentElement.style.opacity = 1;
    } else {
        paths[randInt].parentElement.style.opacity = 0;
    }
}, 200)
