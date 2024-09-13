// EXERCISE 8.1: Infer in conditional types
// Implement utility types using infer in conditional types

// 1. Implement a 'Parameters' type that extracts the parameter types of a function type as a tuple
// Example: Parameters<(a: number, b: string) => void> should be [number, string]

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer U) => any 
    ? U : never; // Your implementation here
type ParamsTest = MyParameters<(a: number, b: string, c: boolean) => void>;
//   ^?
const paramsTest: ParamsTest = [1, "hello", true];

// 2. Implement a 'FirstArgument' type that extracts the type of the first argument of a function
// If the function has no arguments, it should be never
// Example: FirstArgument<(a: number, b: string) => void> should be number

type FirstArgument<T extends (...args: any) => any> = ; // Your implementation here
type FirstArgTest = FirstArgument<(x: string, y: number) => void>;
//   ^?
//      Should be string
const firstArgTest: FirstArgTest = "hello";

// 3. Implement a 'LastInArray' type that extracts the type of the last element in a tuple type
// If the tuple is empty, it should be never
// Example: LastInArray<[number, string, boolean]> should be boolean

type LastInArray<T extends any[]> = ; // Your implementation here
type LastInArrayTest = LastInArray<[number, string, boolean]>;
//   ^?
//     Should be boolean
const lastInArrayTest: LastInArrayTest = true;

// ignore the line below
export {};