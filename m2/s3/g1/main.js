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

    pets.push(
        new Pet(
            inputs[0].value,
            inputs[1].value,
            inputs[2].value,
            inputs[3].value
        )
    );

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
});
