const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTI5Yjg4Zjc0MDAwMTQyODc0MzAiLCJpYXQiOjE2ODM4NzQ0NTksImV4cCI6MTY4NTA4NDA1OX0.ACkQXf6zVDzxCKSNDJczEXq6v5Muf3pxqueHx4Dajl0";
let productsArr = [];

const goToEditPage = function (id) {
    location.assign(`./admin.html?id=${id}`);
};
const goToDetailsPage = function (id) {
    location.assign("./details.html?id=" + id);
};

const buildCols = function () {
    let row = document.getElementById("prod-row");
    row.innerHTML = "";
    productsArr.forEach((el) => {
        row.innerHTML += `
        <div class="col-12 d-flex flex-column flex-sm-row align-items-center ">
                <img src="${el.imageUrl}" class="rounded-2">
                <div class="d-flex flex-column mt-3 mt-sm-0 ms-sm-3">
                    <div>
                        <h5>${el.name}</h5>
                        <p class="mb-2">Brand: ${el.brand}</p>
                        <p>Price: ${el.price}$</p>
                    </div>
                    <div class="d-flex">
                        <button class="btn btn-outline-warning py-1 me-3">View Product Details</button>
                        <a href="./admin.html?id=${el._id}"><button class="btn btn-outline-warning py-1">Edit Product</button></a>
                    </div>
                </div>
            </div>
        `;
    });
};

const getAllProducts = function () {
    fetch(endpoint, {
        headers: {
            Authorization: authKey,
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                if (res.status == 400) {
                    throw new Error("Error 400, Bad Request!");
                } else if (res.status == 401) {
                    throw new Error("Error 401, Unhauthorized!");
                } else if (res.status == 404) {
                    throw new Error("Error 404, Not Found!");
                }
            }
        })
        .then((data) => {
            console.log(data);
            productsArr = data;
            buildCols();
        })
        .catch((err) => console.log(err));
};

window.onload = function () {
    getAllProducts();
};
