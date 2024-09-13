// EXERCISE 7.1: Mapped types
// Implement utility types using mapped types

// TODO: Implement a 'ReadonlyDeep' type that makes all properties and nested properties of T readonly
type isObject<T> = T extends Record<string, unknown> ? true : false;

type ReadonlyDeep<T> = {
  // Your implementation here
  readonly [P in keyof T]: isObject<T[P]> extends true
  ? ReadonlyDeep<T[P]> //recursively set children to readonly
  : T[P]; //Exit case 

  //HIS Implementation
  readonly [P in keyof T] : ReadonlyDeep<T[P]>
}


type checkReadonlyDeep = ReadonlyDeep<{
  id: number;
  family: {
    father: string;
    brother: {
      name: string;
      niece: {
        name: string;
      }
    }
  }
}>
 const testReadonlyDeep: checkReadonlyDeep = {
  id: 0,
  family: {
    father: "a",
    brother: {
      name: "b",
      niece: {
        name: "c",
      }
    }
  }
 };

 testReadonlyDeep.family.brother.name = "lilBitch";

// TODO: Implement a 'PickByType' type that constructs a type by picking all properties
// from T that are assignable to U
type shallowPickByType<T,U> = {
  [K in keyof T]: T[K] extends U ? T[K] : never;
}

type PickByType<T, U> = {
  [P in keyof T]: isObject<T[P]> extends true
  ? shallowPickByType<T[P], U>
  : T[P] extends U 
    ? T[P] 
    : never;
} // Your implementation here

// TODO: Implement a 'FunctionPropertyNames' type that extracts the names of all function properties from T

type IsFUnction<T> = T extends (...args: any[]) => any ? true: false;// Your implementation here
type FunctionPropertyNames<T> = keyof {
  [K in keyof T]: (IsFUnction<T[K]> extends true ? K : never ) | (T[K] extends Record<string, unknown);
}[keyof T]


// Test your implementations
interface TestObject {
  a: number;
  b: string;
  c: boolean;
  d: {
    e: number;
    f: string;
  };
  g: () => void;
  h: (x: number) => string;
}

// Should make all properties deeply readonly
type DeepReadonlyTest = ReadonlyDeep<TestObject>;

// Should only include 'a' and 'e'
type PickByTypeTest = PickByType<TestObject, number>;

// Should only include 'g' and 'h'
type FunctionNamesTest = FunctionPropertyNames<TestObject>;

// Test your implementations here
const readonlyObject: DeepReadonlyTest = {
  a: 1,
  b: "test",
  c: true,
  d: {
    e: 2,
    f: "nested"
  },
  g: () => {},
  h: (x) => x.toString()
};

// This should cause type errors:
// readonlyObject.a = 2;
// readonlyObject.d.e = 3;

const pickedByType: PickByTypeTest = {
  a: 1,
  d: {
    e: 2,
    f: "this should cause an error"
  }
};

const functionNames: FunctionNamesTest = "g" as const;

// ignore the line below
export {};

