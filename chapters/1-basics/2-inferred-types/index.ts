function getUserGreeting(name: string, age: number): string {
    const isUserOld = age > 60;
    //                 ^? ;
    const isNameCapitalized = name[0] === name[0].toUpperCase();
    const isAgeEven = age % 2 === 0;
  
    // do more stuff
    // return greeting
    return `Hello ${name}! You are ${age} old`
  }