const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTI5Yjg4Zjc0MDAwMTQyODc0MzAiLCJpYXQiOjE2ODM4NzQ0NTksImV4cCI6MTY4NTA4NDA1OX0.ACkQXf6zVDzxCKSNDJczEXq6v5Muf3pxqueHx4Dajl0";
const prodArr = [];
const prodArrOut = [];

const buildPage = function (flag) {
    if (flag) {
        //build
    } else {
        //no items
    }
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

const fetchProducts = function (id) {
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
            prodArrOut.push(data);
        })
        .catch((err) => showErrorAlert(err.message));
};

const getStorage = function () {
    if (localStorage.getItem("your_cart")) {
        prodArr = JSON.parse(localStorage.getItem("your_cart"));
        if (prodArr.length < 1) {
            buildPage(0);
        } else {
            prodArr.forEach((el) => {
                fetchProducts(el.id);
            });
            buildPage(1);
        }
    }
};

window.onload = function () {
    getStorage();
};
