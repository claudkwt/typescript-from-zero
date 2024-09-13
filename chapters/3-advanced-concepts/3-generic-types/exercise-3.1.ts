// EXERCISE 3.1: Generic types
// Refactor the following code to use generics
// This function fetches data from different API endpoints. Currently, it uses `any`, which removes type safety.

//original functions to be refactored
async function fetchProductData() {
  const response = await fetch('/api/products');
  const products = await response.json();
  return products;
}

async function fetchOrderData() {
  const response = await fetch('/api/orders');
  const orders = await response.json();
  return orders;
}

// Refactor this to a generic function so that it works with any type of data.
// Example API responses:
// - Products: [{ id: 1, name: "Laptop" }]
// - Orders: [{ orderId: 123, total: 99.99 }]

type Product = {id: number, name: string};
type Order = {orderId: number, total: number};

async function fetchData<T>(url: string){
  const resp = await fetch(url);
  const data = await resp.json();
  return data as T;
}

async function fetchProductData() { 
  return fetchData<Product[]>("/api/products")
}
async function fetchOrderData() { 
  return fetchData<Order[]>("/api/orders")
}
const ProductData = fetchData;
const OrderData = fetchData<Order[]>("/api/products");

export {};

//Question 2
//implement the typing for this function 
/* Note: Start from the base case, to build this function.
 because the return type depends on the input of object, it needs a generic function
  
 */
function getProperty<
  T extends Record<string, unknown>, 
  U extends keyof T
>(obj: T, property: U) {
  return obj[property]
}

//valid
const name = getProperty({name: "john", age: 20}, "name");
//    ^?
const age = getProperty({name: "john", age: 20}, "age");
//    ^?
//invalid and errors
const address = getProperty({name: "john", age: 20}, "address");
//    ^?

//Add-On
type User = {
  id: string;
}

type ReadonlyUser = Readonly<User>; //Readonly is a Generic Type as it allows you to pass in types as params

function getFirstElement1(array: unknown[]){
  return array[0] ?? undefined;
}

//Making it generic
function getFirstElement<T>(array: T[]) {
  return array[0] ?? undefined;
}

const num = getFirstElement<number>([1,2,3,4,5]);

//Constraining this function to only string and numbers

function getFirstElementWithConstraints<T extends string | number>(array: T[]) {
  return array[0] ?? undefined;
}

const constrained = getFirstElementWithConstraints([""]); //params passed can only b string and number

//Add-On2
type FirstElement <T extends unknown[]> = T[0];

type Tuple = [string, number];

type FirstTupleElement = FirstElement<Tuple> 

const firstTry : FirstTupleElement = "can only be string";