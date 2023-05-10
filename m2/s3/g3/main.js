const endpoint = "https://striveschool-api.herokuapp.com/books";
let booksArray = [];
const windowWidth = window.screen.width;
let btnAddIdCounter = 0;
let btnDisIdCounter = 0;
let btnDelSingleElCart = 0;
let cartBooks = [];

const discardFunc = function (element) {
    element.remove();
};

const delSingleElCart = function (element) {
    if (localStorage.getItem("booksInCart")) {
        let parsed = JSON.parse(localStorage.getItem("booksInCart"));
        const index = parsed.findIndex(
            (book) => element.getAttribute("value") == book.asin
        );
        parsed.splice(index, 1);
        cartBooks.splice(index, 1);
        if (parsed.length == 0) {
            localStorage.removeItem("booksInCart");
        } else {
            localStorage.setItem("booksInCart", JSON.stringify(parsed));
        }
    }
    element.parentElement.remove();
    document.getElementById("cart-counter").innerText = cartBooks.length;
};

const createLis = function () {
    let myUl = document.getElementById("list-cart");
    myUl.innerHTML = "";
    cartBooks.forEach((el) => {
        let newLi = document.createElement("li");
        newLi.classList.add("my-2", "d-flex", "justify-content-center");
        newLi.innerHTML = `<span class="text-info fw-bold m-0">Book:&nbsp;</span><span class="m-0">${el.title}</span> <span class="m-0">&nbsp;||&nbsp;</span><span class="m-0 text-info fw-bold">&nbsp;Price:&nbsp;</span> <span class="m-0">${el.price}$</span>
            <button value="${el.asin}" id="btn-del-s-cart-${btnDelSingleElCart}" class="btn btn-danger px-4 py-1 border-1 ms-3 custom-btn">Delete</button>`;
        myUl.appendChild(newLi);

        let delBtn = document.getElementById(
            `btn-del-s-cart-${btnDelSingleElCart}`
        );
        delBtn.addEventListener("click", function () {
            delSingleElCart(this);
        });
        btnDelSingleElCart++;
    });
};

const addToCart = function (element) {
    cartBooks.push(booksArray[Number(element.getAttribute("value"))]);
    document.getElementById("cart-counter").innerText = cartBooks.length;
    localStorage.setItem("booksInCart", JSON.stringify(cartBooks));

    createLis();
};

const buildCards = function () {
    booksArray.forEach((el) => {
        let myRow = document.getElementById("myRow");
        let newCol = document.createElement("div");
        newCol.classList.add("col", "my-4");
        newCol.innerHTML = `<div class="card px-0 d-flex flex-column align-items-center justify-content-between bg-dark text-light border-secondary h-100">
            <img src="${el.img}" class="card-img-top w-50">
                <div class="d-flex flex-column w-100 align-items-center">
                    <h5 class="card-title mt-3">${el.title}</h5>
                    <p class="card-text">Price: ${el.price}$</p>
                        <button value="${btnAddIdCounter}" id="add-btn-${btnAddIdCounter}" class="btn btn-sm btn-primary border-0 mt-2">Add to Cart</button>
                        <button id="dis-btn-${btnDisIdCounter}" class="btn btn-sm btn-danger border-0 my-2">Remove Book</button>
                    </div>
                </div>`;

        myRow.appendChild(newCol);

        let actualAddBtn = document.getElementById(
            `add-btn-${btnAddIdCounter}`
        );
        let actualDisBtn = document.getElementById(
            `dis-btn-${btnDisIdCounter}`
        );

        actualAddBtn.addEventListener("click", function () {
            addToCart(this);
        });

        actualDisBtn.addEventListener("click", function () {
            discardFunc(this.closest(".col"));
        });

        btnAddIdCounter++;
        btnDisIdCounter++;
    });
};

window.onload = function () {
    fetch(endpoint)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Something gone wrong..");
            }
        })
        .then((data) => {
            booksArray = data;
            buildCards();
        })
        .catch((err) => {
            console.log(err);
        });

    if (localStorage.getItem("booksInCart")) {
        let savedArr = JSON.parse(localStorage.getItem("booksInCart"));
        document.getElementById("cart-counter").innerText = savedArr.length;
        savedArr.forEach((el) => {
            cartBooks.push(el);
        });
        createLis();
    }

    document.getElementById("del-cart").addEventListener("click", function () {
        cartBooks = [];
        document.getElementById("cart-counter").innerText = 0;
        document.getElementById("list-cart").innerHTML = "";
        if (localStorage.getItem("booksInCart")) {
            localStorage.removeItem("booksInCart");
        }
    });
};
