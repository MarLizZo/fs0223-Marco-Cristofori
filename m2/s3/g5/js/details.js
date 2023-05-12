const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTI5Yjg4Zjc0MDAwMTQyODc0MzAiLCJpYXQiOjE2ODM4NzQ0NTksImV4cCI6MTY4NTA4NDA1OX0.ACkQXf6zVDzxCKSNDJczEXq6v5Muf3pxqueHx4Dajl0";
let addressContent = new URLSearchParams(window.location.search);
let id = addressContent.get("id");

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
                throw new Error("Something gone wrong..");
            }
        })
        .then((data) => {
            let col = document.getElementById("myCol");
            col.innerHTML = `
                <img class="rounded-2 mt-3" src="${data.imageUrl}">
                <h2 class="mt-3">${data.name}</h2>
                <h4>Brand: ${data.brand}</h4>
                <p class="mt-3">Description: ${data.description}</p>
                <p class="mb-0">Price: ${data.price}$</p>
                <div class="d-flex mt-4 w-100 justify-content-around">
                    <button class="btn btn-outline-warning px-4 mx-2">Shop Now</button>
                    <button class="btn btn-outline-warning px-4 mx-2">Add to Cart</button>
                </div>
            `;
        })
        .catch((err) => console.log(err));
};

window.onload = function () {
    getProductInfo();
};
