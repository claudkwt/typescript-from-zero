// EXERCISE 9.1: Discriminated unions
// Implement a discriminated union for different types of
// users in a system, then create functions to process these users.

// TODO: Create a discriminated union type 'User' that represents three types of users:
// 1. 'Admin' with properties: id (number), username (string), accessLevel (number)
// 2. 'Editor' with properties: id (number), username (string), department (string)
// 3. 'Viewer' with properties: id (number), username (string)
// Use a 'role' property as the discriminant
type Admin = {
  role: "Admin";
  id: number;
  username: string;
  accessLevel: string;
}
type Editor = {
  role: "Editor";
  id: number;
  username: string;
  department: string;
}
type Viewer = {
  role: "Viewer";
  id: number;
  username: string;
}

type User = Admin | Editor | Viewer ; // Your implementation here
function checkUser(user: User) {
  switch(user.role){
    case "Admin":
      return
    case "Editor":
      return 
    case "Viewer":
      return
  }
};

// TODO: Implement a function 'getUserPermissions' that takes a User and returns
// a string describing their permissions:
// - For Admin: "Full access"
// - For Editor: "Can edit content in {department}"
// - For Viewer: "Read-only access"

function getUserPermissions(user: User): string {
  // Your implementation here
  switch (user.role) {
    case "Admin":
      return "Full access"
    case "Editor":
      return `Can edit content in ${user.department}`
    case "Viewer":
      return "Read-only access"
    default:
      throw new Error("No such role")
  }
}

// Test your implementation
const viewer: User = { role: "Viewer", id: 1, username: "john_doe" };
const editor: User = { role: "Editor", id: 2, username: "jane_smith", department: "Marketing" };
const admin: User = { role: "Admin", id: 3, username: "admin_user", accessLevel: 2 };

console.log(getUserPermissions(viewer));
console.log(getUserPermissions(editor));
console.log(getUserPermissions(admin));

// ignore the line below
export {};

//Add-On Use Case: controlling user inputs, optional or not and allowed or not
type GreetingOptions =
  | {
      shouldUseCustomGreeting: true;
      customGreeting: string;
    }
  | {
      shouldUseCustomGreeting?: false;
      customGreeting?: never;
    };

// Defining when customgreeting is required:
// custom greeting should be compulsory if should use custom greeeting is true.

function makeGreeting(name: string, options?: GreetingOptions) {}

makeGreeting("john");
makeGreeting("john", {
  customGreeting: "helloagwlawh",
  shouldUseCustomGreeting: true,
});

// the below two are not allowed because we didn't explicitly set that should use custom greeting to be true.
makeGreeting("john", {
  shouldUseCustomGreeting: false,
  customGreeting: "awg",
});

makeGreeting("John", { customGreeting: "aa" });

// if we made
type GreetingOptions2 =
  | {
      // this rule means that if should use custom greeting is true, then custom greeting should be compulsory.
      shouldUseCustomGreeting: true;
      customGreeting: string;
    }
  | {
      shouldUseCustomGreeting?: false;
      customGreeting?: string;
    }
  | {
      // if its not defined or set to false, we still accept a custom greeting
      shouldUseCustomGreeting?: false;
      customGreeting?: string;
    };

function makeGreeting2(name: string, options?: GreetingOptions2) {}

// Allowed
makeGreeting2("john", {
  customGreeting: "helloagwlawh",
  shouldUseCustomGreeting: true,
});
makeGreeting2("john", {
  shouldUseCustomGreeting: false,
  customGreeting: "awg",
}); // this works because we didn't set should use custom greeting to be true
makeGreeting2("John", { customGreeting: "aa" });
