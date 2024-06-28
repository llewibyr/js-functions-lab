console.log('js:loaded')

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// const maxOfTwoNumbers = (x, y) => {
   // if (num1 >= num2) {
   //   return x;
  //  } else {
   //   return y;
   // }
 // }
  
 // console.log('Exercise 1 Result:', //maxOfTwoNumbers(3, 9));

 // console.log(num1, num2)

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
function isAdult(age) {
// console.log(age, 16 >= 18)
     age = 21
     
     if(age >= 18) {
       return 'Adult'
    }   else {
       return 'Minor'
    }
 }

// let age = 21

// if (age >= 18) {
//   console.log("Adult")
// } else () { 
//     console.log("Minor")
// }




console.log('Exercise 2 Result:', isAdult(21));
