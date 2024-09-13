// EXERCISE 4.1: Conditional types

// 1. Implement a type `IsString<T>` that returns `true` if `T` is a string
// type, and `false` otherwise.

type IsString<T> = T extends string ? true : false;

// Test cases
type Result1 = IsString<'hello'>; // Should be true
type Result2 = IsString<123>; // Should be false

// 2. Implement a generic function isString that returns the type `IsString<T>`
function isString<T>(value: T): IsString<T>{
  return typeof value === 'string' ? true as IsString<T> : false as IsString<T> ;
}


// Test cases
const test1 = isString('hello'); // Should be true, not boolean
const test2 = isString(123); // Should be false, not boolean


//Add-On 
type Direction = "up" | "down" | "left" | "right";
type SidewaysDirection = Exclude<Direction, "up" | "down">;
//Exclude here is a conditional generic type

type myExclude<T, U> = T extends U ? never : T;
type HorizontalDirection = myExclude<Direction, "up" | "down">;

type OppositeDirection<T extends Direction> = T extends "up" ? "down" : "up";
type OppositeUp = OppositeDirection<"up">