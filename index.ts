//Async Function (Defining function as types)
type GetString = () => Promise<string>

async function getString() {
    //         ^?  
    return ""
}

const myGetString : GetString = getString;


async function getData () {
    return {
        data: ""
    }
}

const getStringData = async () => {
    const data = await getData();
    return data.data;
}

// In javascript, void == undefined, so even if
// function (): void {}, you can return undefined

//Types that mean nothing
type A = null;
type B = undefined;
type C = void;
type D = never;

const objA: A = null; 
const objB: B = undefined;

const objC: C = undefined; //void == undefined, only exist in Typescript
const objD: D // can never be reached aka empty set, cant instantiate with anything

//wrongly defined
// const objD: D = null;
// const objD: D = undefined;

//Null vs Undefined
/*Difference between null and undefined: 
null is used when there is a defined value, and the value is "nothing".
undefined is used when something does not have a value yet.
*/
console.log(JSON.stringify({
    age: 26, 
    address: null, //will be stored as null in JSON output
    name: undefined //not included/doesnt exist in the JSON output
}))
