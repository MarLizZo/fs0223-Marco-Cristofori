const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTI5Yjg4Zjc0MDAwMTQyODc0MzAiLCJpYXQiOjE2ODM4NzQ0NTksImV4cCI6MTY4NTA4NDA1OX0.ACkQXf6zVDzxCKSNDJczEXq6v5Muf3pxqueHx4Dajl0";
const form = document.getElementById("myForm");
let addressContent = new URLSearchParams(window.location.search);
let id = addressContent.get("id");

class Product {
    constructor(name, description, brand, imageUrl, price) {
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}

const deleteProduct = function (id) {
    fetch(endpoint + id, {
        method: "DELETE",
        headers: {
            Authorization: authKey,
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (res.ok) {
                location.assign("./index.html");
            } else {
                throw new Error("Something gone wrong..");
            }
        })
        .catch((err) => console.log(err));
};

const postNewProduct = function (product, id = null) {
    fetch(id ? endpoint + id : endpoint, {
        method: id ? "PUT" : "POST",
        headers: {
            Authorization: authKey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })
        .then((res) => {
            if (res.ok) {
                location.assign("./index.html");
            } else {
                const alert = document.getElementById("alert-msg");
                const appendAlert = function () {
                    const wrapper = document.createElement("div");
                    wrapper.innerHTML = [
                        `<div class="alert alert-danger alert-dismissible" role="alert">`,
                        `   <div>Something gone wrong while creating new Product.. Error code: ${res.status}</div>`,
                        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                        "</div>",
                    ].join("");
                    alert.append(wrapper);
                };
                appendAlert();
            }
        })
        .catch((err) => console.log("Something gone wrong.. " + err));
};

const setupForm = function () {
    inputsArr = form.querySelectorAll("input");

    if (id) {
        let btn = form.querySelector("button");
        btn.innerText = "Edit Product";
        fetch(endpoint + id, {
            headers: {
                Authorization: authKey,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Something gone wrong..");
                }
            })
            .then((data) => {
                inputsArr[0].value = data.name;
                inputsArr[1].value = data.description;
                inputsArr[2].value = data.brand;
                inputsArr[3].value = data.imageUrl;
                inputsArr[4].value = data.price;
            })
            .catch((err) => console.log(err));
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let prod = new Product(
            inputsArr[0].value,
            inputsArr[1].value,
            inputsArr[2].value,
            inputsArr[3].value,
            inputsArr[4].value
        );

        id ? postNewProduct(prod, id) : postNewProduct(prod);
    });
};

const setupDelBtn = function () {
    let btn = document.getElementById("del-btn");
    if (id) {
        btn.addEventListener("click", function () {
            deleteProduct(id);
        });
    } else {
        btn.classList.add("d-none");
    }
};

window.onload = function () {
    setupForm();
    setupDelBtn();
};
