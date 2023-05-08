let user_1 = null;
let user_2 = null;

let forms = document.querySelectorAll("form");

forms.forEach((value) => {
    value.addEventListener("submit", (el) => el.preventDefault());
});

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    static compareAges(x, y) {
        return x.age > y.age
            ? `${x.firstName} è più vecchio di ${y.firstName}`
            : x.age == y.age
            ? `${x.firstName} e ${y.firstName} hanno la stessa età`
            : `${y.firstName} è più vecchio di ${x.firstName}`;
    }
}

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    static compareOwner(x, y) {
        return x === y ? true : false;
    }
}

let form_users = document.getElementById("form-users");

form_users.addEventListener("submit", (el) => {
    const inputs = form_users.querySelectorAll("input");
    let p_info = document.getElementById("p-info");
    if (user_1 == null && user_2 == null) {
        user_1 = new User(
            inputs[0].value,
            inputs[1].value,
            inputs[2].value,
            inputs[3].value
        );
        p_info.classList.remove("d-none");
        setTimeout(() => p_info.classList.add("d-none"), 3000);
    } else {
        user_2 = new User(
            inputs[0].value,
            inputs[1].value,
            inputs[2].value,
            inputs[3].value
        );
        let my_p = document.getElementById("result-compare-ages");
        my_p.innerText = User.compareAges(user_1, user_2);
        p_info.innerText = "Operazione conclusa con successo!";
        p_info.classList.remove("d-none");
    }
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
});

let pets = [];
let form_pets = document.getElementById("form-pets");

form_pets.addEventListener("submit", () => {
    const inputs = form_pets.querySelectorAll("input");
    const pets_ul = document.getElementById("pets-list");
    let pet_info = document.getElementById("pet-info");

    if (inputs[0].value != "") {
        pets.push(
            new Pet(
                inputs[0].value,
                inputs[1].value,
                inputs[2].value,
                inputs[3].value
            )
        );

        let newPet = document.createElement("li");
        newPet.classList.add("bg-secondary", "ps-2", "text-light");
        newPet.innerText = inputs[0].value;
        pets_ul.appendChild(newPet);
        newPet.addEventListener("click", function () {
            document.getElementById("list-pet-name").innerText =
                pets[pets.length - 1].petName;
            document.getElementById("list-pet-owner").innerText =
                pets[pets.length - 1].ownerName;
            document.getElementById("list-pet-species").innerText =
                pets[pets.length - 1].species;
            document.getElementById("list-pet-breed").innerText =
                pets[pets.length - 1].breed;
            // console.log(pets[pets.length - 1]);
        });

        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
        inputs[3].value = "";

        pet_info.classList.remove("d-none");
        setTimeout(() => pet_info.classList.add("d-none"), 3000);
    }
});
