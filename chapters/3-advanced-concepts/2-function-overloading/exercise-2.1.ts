// EXERCISE 2.1: Function overloading
// Create overloads for a function that
// concatenates one string with one number.
// Ensure that the correct type of arguments are passed and the expected return type is enforced.

function joinStringAndNumber(input1: string, input2: number): string;
function joinStringAndNumber(input1: number, input2: string): string;

// Example usage:
// joinStringAndNumber("Hello", 123); // "Hello123"
// joinStringAndNumber(123, "Hello"); // "123Hello"
// joinStringAndNumber("Hello", "World"); // Error
// joinStringAndNumber(123, 456); // Error

// Modify this function
function joinStringAndNumber(input1: string | number, input2: string | number) {
  // Some implementation
  return `${input1}${input2}`
}

joinStringAndNumber("Hello", 123); // "Hello123"
joinStringAndNumber(123, "Hello"); // "123Hello"
joinStringAndNumber("Hello", "World"); // Error
joinStringAndNumber(123, 456); // Error

// Ignore the line below
export {};

//Add-On 
type Vector2D = {
  x: number; 
  y: number; 

}

function multiply (arg1: Vector2D, arg2: number): Vector2D;
function multiply (arg1: number, arg2: Vector2D): Vector2D;

function multiply (arg1: Vector2D | number, arg2: Vector2D | number) {
  let scaleFactor;
  let vect;
  if (typeof arg1 === "number" && typeof arg2 !== "number") {
    scaleFactor = arg1;
    vect = arg2
  } else {
    scaleFactor = arg2;
    vect = arg1;
  }
  
  return {
    x: scaleFactor*vect.x,
    y: scaleFactor*vect.y
  }
}

const scaledVect = multiply(Vector: {x: 1, y: 1} as Vector2D, scaleFactor: 2)