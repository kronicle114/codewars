'use strict';

const foo = [1, 2, 3];
const bar = [ 3, 4, 5, 6];
const bizz = [7, 8, 9];

const fooBar = foo.concat(bar);
const fooBarBizz = foo.concat(bar, bizz);

// console.log('fooBar:', fooBar);
// console.log('fooBarBizz', fooBarBizz);

//ES6 Destructuring 
const spread = [...foo, ...bar, ...bizz];

/* FILTERED */ 
const filteredArray = spread.filter((item, index, array) => {
  return array.indexOf(item) === index;
});

console.log('filteredArray', filteredArray);

/* ES6 new Set */ 
const newSet = [...new Set(spread)];
console.log('newSet:', newSet);

/* ****** for each didn't work ****** */

// const logAllDuplicates = spread.forEach( (number, i) => {
//   if(number[i]) {
//     console.log(number);
//     return number;
//   }
// });

// console.log(logAllDuplicates);

// let currentNum = 0;
// const logArrayElements = (element, index) => {
//   console.log(`index[${index}]: ${element}`);
//   if (currentNum === element) {
//     console.log(element);
//   } else {
//     currentNum += 1;
//   }
//   return currentNum;
// };

// console.log('forEach:', spread.forEach(logArrayElements));