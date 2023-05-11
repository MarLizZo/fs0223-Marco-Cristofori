const loadOne = document.getElementById("load-one");
const loadTwo = document.getElementById("load-two");
const searchForm = document.getElementById("search-photos");
let photoArr = [];
let btnsArr = document.querySelectorAll("main .btn-group button");

const buildCards = function () {
    photoArr.forEach((el, index) => {
        let newImg = document.createElement("img");
        newImg.classList.add("card-img-top");
        newImg.src = el.src.small;
        let imgArr = document.querySelectorAll("main .card .card-img-top");
        imgArr[index].parentElement.replaceChild(newImg, imgArr[index]);
        document.querySelectorAll("small.text-muted")[index].innerText = el.id;
    });
};

const getImages = function (param) {
    fetch(
        `https://api.pexels.com/v1/search?query=${param}&per_page=9&size=small&orientation=landscape`,
        {
            method: "GET",
            headers: {
                Authorization:
                    "6hlm8Af8LfWsMnm45DhhuybrEcJU7xBCTyQRZIeFFOqTIYrDNa3S48EO",
            },
        }
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            photoArr = data.photos;
            buildCards();
        });
};

window.onload = function () {
    loadOne.addEventListener("click", () => getImages("space"));
    loadTwo.addEventListener("click", () => getImages("waterfall"));
    btnsArr.forEach((el, index) => {
        if (index == 0) {
            el.classList.replace(
                "btn-outline-secondary",
                "btn-outline-primary"
            );
        } else {
            if (index % 2 != 0) {
                el.innerText = "Hide";
                el.classList.replace(
                    "btn-outline-secondary",
                    "btn-outline-danger"
                );
                el.addEventListener("click", function () {
                    this.closest(".col-md-4").remove();
                });
            } else {
                el.classList.replace(
                    "btn-outline-secondary",
                    "btn-outline-primary"
                );
                //modal
            }
        }
    });
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let input = searchForm.querySelector("input");
        getImages(input.value);
        input.value = "";
    });
};
