// Exercise 5.1: Object types and interfaces

// Create an interface/type Animal with properties name (string) and sound (string).
// Create an interface/type Dog that extends Animal and adds a property breed (string).
// Create a variable myDog of type Dog and assign it an object with appropriate values.

// Add your code here
type Animal  = {
    name: string;
    sound: string;
}

interface Dog extends Animal {
    breed : string;
}

const myFutureDog: Dog = {
    name: "Apple",
    sound: "BowWow",
    breed: "BorderCollie"
}
// ignore the line below
export {}