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
    if (inputs[0].value != "") {
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
    }
});

let pets = [];
let pet_one_to_compare = null;
let pet_two_to_compare = null;
let form_pets = document.getElementById("form-pets");

form_pets.addEventListener("submit", () => {
    const inputs = form_pets.querySelectorAll("input");
    const pets_ul = document.getElementById("pets-list");
    const pets_ul_compare_one = document.getElementById(
        "pets-list-compare-one"
    );
    const pets_ul_compare_two = document.getElementById(
        "pets-list-compare-two"
    );
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
        newPet.setAttribute("value", pets.length - 1);

        let newPetCompare = document.createElement("li");
        newPetCompare.classList.add("bg-secondary", "ps-2", "text-light");
        newPetCompare.innerText = inputs[0].value;
        newPetCompare.setAttribute("value", pets.length - 1);

        let newPetCompare_2 = document.createElement("li");
        newPetCompare_2.classList.add("bg-secondary", "ps-2", "text-light");
        newPetCompare_2.innerText = inputs[0].value;
        newPetCompare_2.setAttribute("value", pets.length - 1);

        pets_ul.appendChild(newPet);
        pets_ul_compare_one.appendChild(newPetCompare);
        pets_ul_compare_two.appendChild(newPetCompare_2);

        newPet.addEventListener("click", function () {
            document.getElementById("list-pet-name").innerText =
                pets[Number(this.getAttribute("value"))].petName;
            document.getElementById("list-pet-owner").innerText =
                pets[Number(this.getAttribute("value"))].ownerName;
            document.getElementById("list-pet-species").innerText =
                pets[Number(this.getAttribute("value"))].species;
            document.getElementById("list-pet-breed").innerText =
                pets[Number(this.getAttribute("value"))].breed;
            // console.log(pets[pets.length - 1]);
        });

        newPetCompare.addEventListener("click", function () {
            pet_one_to_compare =
                pets[Number(this.getAttribute("value"))].ownerName;
            let res = document.getElementById("result-compare-pets");
            if (pet_two_to_compare != null) {
                res.innerText = Pet.compareOwner(
                    pet_one_to_compare,
                    pet_two_to_compare
                )
                    ? "Yes, they have the same owner!"
                    : "No, they have different owners!";
            }
        });
        newPetCompare_2.addEventListener("click", function () {
            pet_two_to_compare =
                pets[Number(this.getAttribute("value"))].ownerName;
            let res = document.getElementById("result-compare-pets");
            if (pet_one_to_compare != null) {
                res.innerText = Pet.compareOwner(
                    pet_one_to_compare,
                    pet_two_to_compare
                )
                    ? "Yes, they have the same owner!"
                    : "No, they have different owners!";
            }
        });

        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
        inputs[3].value = "";

        pet_info.classList.remove("d-none");
        setTimeout(() => pet_info.classList.add("d-none"), 3000);
    }
});
