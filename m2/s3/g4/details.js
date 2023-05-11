const buildCol = function (photo) {
    let myCol = document.querySelector(".col-10");
    document.querySelector("header").style.backgroundColor = photo.avg_color;
    myCol.innerHTML = `
        <img src="${photo.src.medium}" class="w-100">
        <div class="mt-3">
            <h2 id="title">${photo.alt}</h2>
            <h4 id="artist">Creatore: ${photo.photographer}</h4>
            <p id="link-artist">Link pagina creatore: <a href="${photo.photographer_url}">${photo.photographer_url}</a></p>
        </div>
    `;
};

const getImage = function () {
    let addressContent = new URLSearchParams(window.location.search);
    let id = addressContent.get("id");

    fetch(`https://api.pexels.com/v1/photos/${id}`, {
        method: "GET",
        headers: {
            Authorization:
                "6hlm8Af8LfWsMnm45DhhuybrEcJU7xBCTyQRZIeFFOqTIYrDNa3S48EO",
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Something gone wrong");
            }
        })
        .then((img) => {
            console.log(img);
            buildCol(img);
        })
        .catch((err) => console.log(err));
};

window.onload = function () {
    getImage();
};
