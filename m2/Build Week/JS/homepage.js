const endpointSearch =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const endpointTrack =
    "https://striveschool-api.herokuapp.com/api/deezer/track/";
const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

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

const goToAlbum = function (id) {
    location.assign("./album.html?albumid=" + id);
};

const goToArtist = function (id) {
    location.assign("./artist.html?artistid=" + id);
};

const goToSearch = function (id) {
    location.assign("./search.html?param=" + id);
};

const costruisciCard = function (oggetto) {
    let row = document.getElementById("row-album-1");
    let row2 = document.getElementById("row-album-2");
    let row3 = document.getElementById("row-album-3");
    row.innerHTML = "";
    row2.innerHTML = "";
    row3.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        row.innerHTML += `
        <div class="col">
            <div class="card h-100 bg-dark text-light d-flex flex-column">
                <img src="${oggetto[i].album.cover_medium}" class="card-img-top align-self-center custom-img-card mt-2">
                <div class="card-body">
                    <h5 class="card-title pointer" onclick="fetchTrack(${oggetto[i].id})">${oggetto[i].title_short}</h5>
                    <p class="card-text font-09 mb-1 pointer" onclick="goToArtist(${oggetto[i].artist.id})">Artista: ${oggetto[i].artist.name}</p>
                    <p class="card-text font-09 pointer" onclick="goToAlbum(${oggetto[i].album.id})">Album: ${oggetto[i].album.title}</p>
                </div>
                <div class="d-lg-none ms-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill pointer like" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                     </svg>
                     <i class="bi bi-three-dots-vertical text-white ms-3"></i>
                </div>   
            </div>
        </div>
        `;
    }
    for (let i = 4; i < 8; i++) {
        row2.innerHTML += `
        <div class="col">
            <div class="card h-100 bg-dark text-light d-flex flex-column">
                <img src="${oggetto[i].album.cover_medium}" class="card-img-top align-self-center custom-img-card mt-2">
                <div class="card-body">
                    <h5 class="card-title pointer" onclick="fetchTrack(${oggetto[i].id})">${oggetto[i].title_short}</h5>
                    <p class="card-text font-09 mb-1 pointer" onclick="goToArtist(${oggetto[i].artist.id})">Artista: ${oggetto[i].artist.name}</p>
                    <p class="card-text font-09 pointer" onclick="goToAlbum(${oggetto[i].album.id})">Album: ${oggetto[i].album.title}</p>
                </div>
                <div class="d-lg-none ms-3 mb-3">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill pointer like" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    <i class="bi bi-three-dots-vertical text-white ms-3"></i>
                </div>
            </div>
        </div>
        `;
    }
    for (let i = 8; i < 12; i++) {
        row3.innerHTML += `
        <div class="col">
            <div class="card h-100 bg-dark text-light d-flex flex-column">
                <img src="${oggetto[i].album.cover_medium}" class="card-img-top align-self-center custom-img-card mt-2">
                <div class="card-body">
                    <h5 class="card-title pointer" onclick="fetchTrack(${oggetto[i].id})">${oggetto[i].title_short}</h5>
                    <p class="card-text font-09 mb-1 pointer" onclick="goToArtist(${oggetto[i].artist.id})">Artista: ${oggetto[i].artist.name}</p>
                    <p class="card-text font-09 pointer" onclick="goToAlbum(${oggetto[i].album.id})">Album: ${oggetto[i].album.title}</p>
                </div>
                <div class=" d-lg-none ms-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill pointer like" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    <i class="bi bi-three-dots-vertical text-white ms-3"></i> 
                </div>
            </div>
        </div>
        `;
    }

    let likeSong = document.querySelectorAll(".like")
    likeSong.forEach((s) => {
        s.addEventListener("click", () => {
            if(s.style.color == "rgb(30, 215, 96)") {
                s.style.color = "rgb(255, 255, 255)";                
            }else{
                s.style.color = "rgb(30, 215, 96)"
            }console.log(s.style.color);
        })
    })
};

const fetchInit = function (param) {
    fetch(endpointSearch + param)
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
            costruisciCard(data.data);
        })
        .catch((err) => console.log(err));
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

const customFetch = function () {
    fetch(endpointSearch + "chillstep")
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
            let myTrack = data.data[2];
            selectedTrack = `${myTrack.preview}`;
            document.getElementById("type-copertina").innerText =
                myTrack.type.toUpperCase();
            document.getElementById("immagine-copertina").src =
                myTrack.album.cover_xl;
            let track = document.getElementById("name-copertina");
            track.innerText = myTrack.title;
            let album = document.getElementById("album-copertina");
            album.innerText = myTrack.artist.name;

            document.getElementById("mobile-title").innerText =
                myTrack.title_short;
            document.getElementById("badge-song").innerText =
                myTrack.title_short;
            document.getElementById("badge-artist").innerText =
                myTrack.artist.name;

            document.querySelector(".img-player").src =
                myTrack.album.cover_medium;
            document.getElementById("footer-title").innerText =
                myTrack.title_short;
            document.getElementById("footer-artist").innerText =
                myTrack.artist.name;

            track.addEventListener("click", function () {
                selectedTrack = `${myTrack.preview}`;
                playAudio();
            });

            album.addEventListener("click", () => {
                goToAlbum(myTrack.album.id);
            });
        })
        .catch((err) => console.log(err));
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
            let img = document.getElementById("immagine-copertina");
            let type = document.getElementById("type-copertina");
            let track = document.getElementById("name-copertina");
            let album = document.getElementById("album-copertina");

            let m_name = document.getElementById("mobile-title");
            let b_name = document.getElementById("badge-song");
            let a_name = document.getElementById("badge-artist");

            document.querySelector(".img-player").src = data.album.cover_medium;
            document.getElementById("footer-title").innerText =
                data.title_short;
            document.getElementById("footer-artist").innerText =
                data.artist.name;

            img.src = data.album.cover_xl;
            type.innerText = data.type;
            track.innerText = data.title_short;
            m_name.innerText = data.title_short;
            b_name.innerText = data.title_short;
            a_name.innerText = data.artist.name;
            album.innerText = data.album.title;
            selectedTrack = data.preview;
        })
        .catch((err) => console.log(err));
};

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

const setVar = function () {
    let div = document.getElementById("myVid");
    div.classList.remove("d-none");
    document.getElementsByTagName("footer")[0].classList.add("d-none");
};

window.onload = function () {
    fetchInit("green day");
    customFetch();
    document.getElementById("btn-play").addEventListener("click", () => {
        playAudio();
    });
    document
        .getElementById("search-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            let param = document.getElementById("search-input").value;
            if (param == "epicode") {
                setVar();
            } else {
                goToSearch(param);
            }
        });
    document.getElementById("gaming-tracks").addEventListener("click", () => {
        goToSearch("gaming music");
    });
    document.getElementById("kickass-metal").addEventListener("click", () => {
        goToSearch("metal");
    });
    document.getElementById("punk-tracks").addEventListener("click", () => {
        goToSearch("punk");
    });
    document.getElementById("hits-tracks").addEventListener("click", () => {
        goToSearch("greatest hits");
    });
    document.getElementById("sleep-tracks").addEventListener("click", () => {
        goToSearch("sleep sound");
    });
    document.getElementById("focus-tracks").addEventListener("click", () => {
        goToSearch("focus music");
    });
};
