const loadOne = document.getElementById("load-one");
const loadTwo = document.getElementById("load-two");
const searchForm = document.getElementById("search-photos");
let photoArr = [];
let btnsArr = document.querySelectorAll("main .btn-group button");

const setupEventCard = function (el, id) {
    el.addEventListener("click", () => {
        location.assign(`./details.html?id=${id}`);
    });
};

const buildCards = function () {
    let myBtns = [];
    btnsArr.forEach((el, i) => {
        if (i == 0) {
            myBtns.push(el);
        } else {
            if (i % 2 == 0) {
                myBtns.push(el);
            }
        }
    });
    photoArr.forEach((el, index) => {
        let newImg = document.createElement("img");
        newImg.classList.add("card-img-top");
        newImg.src = el.src.small;
        setupEventCard(newImg, el.id);

        let imgArr = document.querySelectorAll("main .card .card-img-top");

        imgArr[index].parentElement.replaceChild(newImg, imgArr[index]);
        document.querySelectorAll("small.text-muted")[index].innerText = el.id;
        document.querySelectorAll(".card-title")[index].innerText = el.alt;
        setupEventCard(document.querySelectorAll(".card-title")[index], el.id);

        myBtns[index].addEventListener("click", function () {
            setupModal(el.alt, el.src.medium);
        });
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
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Somethins gone wrong");
            }
        })
        .then((data) => {
            console.log(data);
            photoArr = data.photos;
            buildCards();
        })
        .catch((err) => {
            console.log(err);
        });
};

const setupModal = function (title, img) {
    let modal = document.getElementById("my-modal");
    modal.innerHTML = `
    <div class="modal-dialog">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-light" id="my-modal">${title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <img src="${img}" class="w-100">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
    `;
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
            el.setAttribute("data-bs-toggle", "modal");
            el.setAttribute("data-bs-target", "#my-modal");
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
                el.setAttribute("data-bs-toggle", "modal");
                el.setAttribute("data-bs-target", "#my-modal");
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
