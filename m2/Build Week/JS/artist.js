const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const endpointTrack =
    "https://striveschool-api.herokuapp.com/api/deezer/track/";
let urlBar = new URLSearchParams(window.location.search);
let artistid = urlBar.get("artistid");

const buttonF = document.getElementById("buttonFriends");
buttonF.addEventListener("click", () => {
    let imgAdd = document.getElementById("imgFriends");
    let colFriendsRemove = document.getElementById("containerFriends");
    colFriendsRemove.classList.add("d-none");
    imgAdd.classList.remove("d-none");

    let aside = document.getElementById("aside-col");
    aside.classList.remove("col-2");
    aside.classList.add("col-1");

    let main = document.getElementById("main-col");
    main.classList.remove("col-lg-8");
    main.classList.add("col-lg-9");
});

const buttonA = document.getElementById("buttonimgFriends");
buttonA.addEventListener("click", () => {
    let imgAdd = document.getElementById("imgFriends");
    let colFriendsRemove = document.getElementById("containerFriends");
    colFriendsRemove.classList.remove("d-none");
    imgAdd.classList.add("d-none");

    let aside = document.getElementById("aside-col");
    aside.classList.remove("col-1");
    aside.classList.add("col-2");

    let main = document.getElementById("main-col");
    main.classList.remove("col-lg-9");
    main.classList.add("col-lg-8");
});

const getTracks = function (param) {
    fetch(param)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.message);
            }
        })
        .then((data) => {
            let row = document.getElementById("artists-tracks");
            row.innerHTML = "";
            data.data.forEach((track, index) => {
                row.innerHTML += `
                <div class="col-12 d-flex align-items-center mb-3 justify-content-between">
                  <div class="col-7 d-flex align-items-center">
                    <span class="text-white-50">${index + 1}</span>
                    <img class="w-img ms-3" src="${
                        track.album.cover_small
                    }" alt="img" />
                    <h4 class="mb-0 ms-3 fs-6 pointer" onclick="fetchTrack(${
                        track.id
                    })">${track.title_short}</h4>
                  </div>
                  <div class="col-3">
                    <span class="me-2 text-white-50">${track.rank}</span>
                  </div>
                  <div class="col-2">
                    <span class="text-white-50">${track.duration}</span>
                  </div>
                </div>
                `;
            });
        })
        .catch((err) => console.log(err));
};

const goToSearch = function (id) {
    location.assign("./search.html?param=" + id);
};

const buildPage = function (oggetto, tracks) {
    document.getElementById("artist-name").innerText = oggetto.name;
    document.getElementById("art-name").innerText = oggetto.name;

    document.getElementById("artist-listener").innerText =
        oggetto.nb_fan + " ascolti mensili";
    let bg = document.getElementById("bg-image");
    bg.style.backgroundImage = `url(${oggetto.picture_xl})`;
    getTracks(tracks);
};

const getArtist = function () {
    fetch(endpoint + artistid)
        .then((res) => {
            if (res.ok) {
                console.log(res);
                return res.json();
            } else {
                throw new Error("Errore nel caricamento della risposta");
            }
        })
        .then((data) => {
            console.log("Artist: ", data);
            buildPage(data, data.tracklist);
        })
        .catch((err) => {
            console.log(err);
        });
};

let selectedTrack = null;

const playAudio = async function () {
    if (selectedTrack) {
        var audio = new Audio(selectedTrack);
        audio.type = "audio/mp3";

        try {
            await audio.play();
            minutaggio();
            console.log("Playing...");
        } catch (err) {
            console.log("Failed to play..." + err);
        }
    }
};

const fetchTrack = function (id) {
    fetch(endpointTrack + id)
        .then((res) => {
            if (res.ok) {
                console.log(res);
                return res.json();
            } else {
                throw new Error(res.message);
            }
        })
        .then((data) => {
            console.log(data);
            document.querySelector(".img-player").src = data.album.cover_medium;
            document.getElementById("footer-title").innerText =
                data.title_short;
            document.getElementById("footer-artist").innerText =
                data.artist.name;
            document.getElementById("badge-song").innerText = data.title_short;
            document.getElementById("badge-artist").innerText =
                data.artist.name;
            selectedTrack = data.preview;
            playAudio();
        })
        .catch((err) => console.log(err));
};

/* MINUTAGGIO ANIMATO */

let counter = 0;

const minutaggio = function () {
    document.querySelector(".total-duration").innerText = `00:30`;
    let seconds = document.querySelector(".current-time");
    let slider = document.querySelector(".slider_container input");
    slider.setAttribute("value", 0);
    seconds.innerText = "00:00";
    slider.setAttribute("max", 30);

    let timer = setInterval(() => {
        if (counter == 30) {
            clearInterval(timer);
            counter = 0;
        } else {
            counter++;
            counter < 10
                ? (seconds.innerText = "00:0" + counter)
                : (seconds.innerText = "00:" + counter);
            slider.setAttribute("value", counter);
        }
    }, 1000);
};

getArtist();

document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let param = document.getElementById("search-input").value;
    console.log("Ricerca: " + param);
    goToSearch(param);
});
