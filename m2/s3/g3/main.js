const endpoint = "https://striveschool-api.herokuapp.com/books";
let booksArray = [];
const windowWidth = window.screen.width;
let btnAddIdCounter = 0;
let btnDisIdCounter = 0;
let cartBooks = [];

const discardFunc = function (element) {
    element.classList.add("d-none");
};

const addToCart = function (element) {
    cartBooks.push(booksArray[Number(element.getAttribute("value"))]);
    console.log(booksArray[Number(element.getAttribute("value"))]);
    document.getElementById("cart-counter").innerText = cartBooks.length;

    localStorage.setItem("booksInCart", JSON.stringify(cartBooks));
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
            let p_1 = this.parentElement;
            let p_2 = p_1.parentElement;
            discardFunc(p_2.parentElement);
        });

        btnAddIdCounter++;
        btnDisIdCounter++;

        // let newDiv = document.createElement("div");
        // newDiv.classList.add(
        //     "card",
        //     "px-0",
        //     "d-flex",
        //     "flex-column",
        //     "align-items-center",
        //     "justify-content-between",
        //     "bg-dark",
        //     "text-light",
        //     "border-secondary",
        //     "h-100"
        // );

        // let image = document.createElement("img");
        // image.src = el.img;
        // windowWidth > 992
        //     ? image.classList.add("card-img-top", "w-75")
        //     : image.classList.add("card-img-top", "w-50");
        // newDiv.appendChild(image);

        // let divInfo = document.createElement("div");
        // divInfo.classList.add(
        //     "d-flex",
        //     "flex-column",
        //     "w-100",
        //     "align-items-center"
        // );

        // let title = document.createElement("h5");
        // title.classList.add("card-title", "mt-3");
        // title.innerText = el.title;
        // divInfo.appendChild(title);

        // let info = document.createElement("p");
        // info.classList.add("card-text");
        // info.innerText = "Price: " + el.price + "$";
        // divInfo.appendChild(info);

        // let btnAdd = document.createElement("button");
        // btnAdd.classList.add(
        //     "btn",
        //     "btn-sm",
        //     "btn-primary",
        //     "border-0",
        //     "mt-2",
        //     "w-75"
        // );
        // btnAdd.innerText = "Add to Cart";
        // divInfo.appendChild(btnAdd);

        // let btnDc = document.createElement("button");
        // btnDc.classList.add(
        //     "btn",
        //     "btn-sm",
        //     "btn-danger",
        //     "border-0",
        //     "my-2",
        //     "w-75"
        // );
        // btnDc.innerText = "Remove Book";
        // divInfo.appendChild(btnDc);
        // btnDc.addEventListener("click", function () {
        //     let p_1 = this.parentElement;
        //     let p_2 = p_1.parentElement;
        //     discardFunc(p_2.parentElement);
        // });

        // newDiv.appendChild(divInfo);
        // newCol.appendChild(newDiv);
    });
};

document.getElementById("btn-cart").addEventListener("click", function () {
    cartBooks.forEach((el) => {
        myUl = document.getElementById("list-cart");
        let newLi = document.createElement("li");
        newLi.classList.add("my-1");
        newLi.innerHTML = `<span class="text-info fw-bold m-0">Book: </span><span class="m-0">${el.title}</span> <span class="m-0">||</span> <span class="m-0 text-info fw-bold"> Price:</span> <span class="m-0">${el.price}$</span>`;
        myUl.appendChild(newLi);
    });
});

window.onload = function () {
    if (localStorage.getItem("booksInCart")) {
        let savedArr = JSON.parse(localStorage.getItem("booksInCart"));
        document.getElementById("cart-counter").innerText = savedArr.length;
        savedArr.forEach((el) => {
            cartBooks.push(el);
        });
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
