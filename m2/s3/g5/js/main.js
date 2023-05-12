const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTI5Yjg4Zjc0MDAwMTQyODc0MzAiLCJpYXQiOjE2ODM4NzQ0NTksImV4cCI6MTY4NTA4NDA1OX0.ACkQXf6zVDzxCKSNDJczEXq6v5Muf3pxqueHx4Dajl0";

class Product {
    constructor(name, description, brand, image, downsize, price) {
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.image = image;
        this.downsize = downsize;
        this.price = price;
    }
}

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
        .catch((err) => console.log(err));
};
