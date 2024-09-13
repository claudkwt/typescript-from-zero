// Exercise 9.1: Type guards

// 1. Add relevant type annotations to make isString a type guard
type User = {
  name: string;
  age: number;
};
type Person = User | "string"

function isString(name: unknown): name is string {
  return typeof name === "string";
}

// 1. Add relevant type annotations to make isUser a type guard
function isUser(value : unknown): value is string {
  return typeof value !== "string";
}

const persons = [ { name: 'John', age: 25 }, "Alice", "Bob"];
const users = persons.filter(isUser);
//    ^?


type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

// 2. Add relevant type annotations to make isCircle a type guard
function isCircle(shape: unknown) : shape is Circle {
  // Implement the type guard
  return shape !== null && 
  typeof shape === "object" && 
  "kind" in shape && 
  shape.kind === "circle";
}

const shapes: Shape[] = [
  { kind: "circle", radius: 10 },
  { kind: "rectangle", width: 20, height: 30 },
  { kind: "circle", radius: 15 },
];
const circles = shapes.filter(isCircle);
//    ^?


// ignore the line below
export {};
