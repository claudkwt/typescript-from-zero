// EXERCISE 3.2: Generic functions
// Create a generic function to merge two objects
// In this exercise, you will write a function that merges two objects.
// The function should be flexible enough to merge any kind of objects
// and preserve the type of each property.

function mergeObjects<
  T extends Record<string, unknown>, 
  U extends Record<string, unknown>
>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

// Add type annotations to make this function generic and type-safe.
// The function should accept two objects and return a new object
// containing properties from both with their original types intact.

const user = { name: "Alice", age: 25 };
const address = { city: "London", postcode: "E1 6AN" };

const userDetails = mergeObjects(user, address);
// userDetails should have type: { name: string, age: number, city: string, postcode: string }

// Ignore the line below
export {};

