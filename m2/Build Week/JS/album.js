const endpointTrack =
    "https://striveschool-api.herokuapp.com/api/deezer/track/";
const album_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let urlBar = new URLSearchParams(window.location.search);
let albumid = urlBar.get("albumid");

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

const goToArtist = function (id) {
    location.assign("./artist.html?artistid=" + id);
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
            selectedTrack = data.preview;
            document.getElementById("badge-song").innerText = data.title_short;
            document.getElementById("badge-artist").innerText =
                data.artist.name;
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

const getAlbum = function () {
    fetch(album_URL + albumid)
        .then((res) => {
            if (res.ok) {
                console.log(res);
                return res.json();
            } else {
                throw new Error("Errore nel caricamento della risposta");
            }
        })
        .then((data) => {
            console.log("Album: ", data);

            let colAlbum = document.getElementById("albumList");
            colAlbum.innerHTML = `
            <img src="${data.cover_xl}" class="big-album-image pointer" id="img-alb">
                <div class="d-flex flex-column ms-4 w-100">
                <h6 class="mb-3 d-none d-lg-flex">ALBUM</h6>
                <h1 id="songTitle" class="fw-bold mb-3 pointer mt-3 mt-lg-0">${data.title}</h1>
                    <div class="d-flex align-items-center">
                        <p class="m-0 fw-bold pointer" onclick="goToArtist(${data.artist.id})">${data.artist.name}</p><span class="d-none d-lg-flex">&nbsp;-&nbsp;</span>
                        <p class="m-0 d-none d-lg-flex">${data.release_date}</p><span class="d-none d-lg-flex">&nbsp;-&nbsp;</span>
                        <p class="m-0 d-none d-lg-flex fw-bold">${data.nb_tracks}</p><span class="d-none d-lg-flex">,&nbsp;</span>
                        <p class="m-0 d-none d-lg-flex">${data.duration}</p>
                    </div>
                </div>
            `;

            let colTracks = document.getElementById("tracks-list");
            colTracks.innerHTML = "";
            data.tracks.data.forEach((track, index) => {
                colTracks.innerHTML += `
                <div class="row w-100 mx-0 mb-2 mt-1">
                            <div class="col-7 p-0 px-2">
                                <div class="d-flex align-items-center">
                                    <p class="m-0 text-secondary fs-5">${
                                        index + 1
                                    }</p>
                                    <div class="d-flex flex-column ms-3">
                                        <h6 class="m-0 pointer" onclick="fetchTrack(${
                                            track.id
                                        })">${track.title}</h6>
                                        <p class="m-0 text-secondary">${
                                            track.artist.name
                                        }</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 px-2 text-secondary d-flex flex-column align-items-end">
                                <p class="m-0 text-secondary">${track.rank}</p>
                            </div>
                            <div class="col-2 p-0 px-2 d-flex flex-column align-items-end">
                                <p class="m-0 text-secondary">${
                                    track.duration
                                }</p>
                            </div>
                        </div>`;
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

const goToSearch = function (id) {
    location.assign("./search.html?param=" + id);
};

window.onload = function () {
    getAlbum();
    document
        .getElementById("search-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            let param = document.getElementById("search-input").value;
            console.log("Ricerca: " + param);
            goToSearch(param);
        });
};
