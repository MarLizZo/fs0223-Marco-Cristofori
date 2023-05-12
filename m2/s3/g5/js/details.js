const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTI5Yjg4Zjc0MDAwMTQyODc0MzAiLCJpYXQiOjE2ODM4NzQ0NTksImV4cCI6MTY4NTA4NDA1OX0.ACkQXf6zVDzxCKSNDJczEXq6v5Muf3pxqueHx4Dajl0";
let addressContent = new URLSearchParams(window.location.search);
let id = addressContent.get("id");

const showAlert = function (flag) {
    const alert = document.getElementById("alert-msg");
    const appendAlert = function () {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert alert-warning alert-dismissible" role="alert">`,
            !flag
                ? `<div>Magari al prossimo progetto eh..</div>`
                : `<div>Prodotto aggiunto al carrello (localStorage). Puoi chiudere questo alert!</div>`,
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        alert.append(wrapper);
    };
    appendAlert();
};

const addToCart = function (prod) {
    localStorage.setItem("prod_id", prod);
    showAlert(1);
};

const showErrorAlert = function (code) {
    const alert = document.getElementById("alert-msg");
    const appendAlert = function () {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
            `<div class="alert alert-danger alert-dismissible" role="alert">`,
            code == 404
                ? `<div>Error 404 -- Product does not exists. It is possibile that it has been deleted by the admin.</div>`
                : code == 401
                ? `<div>Error 401 -- You are not authorized to access to this product infos.</div>`
                : code == 400
                ? `<div>Errore 400 -- Bad request, contact the admin if this persist.</div>`
                : code == 500
                ? `<div>Error 500 -- The server is not responding, please try again later.</div>`
                : `<div>Error ${code} -- Contact the admin if this persist.</div>`,
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
        ].join("");
        alert.append(wrapper);
    };
    appendAlert();
};

const getProductInfo = function () {
    fetch(endpoint + id, {
        headers: {
            Authorization: authKey,
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.status);
            }
        })
        .then((data) => {
            let col = document.getElementById("myCol");
            col.innerHTML = `
                <img class="rounded-2 mt-2" src="${data.imageUrl}">
                <h2 class="mt-3">${data.name}</h2>
                <h4>Brand: ${data.brand}</h4>
                <p class="mt-3">Description: ${data.description}</p>
                <p class="mb-0">Price: ${data.price}$</p>
                <div class="d-flex mt-4 w-100 justify-content-around">
                    <button class="btn btn-outline-warning px-4 mx-2" onclick="showAlert(0)">Shop Now</button>
                    <button class="btn btn-outline-warning px-4 mx-2" onclick="addToCart('${data._id}')">Add to Cart</button>
                </div>
            `;
        })
        .catch((err) => {
            showErrorAlert(err.message);
        });
};

window.onload = function () {
    getProductInfo();
};
