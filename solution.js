'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(num) {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i; 
//       console.log( `At current i = ${i}, this is sum: ${sum}`);
//     }
//   }
//   console.log(`this is the total sum: ${sum}`);
//   return sum;
// }


/* Refactor ternary operator solution */

function solution(number) {   
  let sum = 0;
  for (let i = 0; i < number; i++) {   
    sum += (!(i % 3) || !(i % 5)) ? i : 0;
  }
  console.log(sum);
  return sum;
}

solution(10);