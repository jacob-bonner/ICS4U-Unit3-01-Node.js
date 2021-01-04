// Created By: Jacob Bonner
// Created On: January 2021
// This program takes the word "recursion" and reverses the order of the letters
//   using recursion.

// This function will reverse a string that is passed into it using recursion
function reverseString(someString) {
  if (someString.length == 0) {
    // Returning the string
    return someString;
  } else {
    // Calling and returning the reverseString function again to continue
    //   reversing the original word
    return reverseString(someString.substring(1)) + someString.charAt(0);
  }
}

// Initializing the original string
const aString = "recursion";

// Printing the initial string
console.log("The original string is '" + aString + "'");

// Calling the function that will reverse the string
const newString = reverseString(aString);

// Printing out the newly reversed string
console.log("The newly reversed string is '" + newString + "'");
