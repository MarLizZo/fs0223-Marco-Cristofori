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