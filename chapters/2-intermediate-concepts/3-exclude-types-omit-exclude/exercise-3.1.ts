import React from 'react';
// Exercise 3.1: Exclude types using "Omit" and "Exclude"

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  lastLogin: Date;
}

// 1. Use 'Omit' to create a new type 'PublicUser' that excludes the 'password' property
type PublicUser = Omit<User, 'password'>// Your implementation here

// 2. Create a function that takes a User and returns a PublicUser
function makePublic(user: User): PublicUser {
  // Implementation (optional)
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    lastLogin: user.lastLogin,
  }
}

// 3. Create a union type 'Status' with values: 'pending', 'active', 'inactive', 'banned'
type Status = 'pending'| 'active'| 'inactive'| 'banned' // Your implementation here

// 4. Add a 'status' property to the User type using the Status type
type UserwithStatus = User & {
  status : Status
}

// 5. Use 'Exclude' to create a new type 'PositiveStatus' that excludes 'inactive' and 'banned'
type UserwithPositiveStatus = Exclude<UserwithStatus, "banned" | "inactive">

// 6. Create a function that only accepts PositiveStatus as an argument
function updateUserStatusPositively(status: UserwithPositiveStatus) {
  // Implementation
}

// ignore the line below
export {};


//Add-On Use Case: Making reusable component library
type ButtonProps = {
  color: string;
  text: string;
}

function MyButton ({color, text}: ButtonProps) {
  return <button color={color} text={text}/>
}

function SuccessButton ({text}: Omit<ButtonProps, "color">) {
  return <Button color="green" text={text} />
}

function myPage () {
  //User cant even try to change the color to blue, will not accept any color property input
  <SuccessButton color="blue" text="Byee" />
}