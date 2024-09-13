// EXERCISE 6.1: Template literal types
// Define a template literal type for API routes.

// Create a template literal type for an API route that follows this pattern:
// '/api/<entity>/<id>'

// Entity can be one of the following: 'users', 'products', 'orders'
type Entity = "users" | "products" | "orders"// Your implementation here

type User = {
    kind: 'user'
}
type Product = {
    kind: "product"
}
type Order = {
    kind: "order"
}

type myEntity = User | Product | Order;
type myEntitykind = myEntity["kind"]
type Plural<T extends string> = "${}s";
type myEntitykindRoute = Plural<myEntitykind>;
type myApiRoute = `/api/${myEntitykindRoute}/${Id}`


// Id should be a number
type Id = number;// Your implementation here

// Define a template literal type 'ApiRoute' that represents a valid API route.
type ApiRoute = `/api/${Entity}/${Id}`// Your implementation here

// Test the ApiRoute type by assigning valid and invalid routes
const validRoute: ApiRoute = "/api/users/123"; // Should be valid
const invalidRoute: ApiRoute = "/api/user/123"; // Should error, because 'user' is not a valid Entity
const invalidRoute1: ApiRoute = "/api/users/abc"; 
// ignore the line below
export {};

//Add-On 
//Example: 
//valid ones are 
//ResolvePath<"/users", "/home"> = "/home"
//ResolvePath<"/users", "1"> = "/users/1"
type AbsolutePath<T extends string> = T extends `/${T}` ? T : never;
type ResolvePath<BasePath extends string, Path extends string> 
= Path extends AbsolutePath<Path> ? Path : `${BasePath}/${Path}`

type isAbsolute<T extends string> = T extends `/${T}` ? true : false;
type ResolvePathBool<BasePath extends string, Path extends string> 
= isAbsolute<Path> extends true ? Path : `${BasePath}/${Path}`

//Using Infer
type PluralWithIES<T extends string>  = T extends `${infer U extends string}y` 
    ? `${U}ies` 
    : `${T}s`;

type ToNumber<T extends string>  = T extends `${infer U extends number}`
    ? U
    : never;

type One = ToNumber<'-1'>;