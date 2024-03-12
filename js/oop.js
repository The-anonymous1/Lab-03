const output = document.getElementById('output');
const output2 = document.getElementById('output2');

// STEP 1a & 1b already provided, moving on to STEP 2a & 2b
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        return `${this.name.firstName} ${this.name.lastName} is ${this.age} years old. They like ${this.interests.join(', ')}.`;
    };
    this.greeting = function() {
        alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
    };
}

// Creating instances as per STEP 2b
let person2 = new Person("P2", "LP2", 90, "Male", ["dancing", "singing"]);

// STEP 4a, 4b, and 4c: Working with the Object() constructor
let car = new Object();
car.brand = "Honda";
car.model = "Civic";
car.year = 2020;
car.fun = function() {
    alert(`Driving a ${this.year} ${this.brand} ${this.model}.`);
};

// STEP 5a & 5b: Using the create() method
let anotherCar = Object.create(car);
output2.textContent = anotherCar.brand; // Shows "Honda"

// Lab 3: Creating a hamburger object
function createHamburger(options) {
    let hamburger = {
        buns: options.buns,
        garnishes: options.garnishes,
        cheese: options.cheese,
        sauce: options.sauce,
        meat: options.meat,
        pattyCount: options.pattyCount,
        extras: options.extras,
        describe: function() {
            return `This hamburger has a ${this.buns} bun, ${this.meat} patty, ${this.cheese} cheese, with ${this.garnishes.join(', ')}, and ${this.sauce} sauce. Extras include: ${this.extras.join(', ')}.`;
        }
    };
    return hamburger;
}

// Example usage:
let myHamburger = createHamburger({
    buns: "sesame",
    garnishes: ["lettuce", "tomato"],
    cheese: "cheddar",
    sauce: "mayo",
    meat: "beef",
    pattyCount: 2,
    extras: ["pickles", "onions"]
});

// Displaying hamburger description
output.textContent = myHamburger.describe();
