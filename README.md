## Student ID: 
12345678

## Project Overview
This project involves processing arrays of numbers and strings and creating user profiles based on the modified data. The project is divided into three main tasks:

**TASK 1**
Wrote a  function processArray in arrayManipulation.js that:
  Takes an array of numbers as an argument.
  Returns a new array where each even number is squared and each odd number is tripled.

**TASK 2**
 Added a function formatArrayStrings in arrayManipulation.js:
  The function takes two arrays as arguments:
  An array of strings.
  An array of numbers processed by processArray.
  The function modifies each string based on its corresponding number:
  Capitalize the entire string if the number is even.
  Convert the string to lowercase if the number is odd.

**TASK 3**
CreateD a file userInfo.js.
  Wrote a function called createUserProfiles that:
  Takes an array of names and the array of modified names from Task 2.
  Returns an array of objects, each containing originalName, modifiedName and id (auto-incremented starting from 1).