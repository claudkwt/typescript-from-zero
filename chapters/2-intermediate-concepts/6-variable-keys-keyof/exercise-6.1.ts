// Exercise 6.1: Variable keys using "keyof"

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

// 1. Use keyof to create a type representing all keys of User
type UserKey = keyof User; // Your implementation here
const userKey : UserKey ="age";

// 2. Annotate getUserProperty with appropriate types
function getUserProperty(user : User, key: UserKey) {
  return user[key];
}

const user: User = {
  id: 0, name: "", age: 10, 
}

const id = getUserProperty(user, "id");
//    ^?
//IN advanced concept, will be able to infer the type as only string

// Object representing API endpoints
const apiEndpoints = {
  getUsers: "/api/users",
  getUser: "/api/users/:id",
  createUser: "/api/users",
  updateUser: "/api/users/:id",
  deleteUser: "/api/users/:id",
} as const; // as const or not affects the type inferring of apiUrl variable

// 3. Use keyof to create a type representing all keys of apiEndpoints
type ApiEndpoint = keyof typeof apiEndpoints; // Your implementation here


// 4. Create a function that takes an ApiEndpoint and returns the corresponding URL
function getApiUrl(endpoint: ApiEndpoint) {
  return apiEndpoints[endpoint];
}

const apiUrl = getApiUrl("getUsers");

// ignore the line below
export {};