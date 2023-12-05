class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confronto(persona){
        if(this.age > persona.age){
            return this.firstName + " è piu vecchio di " + persona.firstName;
        } else if(this.age < persona.age){
            return persona.firstName + " è piu vecchio di " + this.firstName;
        } else{
            return persona.firstName + " ha la stessa età di " + this.firstName
        }
    }
}

let m = new User("mario", "rossi", 29, "roma");
let g = new User("giuseppe", "verdi", 31, "milano");
let f = new User("francesca", "neri", 29, "napoli");

console.log(m.confronto(g));
console.log(f.confronto(m));
console.log(g.confronto(f));


class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    ownerNameTest(pet){
        if(pet.ownerName === this.ownerName){
            return true;
        }else{
            return false;
        }
    }
}

let p1 = new Pet ("Bobby", "Manuel", "cane", "labrador");
let p2 = new Pet ("Billy", "Mario", "gatto", "persiano")

console.log(p1);
console.log(p2);
console.log(p1.ownerNameTest(p2))

let formBtn = document.querySelector("#petForm button")
formBtn.addEventListener("click", () =>{
    let f = document.querySelector("#petForm form")
    let petName = f[0].value;
    let ownerName = f[1].value;
    let species = f[2].value;
    let breed = f[3].value;
    
    let p = new Pet(petName, ownerName, species, breed);
    addList(p)
})

function addList(p){
    let ul = document.querySelector("#listPet ul")
    let li = document.createElement("li")
    li.classList.add("list-group-item")
    li.innerHTML = `
    <strong>petName: </strong> ${p.petName}
    <strong>ownerName: </strong> ${p.ownerName}
    <strong>species: </strong> ${p.species}
    <strong>petName: </strong> ${p.breed}
    `;
    ul.appendChild(li)
}
