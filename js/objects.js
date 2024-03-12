const output = document.getElementById('output');

let person = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar"
    },
    age: 80,
    gender: "Male",
    address: {
        streetNo: 100,
        streetName: "Georgian Drive",
        city: "Barrie"
    },
    interests: ["swimming", "painting", "coding"],
    email: "priyansh.thakar@example.com",  // Added email property
    phoneNumber: "123-456-7890",  // Added phoneNumber property
    
    // STEP 3: Added greeting method
    greeting: function () {
        alert(`Hello, My name is ${this.name.firstName}`);
    },
    
    // Improved bio method to utilize the interests array properly
    bio: function () {
        return `The interests of ${this.name.firstName}, aged ${this.age}, gender ${this.gender}, are ${this.interests.join(', ')}.`;
    },
    
    // STEP 9b: Adding a goodbye method
    goodbye: function () {
        alert(`This is ${this.name.firstName} signing off!`);
    }
};

// STEP 8: Modifying properties
person.age = 18;

// STEP 9a: Adding new property eyeColor
person.eyeColor = "Green";

// STEP 10: Dynamically setting properties for hairColor
let key = "hairColor";
let value = "Black";
person[key] = value;

// Displaying the bio in the webpage
output.textContent = person.bio();

// Creating two new objects to demonstrate 'this' usage
let person1 = {
    name: "P1",
    hello: function () {
        alert(`This is ${this.name}`);
    }
}

let person2 = {
    name: "P2",
    hello: function () {
        alert(`This is ${this.name}`);
    }
}
