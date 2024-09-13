type StringRecord = Record<string, string>;

const stringRecord: StringRecord = {
    name: "blah",
    anything: "really anything",
    //age: 10, //not allowed
}

type User = {
    name: string;
    email: string;
}

const user = {
    name: "John Smith",
    email: "john@smith.com"
} satisfies User;

const user2 = {
    name: "John Smith",
    email: "john@smith.com"
} satisfies StringRecord;

const user1: StringRecord ={
    name:"one"
}

function doSomthingToUser(user:User){
    //whatever
}

doSomthingToUser(user)
//Acceptable even though it satisfies StringRecord as its loosely defined
doSomthingToUser(user2) 
//Error: As this is directly defined as StringRecord
doSomthingToUser(user1)


//Use Case
type StyleConfig = {
    backgroundColor: string;
}
type Config = Record<string, StyleConfig>

const config = {
    light: {
        backgroundColor: "white"
    },
    dark: {
        backgroundColor: "dark"
    }
} as const satisfies Config; 
/* Allows theme to have literal types "light/dark" and not just "string"
using satisfies, and also checks that config fits the type Config
Useful in config files
*/
type Theme = keyof typeof config;
//      ^?