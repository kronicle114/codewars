'use strict';

const myStr = 'My name is Trisha and I am 25 years old.';
const regex = /name/;

const isExisting = regex.test(myStr);

console.log(isExisting);

/* 

carat sign: signifies the start of a string
dollar sign: signifies the end of a string

*/

// just Trisha will pass this test
const myStr2 = 'Trisha';
const regex2 = /^Trisha$/;

const isExisting2 = regex2.test(myStr2);
console.log(isExisting2);

// anything containing T+ after will work
const myStr3 = 'Something Trisha';
const regex3 = /T[a-zA-z]+/;

const isExisting3 = regex3.test(myStr3);
console.log(isExisting3);